const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");




button.addEventListener("click", () => {
    if (input.value != "") {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }

});

//week 05




function displayList(item) {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    li.textContent = item;

    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    li.append(deleteBtn);

    list.append(li);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

getChapterList();