myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

/*function createandAppendFoodItem(food) {
    let favFood = document.createElement("li");
    favFood.textContent = food;
    favFoodElement.appendChild(favFood);
}

myInfo.favoriteFoods.forEach(createandAppendFoodItem);*/

//map

/*const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food} </li>`);
foodsElement.innerHTML = foodListElements.join("");*/

//1)

function foodName(food) {
    return `<li>${food}</li>`;
}

//2)

function takePlace(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function generateList(list, functCallBack) {
    const htmlList = list.map(functCallBack);
    return htmlList.join("");
}

foodsElement.innerHTML = generateList(
    myInfo.favoriteFoods,
    foodName
);
placesElement.innerHTML = generateList(
    myInfo.placesLived,
    takePlace
);
//Activity check your understanding
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i])
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i])
    }
    i++;
}

value = 0;
studentReport.forEach(function (item) {
    if (value < 30) {
        console.log(studentReport[i])
    }
});


for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}