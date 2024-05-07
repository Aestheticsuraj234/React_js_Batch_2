// // // template strings.:
// // const firstName = 'John'; //single quotes
// // const lastName = "doe"; //double quotes
// // // const age = `30`; //backticks
// // const age = 30


// // // es6 or es7
// // let fullname = firstName + " " + lastName + "is is very great person"   ; // old way

// // fullname = `${firstName} ${lastName} is very great person and his age is ${age}`

// // // console.log(fullname);

// // let pharse = "hello world this is suraj from this side." // old way

// // pharse = `hello world this is suraj from this side.
// // LKJZKLJZ
// // SKLJLKSJC
// // KSDJJSD
// // LKSJDLKJSD
// // KLJSLJSDLK
// // `

// // console.log(pharse);



// // **Rest and Spread Operators** (...)

// // !Rest Operator


// // function AddThreeNums(a,b,c)
// // {
// //     return a+b+c;
// // }

// // let result = AddThreeNums(10,20,30);



// // console.log(`Result is ${result}`);

// // function AddNumbers(...numbers)
// // {
    
// //     return numbers.reduce((sum, number) => sum + number, 0);

// // }

// // let res = AddNumbers(10,20,30,40,50,60,70,80,90,100 , 110,120,130,140,150,160,170,180,190,200);

// // console.log(`Result is ${res}`);


// function FruitBasket()
// {

//     console.log(arguments);

// }


// FruitBasket('Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple', 'Papaya', 'Guava', 'Kiwi', 'Watermelon', 'Muskmelon', 'Pomegranate', 'Strawberry', 'Blueberry', 'Raspberry')



//  !Spread Operator

// *1 Spread Operator in Array

let FruitsEmojis = ['🍎', '🍌', '🥭', '🍊', '🍇' , ["🍔"]  ]


let VegetablesEmojis=['🥦', '🥕', '🥒', '🌽', '🥬']

let foodItems = [...FruitsEmojis , ...VegetablesEmojis]

foodItems[5][0] = "🍟"

console.log(foodItems[5][0])
console.log(FruitsEmojis[5][0])




