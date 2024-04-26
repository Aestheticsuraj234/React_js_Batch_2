**Loops:**

Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met

1. **for loop:**✅
   - Syntax: `for (initialization; condition; increment/decrement) { // code block }`
   - Executes a block of code repeatedly until a specified condition evaluates to false.
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
     ```

2. **for...of loop:**
   - Iterates over iterable objects (like arrays, strings, etc.) and executes a block of code for each distinct element.
   - Syntax: `for (variable of iterable) { // code block }`
   - Example:
     ```javascript
     const fruits = ["apple", "banana", "cherry"];
     for (const fruit of fruits) {
         console.log(fruit);
     }
     ```

3. **for...in loop:**
   - Iterates over the enumerable properties of an object.
   - Syntax: `for (variable in object) { // code block }`
   - Example:
     ```javascript
     const person = { name: "John", age: 30 };
     for (const key in person) {
         console.log(`${key}: ${person[key]}`);
     }
     ```

4. **while loop:**
   - Executes a block of code while a specified condition is true.
   - Syntax: `while (condition) { // code block }`
   - Example:
     ```javascript
     let i = 0;
     while (i < 5) {
         console.log(i);
         i++;
     }
     ```

5. **do...while loop:**
   - Similar to a while loop, but the block of code is executed at least once before the condition is tested.
   - Syntax: `do { // code block } while (condition);`
   - Example:
     ```javascript
     let i = 0;
     do {
         console.log(i);
         i++;
     } while (i < 5);
     ```

**Control Flow:**

1. **break:**
   - Used to exit a loop prematurely.
   - Example:
     ```javascript
     for (let i = 0; i < 10; i++) {
         if (i === 5) {
             break;
         }
         console.log(i);
     }
     ```

2. **continue:**
   - Skips the current iteration of a loop and proceeds to the next iteration.
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
         if (i === 2) {
             continue;
         }
         console.log(i);
     }
     ```

**Scope:**

- **Global Scope:** Variables declared outside of any function, accessible from anywhere within the script.
- **Local Scope:** Variables declared within a function, only accessible within that function.

I hope these notes help you understand loops and scope in JavaScript! Let me know if you have any questions.