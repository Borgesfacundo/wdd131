currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;


// Adding last modification date
lastModifElement = document.lastModified;
const lastMod = document.querySelector("#lastmodified");

const text = `Last modified: ${lastModifElement}`;

lastMod.textContent += text;

//burger menu
const navUl = document.querySelector(".nav");
const hamburger = document.querySelector("#menuLink");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hamburger.classList.toggle("show");
});