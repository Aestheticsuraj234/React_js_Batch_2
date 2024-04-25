// Strings functions
Strings are a fundamental data type in JavaScript that represent a sequence of characters. Here are some commonly used string functions along with examples:
1. length:
   - Returns the number of characters in a string.

```javascript
let str = "Hello";
let length = str.length; // length is 5
```

2. toUpperCase:
   - Converts all characters in a string to uppercase.
```javascript
let str = "hello";
let upperCaseStr = str.toUpperCase(); // upperCaseStr is "HELLO"
```

3. toLowerCase:
   - Converts all characters in a string to lowercase.
```javascript
let str = "HELLO";
let lowerCaseStr = str.toLowerCase(); // lowerCaseStr is "hello"
```

4. charAt:
   - Returns the character at the specified index in a string.
```javascript
let str = "Hello";
let char = str.charAt(1); // char is "e"
```

5. indexOf:
   - Returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
```javascript
let str = "Hello";
let index = str.indexOf("l"); // index is 2
```

6. lastIndexOf:
   - Returns the index within the calling string object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
```javascript
let str = "Hello";
let lastIndex = str.lastIndexOf("l"); // lastIndex is 3
```

7. includes:
   - Determines whether one string may be found within another string, returning true or false as appropriate.
```javascript
let str = "Hello";
let isIncluded = str.includes("ell"); // isIncluded is true
```

8. concat:
   - Combines two or more strings into one new string.
```javascript
let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1.concat(" ", str2); // concatenatedStr is "Hello World"
```

9. slice:
   - Returns a portion of a string into a new string, starting from the specified start index and ending before the specified end index.
```javascript
let str = "Hello World";
let slicedStr = str.slice(6, 11); // slicedStr is "World"
```

10. substr: --deprecated
   - Returns the characters in a string beginning at the specified location through the specified number of characters.
```javascript
let str = "Hello World";
let substr = str.substr(6, 5); // substr is "World"
```

11. replace:
   - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
```javascript
let str = "Hello World";
let replacedStr = str.replace("World", "Universe"); // replacedStr is "Hello Universe"
```


Hope these handwritten notes along with code examples are helpful! Let me know if you need further assistance!