currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;