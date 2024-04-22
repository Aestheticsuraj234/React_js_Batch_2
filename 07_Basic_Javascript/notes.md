
1. **push**: Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
let array = [1, 2, 3];
array.push(4);
// array is now [1, 2, 3, 4]
```

2. **pop**: Removes the last element from an array and returns that element.
```javascript
let array = [1, 2, 3];
let poppedElement = array.pop();
// array is now [1, 2], poppedElement is 3
```

3. **toString**: Returns a string representing the specified array and its elements.
```javascript
let array = [1, 2, 3];
let arrayString = array.toString();
// arrayString is "1,2,3"
```

4. **join**: Joins all elements of an array into a string.
```javascript
let array = [1, 2, 3];
let joinedString = array.join('-');
// joinedString is "1-2-3"
```

5. **shift**: Removes the first element from an array and returns that element.
```javascript
let array = [1, 2, 3];
let shiftedElement = array.shift();
// array is now [2, 3], shiftedElement is 1
```

6. **unshift**: Adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
let array = [2, 3];
array.unshift(1);
// array is now [1, 2, 3]
```

7. **slice**: Returns a shallow copy of a portion of an array into a new array object selected from start to end.
```javascript
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 4);
// newArray is [2, 3, 4]
```

8. **concat**: Returns a new array that is a shallow copy of the concatenation of two or more arrays.
```javascript
let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
// newArray is [1, 2, 3, 4]
```

9. **reverse**: Reverses the elements of an array in place.
```javascript
let array = [1, 2, 3];
array.reverse();
// array is now [3, 2, 1]
```

10. **sort**: Sorts the elements of an array in place and returns the sorted array.
```javascript
let array = [3, 1, 2];
array.sort();
// array is now [1, 2, 3]
```

11. **indexOf**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
```javascript
let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);
// index is 2
```

12. **forEach**: Executes a provided function once for each array element.
```javascript
let array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 2
// 3
```

13. **map**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
let array = [1, 2, 3];
let mappedArray = array.map((element) => {
  return element * 2;
});
// mappedArray is [2, 4, 6]
```

14. **filter**: Creates a new array with all elements that pass the test implemented by the provided function.
```javascript
let array = [1, 2, 3, 4, 5];
let filteredArray = array.filter((element) => {
  return element % 2 === 0;
});
// filteredArray is [2, 4]
```

15. **reduce**: Executes a reducer function on each element of the array, resulting in a single output value.
```javascript
let array = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// sum is 15
```

16. **find**: Returns the value of the first element in the array that satisfies the provided testing function.
```
let array = [1, 2, 3, 4, 5];
let foundElement = array.find((element) => {
  return element > 3;
});
// foundElement is 4
```

17. **includes**: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```
let array = [1, 2, 3];
let includesTwo = array.includes(2);
// includesTwo is true
```
here are ten practice coding questions related to the array methods you provided:

1. **Push and Pop Operations**: Implement a stack data structure using the `push` and `pop` methods of arrays.

2. **Joining Strings**: Write a function that takes an array of strings and joins them together using the `join` method, separating each string with a specified separator.

3. **Shift and Unshift**: Implement a queue data structure using the `shift` and `unshift` methods of arrays.

4. **Slice and Concat**: Write a function that takes an array and two indices, `start` and `end`, and returns a new array containing the elements from the original array starting from `start` (inclusive) to `end` (exclusive). Then, concatenate this new array with another given array using the `concat` method.

5. **Reverse and Sort**: Given an array of numbers, reverse the array using the `reverse` method, then sort the array in ascending order using the `sort` method.

6. **Map and Filter**: Create a function that takes an array of numbers and returns a new array where each element is doubled, using the `map` method. Then, filter out all elements greater than 10 from the resulting array using the `filter` method.

7. **Reduce**: Write a function that calculates the sum of all the numbers in an array using the `reduce` method.

8. **Find and IndexOf**: Given an array of strings, find the index of the first string that starts with a given prefix using the `find` method. If not found, return the index of the first string that contains the prefix using the `indexOf` method.

9. **Includes**: Create a function that checks if a given value exists in an array using the `includes` method. Return true if the value exists, otherwise false.

10. **forEach**: Write a function that takes an array of objects representing people with `name` and `age` properties. Print out each person's name and age using the `forEach` method.