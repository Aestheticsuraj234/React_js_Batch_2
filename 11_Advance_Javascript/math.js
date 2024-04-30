// // // console.log(Math)

// // // *1- abs() method

// // // let num = -5;
// // // console.log(Math.abs(num))


// // // *2 - round() method

// // // let num = 55.4; 

// // // console.log(Math.round(num))


// // // *3 - ceil() method

// // // let num = 55.6;

// // // console.log(Math.ceil(num))


// // // *4 - floor() method

// // // let num = 55.9;

// // // console.log(Math.floor(num))


// // // *5 - min() method

// // // console.log(Math.min(12,45,1,90,89))


// // // *6 - max() method

// // // console.log(Math.max(12,45,1,90,89))


// // // *7 -random() method

// // let random = Math.random()

// // console.log((random * 10 ) + 100)

// // const min = 10;
// // const max = 20;
// // const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;


// //! ###########################_Number_###########################


// // *1 toString();
// // let number = Number(10)

// // console.log(typeof number.toString())


// // *2 toFixed();

// // let number = Math.PI;

// // console.log(number.toFixed(0))


// // *3 toPrecision();

// // const num = 123.456;
// // console.log(num.toPrecision(5)); // "123.5" ----Read once again carefully


// // *4 toLocaleString();

// // let number = 100000000000000;

// // console.log(number.toLocaleString('en-IN' , {
// //     style: 'currency',
// //     currency: 'USD'
// // }))


// // *5 valueOf();

// // let number = 100;
// // console.log(number.valueOf())


// // *6. isNaN(); NaN

// let a = 100
// let b = undefined


// console.log(isNaN("string"))


let min = Number.MAX_VALUE
console.log(min)