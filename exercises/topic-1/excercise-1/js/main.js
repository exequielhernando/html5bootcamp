"use strict";
console.log("Paso 1");

let nodo_section = document.getElementById("hello-world");
let btn_get_response = document.querySelector("#greet");
let hidden = setTimeout('hidden_section()', 3000);
let api_response = document.getElementById("api-response");
console.log("Paso 3");

btn_get_response.addEventListener("click", function() {
    //greet();    
    //get_response_api();
    get_data();
})

function hidden_section() {
    nodo_section.classList.add ("section-hidden")   ;
    console.log("Paso 2");
}   

function greet() {
    alert("Says: Hello World with alert")    
}
// function get_response_api(){
//     //Step 1 Constant, this will not any change
//     const xhttp = new XMLHttpRequest();
//     //Declare type of document
//     xhttp.responseType = "json";
//     //Step 2 Function for get de document, selec url, and true for asynchronic method
//     xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

//     //Step 3 send the document
//     xhttp.send();

//     //Step 4 valid the document state 4(request finished and response is ready) and status 200(OK)
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4){
//             if(this.status == 200){
//                 console.log(this.response.value.joke);
//                     api_response.innerHTML = this.response.value.joke;
//             }
//         }  
//     }

// }
// function get_data_arrow(){
//     fetch("http://api.icndb.com/jokes/random")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.value.joke);
//         api_response.innerHTML = data.value.joke;

        
//     })
// }
function get_data(){
    fetch("http://api.icndb.com/jokes/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.value.joke);
      api_response.innerHTML = response.value.joke;
      
  });
}

let promise = new Promise(function(resolve, reject){

});