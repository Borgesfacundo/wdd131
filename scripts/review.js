currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;


// Adding last modification date
lastModifElement = document.lastModified;
const lastMod = document.querySelector("#lastmodified");

const text = `Last modified: ${lastModifElement}`;

lastMod.textContent += text;

document.addEventListener("DOMContentLoaded", function() {
    let numSubmissions = Number(window.localStorage.getItem("numSubmissions")) || 0;

    numSubmissions++;

    localStorage.setItem("numSubmissions", numSubmissions);
    document.querySelector("#counter-display").textContent = numSubmissions;
    
})