Step 1: Get the display element
```javascript
const display = document.getElementById('display');
```
This line retrieves the display element from the HTML document using its ID (`display`). This element is where the input and output of the calculator will be shown.

Step 2: Function to append value to the display
```javascript
function appendToDisplay(value) {
    display.value += value;
}
```
This function appends the provided `value` to the display element's current value. It is called when a user clicks on a digit or operator button on the calculator.

Step 3: Function to clear the display
```javascript
function clearDisplay() {
    display.value = '';
}
```
This function clears the display by setting its value to an empty string. It is called when the user clicks on the clear (C) button.

Step 4: Function to evaluate and display the result
```javascript
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
```
This function evaluates the expression in the display using the `eval()` function, which calculates the result. If successful, it updates the display with the result. If an error occurs during evaluation (e.g., invalid expression), it displays 'Error' on the display.

Each line of code serves a specific purpose in enabling the basic functionality of the calculator, such as input handling, calculation, and display management.