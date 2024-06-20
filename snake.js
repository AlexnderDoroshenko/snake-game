// Define the size of the game play area
const DOT_SIZE = 20;
const GAME_BOARD_SIZE = 400; // The size of the game board

// Set the initial direction of the snake
let direction = 'right';

// Set the initial position of the apple
let apple = { top: 100, left: 100 };

// Set the initial position of the snake
let snake = [{ top: 0, left: 0 }];

// Get the game board element
const gameBoard = document.getElementById('game-board');

// Initialize the score
let score = 0;

// Get the score element
const scoreElement = document.getElementById('score');

// Get the user name element
const userNameElement = document.getElementById('user-name');

// Get the save score button element
const saveScoreButton = document.getElementById('save-score');

// Save score button click event
saveScoreButton.onclick = function() {
    // Get the user name
    const userName = userNameElement.value;
    // Save the score in the local storage
    localStorage.setItem(userName, score);
};

// Load the scores when the page loads
window.onload = function() {
    // Get the scores element
    const scoresElement = document.getElementById('scores');
    // Get all the scores from the local storage
    for (let i = 0; i < localStorage.length; i++) {
        // Get the user name
        const userName = localStorage.key(i);
        // Get the score
        const score = localStorage.getItem(userName);
        // Create a new score element
        const scoreElement = document.createElement('div');
        scoreElement.innerText = `${userName}: ${score}`;
        // Add the score element to the scores element
        scoresElement.appendChild(scoreElement);
    }
};

// Game loop
const gameInterval = setInterval(function() {
    // Create a new head for the snake
    const snakeHead = {
        top: snake[0].top,
        left: snake[0].left
    };

    // Change the position of the snake head according to the direction
    switch (direction) {
        case 'right':
            snakeHead.left += DOT_SIZE;
            break;
        case 'down':
            snakeHead.top += DOT_SIZE;
            break;
        case 'left':
            snakeHead.left -= DOT_SIZE;
            break;
        case 'up':
            snakeHead.top -= DOT_SIZE;
            break;
    }

    // Check if the snake has hit the border
    if (snakeHead.top < 0 || snakeHead.top === GAME_BOARD_SIZE || snakeHead.left < 0 || snakeHead.left === GAME_BOARD_SIZE) {
        // Stop the game
        clearInterval(gameInterval);
        return;
    }

    // Add the new head to the snake
    snake.unshift(snakeHead);

    // Check if the snake has eaten the apple
    if (snake[0].top === apple.top && snake[0].left === apple.left) {
        // Create a new random position for the apple
        apple.top = Math.floor(Math.random() * 20) * DOT_SIZE;
        apple.left = Math.floor(Math.random() * 20) * DOT_SIZE;
        // Increase the score
        score++;
        // Update the score display
        scoreElement.innerText = `Score: ${score}`;
    } else {
        // Remove the last part of the snake
        snake.pop();
    }

    // Clear the game board
    gameBoard.innerHTML = '';
    // Draw the snake
    snake.forEach(function(dot) {
        const dotElement = document.createElement('div');
        dotElement.className = 'dot';
        dotElement.style.top = `${dot.top}px`;
        dotElement.style.left = `${dot.left}px`;
        gameBoard.appendChild(dotElement);
    });

    // Draw the apple
    const appleElement = document.createElement('div');
    appleElement.className = 'apple';
    appleElement.style.top = `${apple.top}px`;
    appleElement.style.left = `${apple.left}px`;
    gameBoard.appendChild(appleElement);
}, 200);

// Key codes for arrow keys
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

// Change the direction of the snake according to the key pressed
window.onkeydown = function(e) {
    switch (e.keyCode) {
        case KEY_LEFT:
            if (direction !== 'right') direction = 'left';
            break;
        case KEY_UP:
            if (direction !== 'down') direction = 'up';
            break;
        case KEY_RIGHT:
            if (direction !== 'left') direction = 'right';
            break;
        case KEY_DOWN:
            if (direction !== 'up') direction = 'down';
            break;
    }
};