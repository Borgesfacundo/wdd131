const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ["A", "B", "A"];

function gpaResult(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(gpaResult);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const longerFruits = fruits.filter((fruit) => fruit.length > 6);



const arr1 = [12, 34, 21, 54];

const luckyNumber = 21;

const lucky = arr1.indexOf(luckyNumber);