"use strict";
let btn_submit_info = document.querySelector("#btn_submit");
let table_info = document.querySelector(".table-info tbody");

btn_submit_info.addEventListener("click", function(){
  let name = document.querySelector(".name").value;
  let surname = document.querySelector("#surname").value;
  let age = document.querySelector("#age").value;
  let nacionality = document.querySelector("#nacionality").value;
    generate_table(name, surname, age, nacionality);
});
function generate_table(name, surname, age, nacionality) {
    
    let body = table_info;
  
    for (let i = 0; i < 1; i++) {
      let row = document.createElement("tr");
      console.log(name);
      
      for (let j = 0; j < 4; j++) {
        let cellText_name = document.createTextNode(name);
        let cellText_surname = document.createTextNode(surname);
        let cellText_age = document.createTextNode(age);
        let cellText_nacionality = document.createTextNode(nacionality);

    
        let cell = document.createElement("td");
        if(j === 0){
          cell.appendChild(cellText_name);
        }
        else if (j===1) {
          cell.appendChild(cellText_surname);
        }
        else if (j===2) {
          cell.appendChild(cellText_age);
        }
        else if (j===3) {
          cell.appendChild(cellText_nacionality);
        }

        row.appendChild(cell);
        body.appendChild(row);
      };
    }
  
}

