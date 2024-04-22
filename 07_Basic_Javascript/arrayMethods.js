// *1. Push()

// let Numbers = [1, 2, 3, 4, 5];

// let result = Numbers.push(3,34,56);
// console.log(result); // 6

// console.log(Numbers)


// *2. Pop()


// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let result = fruits.pop();

// console.log(result); // Mango

// console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]


// *3 toString()

// let transportation = [1,2, 3, 4];
// // console.log(typeof transportation); 

// let result = transportation.toString();

// console.log(typeof result); // 1,2,3,4



// *4 join()

// let num = [1,2,3,4,5,6,7,8,9,10];

// let result = num.join("_")

// console.log(result);

// console.log(num); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]



// *5 shift()

// let MarvelsHero = ["IronMan" , "Thor", "Hulk", "Captain America"];

// let result = MarvelsHero.shift();

// console.log(result)

// console.log(MarvelsHero); 

// *6 unshift()

// let GymExe = ["PushUp", "PullUp", "Squats", "DeadLift"];

// let result = GymExe.unshift("BenchPress", "ShoulderPress");


// console.log(result); // 6
// console.log(GymExe); 


// *7 Slice()

// let Vege = ["Tomato", "Potato", "Onion", "Carrot", "Cabbage"];

// let result = Vege.slice(0,3)
// console.log(result); 

// console.log(Vege); // [ 'Tomato', 'Potato', 'Onion', 'Carrot', 'Cabbage' ]



// *8 Splice()

// a. Removing elements
// let cars = ["BMW", "Benz", "Audi", "Toyota", "Honda"];

// let result = cars.splice(1,1)
// console.log(result); // [ 'Benz', 'Audi' ]
// console.log(cars); // [ 'BMW', 'Toyota', 'Honda' ]


// b. Adding elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let result = fruits.splice(2,0,"Lemon","kiwi","Pineapple")
// console.log(result); // []

// console.log(fruits); 


// c. Replacing elements

// let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];

// let result = colors.splice(0,2,"Black", "white")

// console.log(result); // [ 'Red', 'Green' ]
// console.log(colors); // [ 'Black', 'White', 'Blue', 'Yellow', 'Pink' ]



// *9 Concat()

let arr1 = ["thor" , "ironman" , "captain america"];
let arr2 = ["batman" , "superman"]

let result = arr1.concat(arr2)

console.log(result); // [ 'thor', 'ironman', 'captain america', 'batman', 'superman]