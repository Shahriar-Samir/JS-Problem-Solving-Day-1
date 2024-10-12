// Here’s a function that implements a basic debounce mechanism. The debounce function ensures that the given function only executes after a certain delay, and if the function is called again before that delay is over, the timer resets. This is useful for scenarios like handling events that fire frequently (e.g., resizing a window or typing in a text box).

// Debouncing is needed to:

// Prevent Excessive Function Calls: Reduce the frequency of function execution in response to frequent events (like keypresses, scrolls, or resizes).
// Improve Performance: Avoid performance bottlenecks caused by handling repeated triggers in a short span.
// Optimize Resource Usage: Prevent unnecessary API calls, DOM updates, or other expensive operations.
// Ensure Final Action: Ensure the function executes only after the user finishes an action (e.g., typing, resizing, scrolling).
// Avoid Unnecessary Re-renders: In UI frameworks like React, debouncing prevents unnecessary re-renders due to rapid state updates.








function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);  // Clear any existing timer
        timer = setTimeout(() => func.apply(this, args), delay);  // Set a new timer
    };
}

// Example usage:
const logMessage = () => console.log("Function executed");

const debouncedLog = debounce(logMessage, 2000); // Delay of 2 seconds

// Simulating multiple rapid calls (e.g., typing in a search input)
debouncedLog();
debouncedLog();
debouncedLog();