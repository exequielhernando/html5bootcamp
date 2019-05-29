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
            localStorage.setItem(`information_saved`, nodo_text_saved.value);

        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
    }
    function delete_text() {
        localStorage.clear();
    }
    function show_information() {
        information = localStorage.getItem(`information_saved`);
        console.log(information);
    }



});