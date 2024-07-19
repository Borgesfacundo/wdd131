const currentYear = document.querySelector(".currentyear");

const dateFunction = () => {
    const date = new Date();
    currentYear.innerHTML = date.getFullYear();
}

window.onload = dateFunction;

const visits = document.querySelector(".num-of-visits");

let countOfVisits = () => {
let visitCount = localStorage.getItem("visitsCount");

if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount, 10);
}

visitCount += 1;
localStorage.setItem("visitsCount", visitCount);

visits.innerHTML = `This is your visit number ${visitCount}!`;
}

countOfVisits();


