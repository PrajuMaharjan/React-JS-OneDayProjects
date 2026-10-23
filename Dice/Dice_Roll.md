# Day 10: Dice App

## Overview

On Day 10, I built a simple Dice App using **React**. The goal was to take an existing idea—a dice created using JavaScript and CSS—and recreate it using React concepts.

This project helped me practice component-based architecture, state management, event handling, and breaking a user interface into reusable components.

## Features

- Roll a dice by clicking a button
- Display the result of the latest roll
- Generate a random number between 1 and 6
- Update the interface dynamically using React state

## Components Used

### 1. `App.js`

The main component responsible for managing the application's state and logic.

- Stores the current dice value
- Contains the logic for rolling the dice
- Updates the state whenever the dice is rolled

### 2. `RollResult.jsx`

Displays the result of the latest dice roll.

- Receives the dice value through props
- Displays the current result
- Keeps the display logic separate from the main application logic

## Logic Flow

The application follows a simple sequence whenever the user rolls the dice:

1. The user clicks the **Roll Dice** button.
2. A function generates a random number between 1 and 6.
3. React state is updated with the new value.
4. React re-renders the interface to reflect the updated state.
5. `RollResult.jsx` displays the latest result.

## Example Code

The following code demonstrates how the dice value is managed using React's `useState` hook.

```jsx
const [roll, setRoll] = useState(1);

const handleRoll = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  setRoll(randomNumber);
};
```

The `handleRoll` function generates a random integer from 1 to 6 and updates the state using `setRoll`. React then re-renders the relevant components to display the new result.

## Key Concepts Learned

### Converting JavaScript Logic to React

Instead of manipulating the DOM directly, I used React state to manage changes to the interface.

### The `useState` Hook

Used `useState` to store and update the dice value. Updating the state triggers a re-render, allowing the displayed result to stay synchronized with the application's data.

### Component Separation

Separated the application's logic from its display:

- `App.js` manages the state and dice-rolling logic.
- `RollResult.jsx` displays the result.

### Props

Learned how to pass the dice value from the main component to `RollResult.jsx` using props.

## What I Learned

- How to convert a simple JavaScript project into a React application
- The importance of separating application logic from UI components
- How React state enables dynamic interface updates
- How to use `useState` to manage changing values
- How to pass data between components using props

## Future Improvements

- Add animations when rolling the dice.
- Improve the user interface and visual design.
- Add a history of previous dice rolls.

## Summary

This project helped me understand how to recreate existing JavaScript functionality using React. It reinforced my understanding of state management, component separation, props, and dynamic UI updates while giving me more practice building interactive applications.