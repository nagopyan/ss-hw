
var type = "dog_";
var fur = "brown";
var petSelect = "dog_brown";
var petType = localStorage.getItem("petType");
var petColor = localStorage.getItem("petColor");


function definePet() {
    if(petType == "dog") {
        type = "dog_";
    } else {
        type = "cat_";
    }

    if(petColor == "white") {
        fur = "gray";
    } else {
        fur = "brown";
    }
    
    petSelect = "../IMG/" + type + fur + ".png";
}

function createPet() {
    var x = document.createElement("IMG");
    x.setAttribute("src", petSelect);
    x.setAttribute("id", "pet");
    x.setAttribute("alt", "cat_brown");
    document.body.appendChild(x);
}

window.addEventListener('load', (event) => {
    definePet();
    createPet();
});