# Simple Snake Game

This is a simple implementation of the classic Snake game using JavaScript, HTML, and CSS.

## How to Play

1. Open `index.html` in your web browser.
2. Enter your name in the input field.
3. Use the arrow keys to control the snake.
4. Eat the red apple to increase your score.
5. The game ends when the snake hits the border.
6. Click the "Save Score" button to save your score. Your score will be displayed on the page the next time you load it.

## Code Structure

- `index.html`: This file contains the HTML structure of the game, including the game board and the score display.
- `snake.js`: This file contains the JavaScript code that controls the game logic.

## Game Rules

- The snake moves in the direction indicated by the arrow keys.
- The snake grows in length when it eats an apple.
- The game ends when the snake hits the border of the game board.

## Future Improvements

- Add a game over screen with the option to restart the game.
- Improve the efficiency of the game by only updating the parts of the game board that have changed.
- Add error handling for situations where `localStorage` is not available or full.