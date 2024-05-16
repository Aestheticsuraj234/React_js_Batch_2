async function runProcess()
{
    try {
        
        let response = await fetch("https://api.github.com/users/Aestheticsuraj234" ,{
            method:"POST",
            headers:"application/json",
            body:JSON.stringify({
                title:"HELLO",
                body:"I am Suraj",
                userId:2
            })
        } )
        let data =await response.json();
        console.log(data)
        
    } catch (error) {
        console.log("I am error")
    }
    finally{
        console.log("I am finally and always run")
    }
}


runProcess()






// // // fetch("https://api.github.com/users/Aestheticsuraj234").then((res)=>{
// // //     return res.json()
// // // }).then((value)=>{
// // //     console.log(value)
// // // }).catch((err)=>{
// // //     console.log(err)
// // // })

// // // "GET--data is being fetched from the server"

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then((response) => {

// //         return response.json();
// //     })
// //     .then(data => {
// //         console.log(data);
// //     })
// //     .catch(error => {
// //         console.error('Fetch error:', error);
// //     });


// // //   *POST--data is being sent to the server


// // fetch("https://jsonplaceholder.typicode.com/posts", {
// //     method: "POST",
// //     body: JSON.stringify({
// //         title: 'HELLOWORLD',
// //         body: 'LLJALIJSIOAJDOISJDOI',
// //         userId: 2,
// //     }),
// //     headers: {
// //         "Content-type": "application/json; charset=UTF-8"
// //     }
// // }
// // )
// // .then((response) => response.json())
// // .then((json) => console.log(json))
// // .catch((err)=>{
// //     console.log(err)
// // })
// // .finally(()=>{
// //     console.log("fetching done")
// // })




// // const getData  = async()=>{
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// //         const data = await response.json();
// //         console.log(data);
        
// //     } catch (error) {
// //         console.log(error)
// //     }
// //     finally{
// //         console.log("fetching done")

// //     }

// // }

// // getData();

// // arrow functions:     

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(2, 3));