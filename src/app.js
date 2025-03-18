import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

window.onload = function () {
    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#card").innerHTML = generateCard();
    });
};

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["♥", "♦", "♣", "♠"];

function generateCard() {
    let card = document.getElementById("card");
    let randomValue = values[Math.floor(Math.random() * values.length)];
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];

    let valueElements = card.querySelectorAll(".value");
    let suitElements = card.querySelectorAll(".suit");

    valueElements.forEach(elementValue => elementValue.textContent = randomValue);
    suitElements.forEach(elementSuit => elementSuit.textContent = randomSuit);


    if (randomSuit === "♥" || randomSuit === "♦") {
        centerValue.className = 'value red'
        suitElements.forEach(el => el.style.color = "red");
        card.querySelector(".center .suit").style.color = "red";
    } else {
        centerValue.className = 'value black'
        suitElements.forEach(el => el.style.color = "black");
        card.querySelector(".center .suit").style.color = "black";
        suitElements.forEach(el => el.style.shadow = "black");
        card.querySelector(".card").style.shadow = "black";
    }
}

generateCard();