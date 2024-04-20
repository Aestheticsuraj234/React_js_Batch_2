// // *suraj 1 se lekr 5 number tak print kare
// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)


// // // day-2 
// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)


// // // day-3

// //DRY- Don't Repeat Yourself 

// //! how to write a function in javascript

// // function SayHello(){
// //     console.log("Hello")
// // }

// // // SayHello -- function reference

// // SayHello()


// // function PrintName()
// // {
// //     console.log("Suraj")

// // }


// // PrintName()



// // *Parameters and Arguments in Function

// function AddTwoNum(number1=30 , number2=55)  //* Parameters
// {
//     console.log(number1 + number2)
// }



// AddTwoNum(10 , 30) //* Arguments


// function PrintNumber(...numbers)  //* Parameters
// {
//     console.log(numbers)
// }

// PrintNumber(10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100)



// *Return Keyword in Function

// function GreetUser(username)
// {
//     return"Good Evening" + " " +username
// }

// let res = GreetUser("Jhon punjabi")
// console.log(res)


// function AddTwoNum(number1, number2) {
//     console.log("helo this is before return")

//     return number1 + number2

//     console.log("helo this is after return")
// }


// let var1 = AddTwoNum(10, 20)

// console.log(var1)

//* Anonymous Function

//let sayHello = function(){
   // console.log("Hello")
//}

////
//sayHello()

// * Arrow Function

const SayHello = () => {
    console.log("Hello")
}



// *Immediately Invoked Function Expression (IIFE)

(function(){
    console.log("Hello")
})()