// // const user = {
// //     username:"Suraj",
// //     price:999,

// //     welcomeMessage:function(){
// //         console.log(`${this.username},  welcome to website`)
// //     }
// // }

// // user.welcomeMessage()


// // function foo()
// // {
// //     console.log(this)
// // }

// // foo()



// // // // const video = {
// // // //     title:"a",
// // // //     play(){
// // // //         console.log(this)
// // // //     }
// // // // };

// // // // video.play();a


// // // function Video(title)
// // // {
// // //     this.suraj = title;
// // //     console.log(this)
// // // }

// // // const v = new Video("a");


// // // method===>obj
// // // function ---> global (window, global)s


// // const video = {
// //     title:"a",
// //     tags:["a","b","c"],
// //     showTags(){
// //         this.tags.forEach(function(tag){
// //             console.log(this.title, tag)
// //         },this)
// //     }
// // }

// // video.showTags();






// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       console.log(this)
//     }
//   }; 


//     console.log(person.fullName()) // Output: John Doe


// let myObj = {
//   firstName:"Suraj",
//   lastName:"Kumar",
//   isProgrammer:true,
//   hello:"Hello Worlds",
//   fullname:function(){
//     return this.firstName + " " + this.lastName
//   }
  
// }

// myObj.firstName = "Rahul"

// console.log(myObj.fullname())



// function foo(){
//   console.log(this)
// }

// foo()

// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//       console.log('Hello, my name is ' + this.name);
//   };
// }
// const john = new Person('John');
// john.greet(); // Outputs: Hello, my name is John




class Person {
    constructor(eyes, nose, mouth) {
        this.eyeColor = eyes
        this.noseShape = nose
        this.mouthSize = mouth

    }
}


const Suraj = new Person("brown","sharp","small" )
console.log(Suraj.eyeColor)
const rahul = new Person("black","round","big")
const priya = new Person("blue","sharp","small")
