const bmiElement = document.querySelector(".bmi-result");
const button = document.querySelector(".bmi-button");


document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let height = parseFloat(document.querySelector("#height").value);
    let weigth = parseFloat(document.querySelector("#weight").value);
    bmiCalculator(weigth, height)

});

function bmiCalculator(weight, height) {
    height = height / 100
    let bmiResult = weight / (height * height)
    bmiElement.innerHTML = `<b>Your BMI is ${bmiResult.toFixed(2)}</b>`;
}