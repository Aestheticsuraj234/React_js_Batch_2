// // // // // console.log(1)
// // // // // console.log(2)
// // // // // console.log(3)
// // // // // console.log(4)
// // // // // console.log(5)


// // // // // console.log(1)
// // // // // console.log(2)
// // // // // console.log(3)
// // // // // console.log(4)
// // // // // console.log(5)

// // // // function CountNumbers() {
// // // //     console.log(1)
// // // //     console.log(2)
// // // //     console.log(3)
// // // //     console.log(4)
// // // //     console.log(5)
// // // // }

// // // // // CountNumbers()
// // // // CountNumbers()


// // // // ?Syntax of writing Functions in Javascript

// // // // *1 Function Declaration
// // // function functionName(){

// // //     console.log("Hello world")
// // // }

// // // // *2 Give Function Reference

// // // // functionName

// // // // *3 Function execute
// // // functionName()


// // // // ?PARAMETERS AND ARGUMENTS IN FUNCTION

// // // // // *Parameters are the variables that are used in the function definition
// // // // function SayHelloToUserName(username , age){
  
// // // //     console.log(`Hello ${username} your age is ${age}`)
   
// // // // }

// // // // // *Arguments are the values that are passed to the function when it is called

// // // // let name = 19
// // // // let age = 19
// // // // SayHelloToUserName(name,age)



// // // function AddTwoNum(xyz=12 , abc=13 ) // *Parameters
// // // {
// // //     console.log(xyz + abc)
// // // }


// // // AddTwoNum(14 , 2 ) // *Arguments




// // function PrintNum(...numbers) //   *Rest Operator    
// // {
// //     console.log(numbers)
// // }


// // PrintNum(14 , 10 , 23 , 56 ,78 , 90,34 ) // *Arguments




// // function PrintUserNameFromObject(user)
// // {
// //     console.log(user.username)
// // }

// // let myObj = {
// //     username: "Suraj",
// //     age: 20
// // }

// // PrintUserNameFromObject(myObj)



// // * Return keyword in function

// function SubTwoNum(x,y)
// {
//     return x-y
//     console.log("THIS IS OUR RETURN FUNCTION")
// }


// // console.log(SubTwoNum(10,5))
// let result = SubTwoNum(10,5)

// console.log(result)


// *Immediately Invoked Function Expression (IIFE)
(   function(name) {
    console.log("db is connected" + name);
}
)("suraj")


