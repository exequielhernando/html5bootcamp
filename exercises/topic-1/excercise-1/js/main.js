"use strict";
// console.log("Paso 1");

let nodo_section = document.getElementById("hello-world");
let btn_get_response = document.querySelector("#greet");
let hidden = setTimeout('hidden_section()', 3000);
let api_response = document.getElementById("api-response");
let btn_get_data_with_params = document.querySelector(".search-repository");
const URL = "http://api.icndb.com/jokes/random";
const URL2 = "https://api.github.com/search/repositories";

// console.log("Paso 3");

btn_get_data_with_params.addEventListener("click", function(){
    get_data_with_params();
})

btn_get_response.addEventListener("click", function() {
    //greet();    
    get_response_api();
    //get_data();
    // get_data_arrow();
});

function hidden_section() {
    nodo_section.classList.add ("section-hidden")   ;
    console.log("Paso 2");
};   

function greet() {
    alert("Says: Hello World with alert")    
};
function get_response_api(){
    // Return a new promise.
    return new Promise(function(resolve, reject) {

        // Do the usual XHR stuff
        let xhttp = new XMLHttpRequest();
        //For get de document, selec url, and true for asynchronic method
        xhttp.open("GET", URL, true);
        xhttp.responseType = "json";
        xhttp.onload = function(){
            // This is called even on 404 etc
            // so check the status
            if((this.readyState === 4) && (this.status ===200)){
                resolve(xhttp.response);
                console.log(this.response.value.joke);
                api_response.innerHTML = this.response.value.joke;
                api_response.classList.remove("background-red");

            }
            else{
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                 reject(Error(xhttp.statusText));
                 api_response.innerHTML = "Network Error";
                 api_response.classList.add("background-red");
            }
        };
        // Handle network errors
        xhttp.onerror = function() {
        reject(Error("Network Error"));
        api_response.innerHTML = "Network Error";
        api_response.classList.add("background-red");
        };
        
        // Make the request
        xhttp.send();
    
    });
}
// function get_data_arrow(){
//     return new Promise( (resolve, reject) => {

//         fetch(URL)
//         .then(res => {
//             if(res.ok){
//                return res.json();
//             }
//             reject("Error! Page not found. Status: " + res.status);      
//         })
//         .then(data => {
//             resolve(data);
//             console.log(data.value.joke);
//             api_response.innerHTML = data.value.joke;
//             api_response.classList.remove("background-red");
//         }).catch(err => {
//             reject(Error("Network Error"));
//             console.error('fetch failed', err);
//             api_response.innerHTML = err;
//             api_response.classList.add("background-red");
//         });
//     });
// }

function get_data(){
    return new Promise( (resolve, reject) => {
        fetch(URL)
        .then(function(response) {
            if(response.ok){
                return response.json();
            }  
            reject("Error! Page not found. Status: " + response.status);      
        })
        .then(function(response) {
            resolve(response);
            console.log(response.value.joke);
            api_response.innerHTML = response.value.joke;
            api_response.classList.remove("background-red");
        }).catch(function(err){
            reject(Error("Network Error"));
            console.error('fetch failed', err);
            api_response.innerHTML = err;
            api_response.classList.add("background-red");
        });
    });
};

function get_data_with_params(){
    return new Promise( (resolve, reject) => {
        fetch(URL2 + "?q=JavaScript")
        .then(function(res) {
            if(res.ok){
                return res.json();
            }  
            reject("Error! Page not found. Status: " + response.status);      
        })
        .then(function(res) {
            resolve(res);
            let container_list = document.querySelector(".container-list ul");
            for (let index = 0; index < res.items.length; index++) {
                container_list.innerHTML += "<li> " + index + "- "+  res.items[index].full_name + "</li>"  ;
                console.log(res.items[index].full_name);
            }  
        }).catch(function(err){
            reject(Error("Network Error"));
            console.error('fetch failed', err);
        });
    });
};

// function get_data_with_params(){
//     let repo_searched = document.querySelector(".repository-name").value.toLowerCase();

//     console.log(repo_searched);
//     fetch(URL2 + "?q=JavaScript")
//     .then(function(res){
//       if(!res.ok){
//         console.log("error");
//       }
//       return res.json();
//     })
//     .then(function(res) {
       
      
//         let container_list = document.querySelector(".container-list");
//         container_list.innerHTML = "";
//         console.log(res.documentation_url);          
//         let repo_name = res;
//         if ( repo_searched === repo_name) {
//             container_list.innerHTML += "<li>" + data.resource + "</li>"  ;
//         }
//         else {
//             container_list.innerHTML += res.errors["0"].code;
//         }
            
//     })
    
//     .catch(function(e){
//       console.log(e);
//     });
//   }