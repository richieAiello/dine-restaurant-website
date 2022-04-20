// Pull necessary elements from the DOM
// all events pictures, btn--events, context heading and text.

// Write a function that takes a string as an argument
// store Element.classList.contains("specific className") is a variable
// For all events pictures remove class hidden if true, add class hidden if false.
// Maybe use the ternary operator.
// CSS takes care of hiding the other pictures based on screen size.

// Write another function that targets btn--events
// follow the same procedure with Element.classList.contains()
// if true button adds class "active" and child element with class "accent" removes class hidden
// if false button removes class "active" and child element with class "accent" adds class hidden

// In main section events, listen for clicks on events buttons
// On click, the heading, text, and picture for events section changes accordingly with the current active button
// Use textContent for heading and text
// run both functions for events pictures and buttons with the argument matching the current button
// Either "family", "special", "social" depending on the button 