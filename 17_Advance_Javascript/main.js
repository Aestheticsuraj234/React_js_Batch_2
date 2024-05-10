const myJson = `{
    "name": "John",
    "age":"19",
    "city":"New York",
}`



// Parsing JSON

const parsedJSON = JSON.parse(myJson);

console.log("PARSED_JSON🔥:",parsedJSON);


// // Stringify JSON

let mySampleoBJ = {
    name : "John", 
    age : 25,
    city : "New York",
    state:"NY",
    isPolluted: true,
    isSmoker: false,
    sampleData:{
        name : "John", 
        age : 25,
        city : "New York",
        state:"NY",
        isPolluted: true,
        isSmoker: false
    
    },
    arrayData:["hello","world","how","are","you"]
}


const stringifiedJSON = JSON.stringify(mySampleoBJ);

console.log("STRINGIFIED_JSON🔥",stringifiedJSON);


// const parseString = require('xml2js').parseString;

// const xml = `
// <task>
//     <id>1</id>
//     <taskName>Do the dishes</taskName>
//     <completed>false</completed>
//     <date>2019-01-01</date>
// </task>
// `;

// parseString(xml, function(err, result) {
//     if (err) {
//         console.error(err);
//     } else {
//         const task = result.task;
//         const taskObject = {
//             id: task.id[0],
//             taskName: task.taskName[0],
//             completed: task.completed[0] === 'true',
//             date: task.date[0]
//         };
//         console.log(taskObject);
//     }
// });