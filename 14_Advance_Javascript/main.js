let Btn = document.getElementById('btn');

// Btn.onclick = function(){
//     console.log("Button is clicked");
// }


Btn.addEventListener("click" , function(event){
    console.log(event)
    console.log("Button is clicked");
},false )

// let MyUL = document.getElementById('my-ul');
// let Li = document.querySelector('li');



// MyUL.addEventListener("click", function (e) {

//     console.log("UL is clicked");
// },true)

// Li.addEventListener("click" , function(e){
    
//     console.log("Li is clicked");
  
// })