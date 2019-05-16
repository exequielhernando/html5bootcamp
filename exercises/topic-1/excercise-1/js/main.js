"use strict";
console.log("Paso 1");

let nodo_section = document.getElementById("hello-world");
let btn_greet = document.getElementById("greet");
let hidden = setTimeout('hidden_section()', 3000);
console.log("Paso 3");

btn_greet.addEventListener("click", function() {
    greet();    
})



function hidden_section() {
    nodo_section.classList.add ("section-hidden")   ;
    console.log("Paso 2");
}   

function greet() {
    alert("Says: Hello World with alert")    
}