currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;


// Adding last modification date
lastModifElement = document.lastModified;
const lastMod = document.querySelector("#lastmodified");

const text = `Last modified: ${lastModifElement}`;

lastMod.textContent += text;

// Array of products
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avg: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avg: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avg: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avg: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avg: 5.0
    }
];

const selectElement = document.querySelector("#product");

products.forEach((product) => {
    let option = document.createElement("option");
    option.setAttribute("value", product.value)
    option.textContent = product.id;
    selectElement.appendChild(option);
});

//LocalStorage

let numSubmissions = Number(window.localStorage.getItem("numSubmissions")) || 0;

numSubmissions++;

localStorage.setItem("numSubmissions", numSubmissions);