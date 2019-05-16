"use strict";
console.log("Paso 1");

let nodo_section = document.getElementById("hello-world");

hidden_section();

console.log("Paso 4");

function hidden_section() {
    console.log("Paso 2");

    nodo_section.classList.add ("section-hidden");
    console.log("Paso 3");

}   

console.log("Paso 5");
