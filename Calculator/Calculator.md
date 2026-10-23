# Calculator App

On Day 11, I built a Calculator App using **React**. The design was inspired by the calculator on my watch, and I used a YouTube tutorial as a starting point.

Initially, I wrote the entire application in a single file. Later, I refactored it into multiple components to improve code structure, readability, and reusability.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division
- Display current input and results
- Delete the last character
- Clear the entire input
- Calculate results instantly using the equals button

## Component Structure

I divided the application into four components, each with a specific responsibility.

### 1. `App.jsx`

The main component responsible for managing the application's state and logic.

- Stores user input using `useState`
- Handles calculator operations
- Passes data and functions to child components

**Example:**

```jsx
const [input, setInput] = useState("");
```

### 2. `Display.jsx`

Responsible for displaying the current input and output.

- Shows `0` when the input is empty
- Keeps the display separate from the calculator logic
- Provides a clean interface for showing calculations

### 3. `ButtonGrid.jsx`

Responsible for rendering and organizing the calculator buttons.

- Uses a grid layout
- Groups the calculator buttons together
- Passes actions such as click, delete, clear, and equals through props

### 4. `Button.jsx`

A reusable component for individual calculator buttons.

- Handles button styling
- Responds to click events
- Reduces repeated code by allowing the same component to be reused

## Core Functions

The main calculator logic is managed in `App.jsx`.

### `handleClick(value)`

Adds the selected number or operator to the current input.

```jsx
setInput((prev) => prev + value);
```

### `handleDelete()`

Removes the last character from the input.

```jsx
setInput((prev) => prev.slice(0, -1));
```

### `handleClear()`

Clears the entire input.

```jsx
setInput("");
```

### `handleEquals()`

Evaluates the current expression and converts the result into a string.

```jsx
setInput(eval(input).toString());
```

The function also uses `try-catch` to handle calculation errors.

## Styling

The application uses CSS to create a calculator interface inspired by a real calculator, with a dark theme.

- CSS Grid for arranging the buttons
- Hover effects for interactive buttons
- A dark colour scheme for the overall design
- A separate display area for input and results

## Important Learning: The Risks of `eval()`

One important lesson from this project was understanding the risks of using JavaScript's `eval()` function to evaluate mathematical expressions.

- **Security risks:** It can execute arbitrary JavaScript code, making it dangerous when handling untrusted input.
- **Reliability:** It is not designed specifically for mathematical expression parsing.
- **Best practices:** Production applications should use a safer alternative, such as a dedicated mathematical expression parser.

This helped me understand that getting an application to work is only one part of development; writing secure and maintainable code is equally important.

## Key Concepts Learned

- **Component-based architecture:** Breaking an application into smaller, reusable components.
- **State management:** Using React's `useState` hook to manage user input.
- **Event handling:** Responding to button clicks and updating the interface.
- **Code refactoring:** Moving from a single-file implementation to a multi-component structure.
- **Separation of concerns:** Keeping the display, buttons, and application logic organized.
- **Error handling:** Using `try-catch` when evaluating expressions.

## Future Improvements

- Replace `eval()` with a safer expression parser.
- Add keyboard input support.
- Improve the user interface with animations.
- Implement calculation history.

## Summary

This project helped me progress from learning basic React concepts to building a functional application. It also taught me the importance of component-based architecture, code refactoring, and following better development practices.