Template strings, also known as template literals, are a feature introduced in ECMAScript 6 (ES6) that provide a more convenient way to work with strings in JavaScript. They allow for embedding expressions inside strings, making string interpolation and multiline strings easier to work with. Here are some key points about template strings along with coding examples:

1. **String Interpolation**: Template strings allow you to embed expressions directly inside the string using `${}` syntax.

```javascript
const name = "Alice";
const age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Output: Hello, my name is Alice and I am 30 years old.
```

2. **Multiline Strings**: With template strings, multiline strings can be created without the need for escape characters like `\n`.

```javascript
const multilineString = `This is a multiline
string created using
template literals.`;
console.log(multilineString);
/*
Output:
This is a multiline
string created using
template literals.
*/
```


3 **Expression Evaluation**: Expressions inside `${}` are evaluated, which allows for executing JavaScript code within the string.

```javascript
const x = 10;
const y = 20;
console.log(`The sum of ${x} and ${y} is ${x + y}.`);
// Output: The sum of 10 and 20 is 30.
```

5. **Escaping Characters**: Template strings allow backticks to be used within the string by escaping them with a backslash.

```javascript
const message = `A backtick inside a template string: \` `;
console.log(message); // Output: A backtick inside a template string: `
```


**Rest and Spread Operators**

*Rest Operator (...)*

- Syntax: `...variableName`
- Allows functions to accept an indefinite number of arguments as an array.
- Collects all remaining arguments into an array.
- Useful when working with functions that can accept a variable number of arguments.

*Examples:*

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));   // Output: 30
```

*Spread Operator (...)*

- Syntax: `...iterable`
- Expands an iterable (like an array or object) into individual elements.
- Useful in array literals, function calls, and more.
- Creates shallow copies of arrays or objects.

*Examples:*

```javascript
// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
// Output: { a: 1, b: 2, c: 3 }

// Copying an object
const originalObject = { x: 1, y: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject);
// Output: { x: 1, y: 2 }

// Passing object properties as arguments
function displayInfo(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "Alice", age: 30 };
displayInfo(...Object.values(person)); // Output: Name: Alice, Age: 30
```
