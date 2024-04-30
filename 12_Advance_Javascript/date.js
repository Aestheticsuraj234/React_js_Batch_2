// let myObj = {
//     name: 'Rahul',
//     age: 23,
//     isActive: trueW
// }

// let myNewObj = new myObj
// let currentDate = new Date();

// console.log(currentDate);


// *Arguments

// let specificDate = new Date("2020-03-25")

// console.log(specificDate);


// *year, month, day, hour, minute, second, and millisecond values.

// let specificDate = new Date(2024 , 0 , 5 , 10 , 20 , 30 ,999 )

// console.log(specificDate);


// *getDate()

// let currentDate = new Date();
// console.log(currentDate.getDate())

// *getMonth()

// let currentDate = new Date();
// console.log(currentDate.getMonth())

// *getFullYear()

// let currentDate = new Date();
// console.log(currentDate.getFullYear())



// Settings Date

// *setDate(day)
// let currentDate = new Date();

// currentDate.setDate(15)

// console.log(currentDate.getDate())

// *setMonth(month)

// let currentDate = new Date();

// currentDate.setMonth(1)

// console.log(currentDate.getMonth())

// *setFullYear(year)

// let currentDate = new Date()

// currentDate.setFullYear(2022)

// console.log(currentDate.getFullYear())


// Formatting functions

let currentDate = new Date()

// console.log(currentDate.toDateString())

// console.log(currentDate.toTimeString())

// console.log(currentDate.toLocaleString("en-IN",{
//     weekday: "long",
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
// }))

console.log(currentDate.toISOString())