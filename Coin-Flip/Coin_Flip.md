# Coin Flip App

## Overview

On Day 12, I built a Coin Flip App using **React**.

The goal of this project was to simulate a real coin flip using JavaScript logic and UI updates. Instead of relying on complex animations, I used rotation logic to display the result, with the coin rotating to a specific angle depending on whether the outcome was Heads or Tails.

## Features

- Flip a coin to get Heads or Tails
- Rotate the coin based on the result
- Display the latest flip result
- Maintain a history of previous flips
- Update the interface dynamically after each flip

## Component Structure

The application is divided into five components, each with a specific responsibility.

### 1. `App`

The main component responsible for managing the application's state and logic.

- Manages the coin flip result
- Tracks the coin's rotation
- Maintains the history of previous flips
- Coordinates the child components

### 2. `Coin`

Displays the coin and handles its visual appearance.

- Rotates based on the flip result
- Displays the appropriate side of the coin
- Updates its appearance when the state changes

### 3. `FlipButton`

Provides the button used to trigger a coin flip.

- Responds to click events
- Calls the coin flip function in the main component

### 4. `FlipResult`

Displays the latest coin flip result.

- Shows either Heads or Tails
- Updates whenever a new flip occurs

### 5. `FlipHistory`

Displays a list of previous coin flip results.

- Keeps track of recent outcomes
- Updates dynamically after each flip

## Core Logic

### Coin Flip Logic

The result is generated randomly using JavaScript's `Math.random()` function.

```javascript
Math.random() < 0.5 ? "Heads" : "Tails";
```

This expression returns either `Heads` or `Tails`, with each outcome having an approximately equal probability over many flips.

### Rotation Logic

The coin's rotation depends on the generated result.

| Result | Rotation |
|---|---:|
| Heads | 0° |
| Tails | 180° |

The rotation value determines which side of the coin is displayed. This approach connects the random result to the coin's visual representation without requiring complex animation logic.

## Key Concepts Learned

### Component-Based Design

Broke the application into smaller, reusable components, with each component handling a specific part of the interface or functionality.

### State Management

Used React state to track:

- The current flip result
- The coin's rotation value
- The history of previous flips

### Logic and UI Integration

Connected the random coin flip logic to the visual interface, ensuring that the coin's appearance reflects the generated result.

### Conditional Rendering

Used state to display different results and update the interface depending on the outcome of each flip.

## UI Behaviour

- The coin visually changes based on its rotation.
- The latest result updates after each flip.
- The flip history updates dynamically.
- React state keeps the displayed information synchronized with the application logic.

## Future Improvements

- Add smooth rotation transitions.
- Include sound effects for coin flips.
- Limit the history to a fixed number of recent flips, such as the last five.
- Improve the overall user interface and visual design.

## Summary

This project helped me understand how to combine JavaScript logic, React state management, and UI updates to simulate real-world behaviour in a web application. It also reinforced the importance of organizing an application into multiple components to improve readability, maintainability, and reusability.