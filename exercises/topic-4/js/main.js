"use strict";
document.addEventListener("DOMContentLoaded", function(){
    //Check browser support
    let nodo_text_saved = document.getElementById("saved_text");
    let btn_text_save = document.getElementById("btn_save_text");
    let btn_delete_text = document.getElementById("btn_detele_text");
    let btn_show_information = document.getElementById("btn_show_information");
    let information = " ";
    btn_text_save.addEventListener("click", function(){
        save_text();  
        save_information_indexedDB();

    });

    btn_delete_text.addEventListener("click", function(){
        delete_text();
        alert("The information was deleted");
    });
    btn_show_information.addEventListener("click", function(){
        show_information();
    })
    function save_text() {
        if (typeof(Storage)) {
            //Store
            let text_saved = nodo_text_saved.value;
            localStorage.setItem(`information_saved`, text_saved);            
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
    }
    function delete_text() {
        localStorage.clear();
        delete_information_indexedDB();
    }
    function show_information() {
        information = localStorage.getItem(`information_saved`);
        console.log(information);
    }

    //IndexedDB 

    //prefixes of implementation that we want to test
    const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    let dataBase;
    let request = indexedDB.open("newDatabase", 3);
    

    if (!indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
     }
    function startDBIndexed() {
    
        request.onsuccess = function(event) {
            dataBase = event.target.result;
            console.log("success: " + dataBase);
        };
         request.onerror = function(event) {
            alert("Database error: " + event.target.errorCode);
        };  
        request.onupgradeneeded = function(event){
            dataBase = event.target.result;
            dataBase.createObjectStore("text",{autoIncrement : true });
            alert("Holaa")            
        }
    }   
    function save_information_indexedDB(){
        let text_saved = nodo_text_saved.value;        
        let transaction = dataBase.transaction(["text"],"readwrite");
        let data = transaction.objectStore("text");
        let add = data.add({text : text_saved});  
        data.oncomplete = function() {
            alert('Objet correctly add');
         };
         data.onerror = function(){
             alert('Objet failed when try to add');
         }

        add.addEventListener("success", show_information_indexedDB);
        
    }
    function show_information_indexedDB() {
        let transaction = dataBase.transaction(["text"], "readonly");
        let data = transaction.objectStore("text");
        let cursor = data.openCursor();
        cursor.addEventListener("success", function(event){
            let cursor = event.target.result;
            if(cursor){
                console.log(cursor.value.text);
                cursor.continue();
            };
        });   
    }
    function delete_information_indexedDB(){
        
        let transaction = dataBase.transaction(["text"],"readwrite");
        let data = transaction.objectStore("text");
        let request = data.clear();

        request.onsuccess = function(event) {
           alert("Data base was delete correctly")
        };
        request.onerror = function (event) {
            console.error("clearObjectStore:", event.target.errorCode);
            alert(this.error);
        };
    }
    startDBIndexed();
});
