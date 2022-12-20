const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let counter = document.querySelector("#counter");
let next = 0;
nextButton.addEventListener("click", function () {

    next++;
    document.getElementById("counter").textContent = next;
    changeColor();
})
prevButton.addEventListener("click", function () {

    next--;
    document.getElementById("counter").textContent = next;
    changeColor();
})

function changeColor() {
    if (next < 0) {
        counter.style.color = 'red';
    } else if (next > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = "black";
    }
}