currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;


// Adding last modification date
lastModifElement = document.lastModified;
const lastMod = document.querySelector("#lastmodified");

const text = `Last modified: ${lastModifElement}`;

lastMod.textContent += text;