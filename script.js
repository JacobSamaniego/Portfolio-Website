const messageGeneratorText = "This is a fake fun fact message generator i've created. I used only javascript to create this and its all console run. Its a simple program, but its good for a luagh";
const messageGenerator = document.getElementById("message-generator");
const paragraphLeft = document.getElementById("left-project");
const pacmanMultithreadText = "This was my final project for an introduction to operating systems class. It is a simple pac-man game that has multi-threading implemented. Its coded in python because it was the best language I knew at the time.";
const pacmanMultithread = document.getElementById("pacman-multithread");
const paragraphRight = document.getElementById("right-project");
const dominoesGameText = "This a group project I participated in. We created a dominoes game that is played in the console. Its completely randomized but still interesting."
const dominoesGame = document.getElementById("dominoes");

const rightArrow = document.getElementsByClassName("right-arrow");
const gridOne = document.querySelectorAll(".grid-1");
const gridTwo = document.querySelectorAll(".grid-2");
const leftArrow = document.getElementsByClassName("left-arrow");



messageGenerator.onmouseover = function () {
    paragraphLeft.textContent = messageGeneratorText;
}

messageGenerator.onmouseleave = function () {
    paragraphLeft.textContent = "";
}

pacmanMultithread.onmouseover = function () {
    paragraphRight.textContent = pacmanMultithreadText;
}

pacmanMultithread.onmouseleave = function () {
    paragraphRight.textContent = "";
}

dominoesGame.onmouseover = function () {
    paragraphLeft.textContent = dominoesGameText;
    
}

dominoesGame.onmouseleave = function () {
    paragraphLeft.textContent = "";
}

const hideLeftArrow = () => {
    if (gridOne[0] && gridOne[0].hidden === false) {
        if (leftArrow[0]) {
            leftArrow[0].style.visibility = "hidden";
        }
    }
};
hideLeftArrow();




let currentSlide = 1;

rightArrow[0].onclick = function () {
    if (currentSlide === 1) {
        gridOne[0].style.transform = "translateX(-100%)";
        gridOne[0].style.visibility = "hidden";
        gridTwo[0].style.transform = "translateX(0)"; 
        gridTwo[0].style.visibility = "visible";
        leftArrow[0].style.visibility = "visible";
        rightArrow[0].style.visibility = "hidden";
        currentSlide = 2;
    }
}

leftArrow[0].onclick = function () {
    if (currentSlide === 2) {
        gridOne[0].style.transform = "translateX(0)"; 
        gridOne[0].style.visibility = "visible";    
        gridTwo[0].style.transform = "translateX(100%)"; 
        gridTwo[0].style.visibility = "hidden";
        leftArrow[0].style.visibility = "hidden";
        rightArrow[0].style.visibility = "visible";
        currentSlide = 1;
    }
}