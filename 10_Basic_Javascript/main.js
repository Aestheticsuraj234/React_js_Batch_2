// // *for Loop

// // // for(let i = 1;i<=100;i++)
// // // {
// // //     console.log(i);
// // // }

// // // for(let i=0; i<=5;i++ ){
// // // console.log(i);
// // // }


// // // output = 0 , 1 , 2 , 3 , 4 , 5




// // let number = 2;

// // for(let i =1;i<=10;i++)
// // {
// //     console.log(`${number} x ${i} = ${number *i} `)
// // }



// // *for...of Loop :- The for...of loop is used to iterate over the elements of an array or any iterable object.


// // let array = ['mango','banana','apple','orange'];
// // let string  = "hello";

// // for(let element of array )
// // {
// //     console.log("i love to eat ",element);
// // }

// // for(let elem of string)
// // {
// //     console.log(elem);
// // }



// // *for...in Loop :- The for...in loop is used to iterate over the properties of an object.

// // let User = {
// //     name: "John",
// //     age: 25,
// //     address: "New York",
// //     email: "xyz@example.com"
// // }



// // for (let key in User) {
// //     console.log(`${key} : ${User[key]}`);
// // }




// // *while Loop :- The while loop is used to execute a block of code as long as the specified condition is true.


// // let number = 11;

// // while(number<=10)
// // {
// //     console.log(number);
// //     number++;
// // }

// let i =11

// do{
// console.log(i);
// i++;
// }while(i<=10)


// *scope


// {var a = 10;}
// {
//     let a = 10;
//     // console.log(a);
// }

{
    let a = 10;
    a = 12;
    console.log(a);

}


console.log(a);

// global scope --- var
// local scope -- let , const