// Creation of Date object
// let currentDate = new Date();
// let lockdownDate = new Date("2019-03-22T12:00:00");

// console.log(lockdownDate);


// let customDate = new Date(2024,  3, 16);  //(year , month, date, hour, minute, second , ms) , 

// console.log(customDate);


// //* #### Getting Information:

// // *1 GetDate

// let currentDate = new Date()
// console.log(currentDate.getDate())


// // *2 GetDay 
// console.log(currentDate.getDay()) // 0 - 6 (0 is sunday)

// // *3 GetFullYear
// console.log(currentDate.getFullYear())


// // *4 GetMonth
// console.log(currentDate.getMonth()) // 0 - 11 (0 is january)



// !#### Setting Information:

let currentDate = new Date()



// *1 SetDate

// currentDate.setDate(20)
// console.log(currentDate.getDate())


// *2 setMonth()

// currentDate.setMonth(5)
// console.log(currentDate.getMonth())  // 0 - 11 (0 is january)


// *3. setFullYear()

// currentDate.setFullYear(2022)

// console.log(currentDate.getFullYear())


// *#### Formatting:

// let formatedDate = currentDate.toLocaleString("en-IN",{
//    day: "numeric",
//     month: "long",
//     year: "numeric",
// })
// console.log(formatedDate)


let isoDateString = currentDate.toISOString(); // Returns a string in ISO format.
console.log(isoDateString)


// ######################_OBJECT_####################
// let obj_1 = {name: "Suraj", age: 20, location: "Noida"};
// console.log(obj_1);

// // Obejct Create
// let obj_3 = Object.create(obj_1);
// console.log(obj_3);

// let obj_2 = new Object();

// obj_2.id = 1;
// obj_2.name = "Tiner";
// obj_2.age = 30;
// obj_2.greet = function(){
//     console.log("Hello, Good Morning");
// }

// console.log(obj_2);

// accessing object properties

let obj_1 = {name: "Suraj", age: 20, location: "Noida" ,"isProgrammer":"true"};

// console.log(obj_1.name);
// console.log(obj_1["name"]);

// console.log(obj_1["isProgrammer"]);


// let mySymbols = Symbol("SIGMA");
// console.log('====================================');
// console.log(typeof mySymbols);
// console.log('====================================');

// let SampleObj = {
//     id: 1,
//     name: "Suraj",
//     age: 20,
//     location: "Noida",
//     [mySymbols]: "Hello"
// }

// console.log(typeof SampleObj["mySymbols"]);


// const mySymbol = Symbol();

// const myObject = {
//   [mySymbol]: 'Hello World'
// };

// console.log(myObject[mySymbol]);
// // expected output: 'Hello World'




// console.log(myObj["age"])


// Object Methods

//* 1.Object.keys()

// let myObj = {
//         name:"suraj",
//         age:20
// }



// console.log(Object.keys(obj));

// *Object.values()


// let obj = {carname:"Fiat", model:"500", color:"white"};

// console.log(Object.values(obj));


// *Object.entries()

let sampleObj = [{name:"suraj",age:20} , ]
let sampleObj2 = {location:"noida",instaId:"sigma_developer_"}
let sampleObj3 = Object.assign(sampleObj , sampleObj2)

// console.log(sampleObj3);


// *Object.hasOwnProperty()

console.log(sampleObj3.hasOwnProperty("name"));
