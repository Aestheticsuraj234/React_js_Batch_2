// *1. Length - The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.

// let str = "Hello World";
// console.log(str.length) //11


// *2. toUpperCase() - The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

// let smallStr = "this is a string";
// let str = smallStr.toUpperCase()
// console.log(str)
// console.log(smallStr)



// *3. toLowerCase() - The toLowerCase() method returns the calling string value converted to lowercase.

// let UpperCasestr = "HELLO WORLD";
// let str = UpperCasestr.toLowerCase()
// console.log(str)

// *4. charAt() - The charAt() method returns the specified character from a string.

// let myString = "Superman";

// console.log(myString.charAt(10))

// *5. indexOf() - The indexOf() method returns the position of the first occurrence of a specified value in a string.

// let fruit = "Applep";
// console.log(fruit.indexOf("p"))


// *6. lastIndexOf() - The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

// let fruit = "Hello world";

// console.log(fruit.lastIndexOf("world"))

// *7 includes() - The includes() method determines whether a string contains the characters of a specified string.

// let string_char = "Hello world this is suraj from this side";

// console.log(string_char.includes("this"))


// *8. Concat() - The concat() method concatenates the string arguments to the calling string and returns a new string.

// let str1 = "Hello";
// let str2 = "World";

// let str3 = str1.concat(" ", str2 , " ", "This is Suraj");

// console.log(str3)


// *9. slice() - The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// let names = "SurajKumar";
// let newName = names.slice(0, 9)
// console.log(newName)


// *10 substr() - The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

let string = "Cats are the best!";
let newString = string.substr(0, 4);
console.log(newString)


// *11. replace() - The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

let str = "Please visit Microsoft!";
let n = str.replace("Microsoft", "amazon");
console.log(n)