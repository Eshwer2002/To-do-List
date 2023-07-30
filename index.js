let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");
let addBtn = document.querySelector(".add");

inputBox.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value);
        this.value = "";
    } 
});

addBtn.addEventListener("click", function() {
    addItem(inputBox.value);
    inputBox.value = "";
});

let addItem = (inputBox) =>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `<i class="fa-solid fa-check"></i>${inputBox}<i class="fa-solid fa-trash-can"></i>`;

    listItem.querySelector(".fa-check").addEventListener("click", function(){
        listItem.classList.toggle('done');
    })

    listItem.querySelector(".fa-trash-can").addEventListener("click", function(){
        listItem.remove();
    })
    list.appendChild(listItem);
}

const today = new Date();
const options = {
    weekday : "long",
    day : "numeric",
    month: "long"
};
const day = today.toLocaleDateString("en-US", options);
document.querySelector(".date").innerHTML = day;