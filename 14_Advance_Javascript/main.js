let MyUL = document.getElementById('my-ul');
let Li = document.querySelector('li');
let anc = document.querySelector('#myAnchor');
let body = document.querySelector('body');

// let btn = document.getElementById('btn');


// btn.addEventListener("click" , function(e){
//     console.log("Button is clicked");
   
// } , true)


MyUL.addEventListener("click", function (e) {
    
    console.log("UL is clicked");
},true)

Li.addEventListener("click" , function(e){
    e.stopPropagation();
    console.log("Li is clicked");
  
},true)

// anc.addEventListener("click" , function(e){
    
//     console.log("a is clicked");
  
// },false)