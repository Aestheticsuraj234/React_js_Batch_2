// // *Creation Of Promise
// // !let MyPromise = new Promise()

// // let MyPromise = new Promise(()=>{

// //     console.log("Hello world this is my Promise")

// // })

// // new Promise(()=>{
// //     console.log("Hello")
// // })


// // Promise states
// // 1. Pending
// // 2. Resolved
// // 3. Rejected


// // let MyPromise = new Promise((resolve , reject)=>{
// //     console.log("Hello world this is my Promise")
// //     resolve()
// // })


// // // *Consumption of Promise

// // // 1. then() ----> resolve()
// // // 2. catch()
// // // 3. finally()

// // MyPromise.then(()=>{
// //     console.log("My Promise Resolved")
// // })


// // let MyPromise = new Promise((resolve , reject)=>{
// //     console.log("Hello world this is my Promise")
// //     // resolve()
// //     reject()
// // })


// // // *Consumption of Promise

// // // 1. then() ----> resolve()
// // // 2. catch() ----> reject()
// // // 3. finally()

// // MyPromise.catch(()=>{
// //     console.log("My Promise Rejected")
// // })


// // let MyPromise = new Promise((resolve , reject)=>{
// //         console.log("Hello world this is my Promise")
// //         // resolve()
// //         reject()
// //     })


// //     // *Consumption of Promise

// //     // 1. then() ----> resolve()
// //     // 2. catch() ----> reject()
// //     // 3. finally() ---> always run

// //     MyPromise.then(()=>{
// //         console.log("My Promise Resolved")
// //     }).catch(()=>{
// //         console.log("My Promise Rejected")

// //     }).finally(()=>{
// //         console.log("I will always run")
// //     })


// // let MyPromise = new Promise((resolve , reject)=>{
// //     console.log("Hello world this is my Promise")
// //     resolve("Hello this is resolve")
// //     reject("Hello this is reject")
// // })


// // // *Consumption of Promise

// // // 1. then() ----> resolve()
// // // 2. catch() ----> reject()
// // // 3. finally() ---> always run

// // MyPromise.then((value)=>{
// //     console.log(value)
// // }).catch((error)=>{
// //     console.log(error)

// // }).finally(()=>{
// //     console.log("I will always run")
// // })


// // let myPromise = new Promise((resolve , reject)=>{
// //     resolve({name:"Suraj" , age:20})
// // })

// // myPromise.then((value)=>{
// //     console.log(value)
// // })


// let age = 28;

// let Age_Checker_Vote = new Promise((resolve, reject) => {
//     if (age > 18) {
//         resolve("You can vote")
//     }
//     else {
//         reject("You can't vote")
//     }
// })

// Age_Checker_Vote.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })


fetch("https://api.github.com/users/Aestheticsuraj234")
.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})