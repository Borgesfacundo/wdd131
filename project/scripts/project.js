const bmiElement = document.querySelector(".bmi-result");
const button = document.querySelector(".bmi-button");


document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let height = parseFloat(document.querySelector("#height").value);
    let weigth = parseFloat(document.querySelector("#weight").value);
    bmiCalculator(weigth, height)

});

function bmiCalculator(weight, height) {
    let bmiResult = weight / (Math.sqrt(height))
    bmiElement.innerHTML = `Your BMI is ${bmiResult.toFixed(2)}`;
}


