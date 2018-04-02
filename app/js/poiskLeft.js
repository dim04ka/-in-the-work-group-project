var make = document.getElementById("Make");
var model = document.getElementById("Model");
var valueMake = make.value;
var valueModel = model.value;  
var carBlock = document.querySelectorAll('.car');
var carMake = document.querySelectorAll('.make');

for (var i=0; i<carBlock.length;i++) { 
    
    if (carMake[i].innerHTML == valueMake) {
        console.log("dadad");
    } else {
        carBlock[i].style.display="none";
    }   
}