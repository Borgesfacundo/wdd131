currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

lastMod = document.querySelector("#lastmodified");

let oLastModif = new Date(document.lastModified);

lastMod.innerHTML = `Last Modification: ${oLastModif}`;