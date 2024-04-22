let arr = [1,2,3,4,5,6,7,8,9,10]

// *1 Push
arr.push(11)
console.log(arr)

let foodItems= ["Burger","Pizza","Sandwich"]
foodItems.push("Pasta")
console.log(foodItems)


// *2 Pop

arr.pop()
console.log(arr)

// *toString

let marks =     [90, 80, 70, 60, 50, 40, 30, 20, 10]
console.log(typeof marks.toString())


// *concat
let Marvel_Heros = ["thor" , "ironman" , "captain america"]
let DC_Heros = ["batman" , "superman" ,"Wonder Woman"]
let Heros = Marvel_Heros.concat(DC_Heros)
console.log(Heros)



// *unshift
arr.unshift(0)
console.log(arr)


// *shift
let val = arr.shift()
console.log(val)


// *splice
let arr1 = [1,2,3,4,5,6,7,8,9]
arr1.splice(1,2,90,90)
console.log(arr1)




// *slice

let arr2 = [1,2,3,4,5,6,7,8,9]
let arr3 = arr2.slice(1,5)
console.log(arr3)


// *reverse


// let array = [1, 2, 3];
// array.reverse();
// console.log(array);

// *sort
// let array = [3, 1, 2];


// array.sort((a,b)=>-a+b);
// console.log(array);


// let array = [1, 2, ,53];
// array.forEach((element) => {
//   console.log(element);
// });


