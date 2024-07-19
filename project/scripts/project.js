const currentYear = document.querySelector(".currentyear");

const dateFunction = () => {
    const date = new Date();
    currentYear.innerHTML = date.getFullYear();
}

window.onload = dateFunction;



