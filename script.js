const messageGeneratorText = "This is a fake fun fact message generator i've created. I used only javascript to create this and its all console run. Its a simple program, but its good for a luagh";


const messageGenerator = document.getElementById("message-generator");
const paragraph = document.getElementById("left-project");

messageGenerator.onmouseover = function () {
    paragraph.textContent = messageGeneratorText;
}

messageGenerator.onmouseleave = function () {
    paragraph.textContent = "";
}