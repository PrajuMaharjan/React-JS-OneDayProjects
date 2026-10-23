# Tic-Tac-Toe

## Technical Documentation

## 1. Overview

This is a browser-based Tic-Tac-Toe game built with **React JS**. It supports two game modes: Player vs Player and Player vs Computer. The application follows a component-based architecture, with state managed centrally in `App.jsx` and passed down to child components through props.

## 2. How to Play

1. Select a game mode using the **Click To Change Mode** button.
2. Player 1 always goes first and plays as **X**.
3. Click any empty cell on the board to place your symbol.
4. Players alternate turns until a winner is found or the board is full.
5. Click **Restart** to reset the board at any time.

## 3. Game Modes

| Game Mode | Player 1 (X) | Player 2 (O) |
|---|---|---|
| Player vs Player | Human | Human |
| Player vs Computer | Human | Computer |

## 4. Win Conditions

A player wins by filling any of the following eight combinations.

| Winning Combination | Board Indices (0-based) |
|---|---|
| Row 1 | 0, 1, 2 |
| Row 2 | 3, 4, 5 |
| Row 3 | 6, 7, 8 |
| Column 1 | 0, 3, 6 |
| Column 2 | 1, 4, 7 |
| Column 3 | 2, 5, 8 |
| Diagonal (top-left to bottom-right) | 0, 4, 8 |
| Diagonal (top-right to bottom-left) | 2, 4, 6 |

If all nine cells are filled without a winner, the game ends in a draw.

### Board Index Layout

```text
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
```

## 5. Component Structure

The application is divided into reusable components, each responsible for a specific part of the interface or functionality.

| Component | File | Responsibility |
|---|---|---|
| `App` | `App.jsx` | Root component that manages game state and logic |
| `Header` | `Header.jsx` | Displays the game title |
| `ModeSelector` | `ModeSelector.jsx` | Provides the button for toggling game modes |
| `CurrentTurn` | `CurrentTurn.jsx` | Displays the current player's name and symbol |
| `BoxGrid` | `BoxGrid.jsx` | Renders the 3×3 board by mapping over `boardValues` |
| `Box` | `Box.jsx` | Represents an individual clickable cell |
| `WinnerText` | `WinnerText.jsx` | Displays the winner or draw message |
| `RestartButton` | `RestartButton.jsx` | Resets the game when clicked |

### Component Tree

```text
App
├── Header
├── ModeSelector
├── CurrentTurn
├── BoxGrid
│   └── Box (x9)
├── WinnerText
└── RestartButton
```

## 6. State Management

All application state is managed in `App.jsx` using React's `useState` hook.

| State Variable | Type | Initial Value | Purpose |
|---|---|---|---|
| `mode` | String | `"Player VS Computer"` | Stores the current game mode |
| `currentPlayer` | String | `"Player 1"` | Identifies the active player |
| `currentSymbol` | String | `"X"` | Stores the active player's symbol |
| `winner` | String | `""` | Stores the winner's name or `"Noone"` for a draw |
| `boardValues` | Array | Nine empty strings | Stores the value of each cell (`X`, `O`, or empty) |
| `gameActive` | Boolean | `true` | Indicates whether the game is in progress |

## 7. Core Functions

### `handleGamePlay(box_number)`

Handles a player's move when a board cell is clicked.

- Prevents interaction with occupied cells or when the game has ended.
- Creates a copy of the current board.
- Places the current player's symbol in the selected cell.
- Updates the board state.
- Calls `checkWinner` to determine whether the move ends the game.
- Calls `changeTurnAndSymbol` if the game continues.

### `checkWinner(newBoard)`

Checks whether the updated board contains a winning combination or a draw.

- Accepts the updated board as a parameter to avoid relying on stale React state.
- Iterates through all eight winning combinations.
- Sets the winner and returns `true` when a winning combination is found.
- Detects a draw when no empty cells remain.
- Checks for a winner before checking for a draw to avoid overwriting a valid winning result.

### `changeTurnAndSymbol()`

Switches the active player and symbol according to the selected game mode.

- **Player vs Computer:** Alternates between Player 1 and Computer.
- **Player vs Player:** Alternates between Player 1 and Player 2.

### `handleRestart()`

Resets the game to its initial state.

- Clears all nine board cells.
- Sets `gameActive` to `true`.
- Clears the winner.
- Resets the active player to Player 1.
- Resets the active symbol to `X`.

### `changeMode()`

Toggles between the two game modes and calls `handleRestart()` to reset the board whenever the mode changes.

## 8. Props Reference

Props are used to pass data and event handlers from parent components to child components.

### `Header`

| Prop | Type | Description |
|---|---|---|
| `headerText` | String | Text displayed as the page title |

### `ModeSelector`

| Prop | Type | Description |
|---|---|---|
| `onClick` | Function | Handler for toggling the game mode |
| `labelText` | String | Label displayed before the mode name |
| `currentMode` | String | Currently selected game mode |
| `buttonText` | String | Text displayed on the button |

### `CurrentTurn`

| Prop | Type | Description |
|---|---|---|
| `playerName` | String | Name of the active player |
| `symbol` | String | Active player's symbol (`X` or `O`) |

### `BoxGrid`

| Prop | Type | Description |
|---|---|---|
| `boardValues` | Array | Array containing the nine cell values |
| `onBoxClick` | Function | Handler called with the selected cell's index |

### `Box`

| Prop | Type | Description |
|---|---|---|
| `box_number` | Number | Index of the cell, from 0 to 8 |
| `value` | String | Current value of the cell |
| `onBoxClick` | Function | Click handler passed down from `BoxGrid` |

### `WinnerText`

| Prop | Type | Description |
|---|---|---|
| `gameActive` | Boolean | Indicates whether the game is still active |
| `winnerName` | String | Winner's name or `"Noone"` for a draw |

### `RestartButton`

| Prop | Type | Description |
|---|---|---|
| `onClick` | Function | Handler for restarting the game |

## 9. Known Limitations

- **No actual computer AI:** In Player vs Computer mode, the computer does not make autonomous moves, so the human must play both sides manually.
- **No score tracking:** Wins and losses are not tracked across multiple rounds.
- **No end-game animations:** Winning and drawing do not trigger animations.
- **Immediate mode reset:** Changing the game mode resets the board immediately, without a confirmation prompt.

## 10. File Structure

| File | Purpose |
|---|---|
| `App.jsx` | Root component containing game state and logic |
| `App.css` | Global styles for the application |
| `Header.jsx` | Displays the game title |
| `ModeSelector.jsx` | Handles game mode selection |
| `CurrentTurn.jsx` | Displays the active player and symbol |
| `BoxGrid.jsx` | Renders the game board |
| `Box.jsx` | Represents an individual board cell |
| `WinnerText.jsx` | Displays the end-game message |
| `RestartButton.jsx` | Provides the game reset functionality |

---

This documentation describes the game's gameplay, component architecture, state management, core functions, props, and current limitations.