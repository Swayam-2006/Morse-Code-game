// Updated script.js with increased Morse code size, skip button, and scoring system for three sets

let morseSets = {
    1: {
        moderate: [
            { text: "SECURE DATA", morse: "... . -.-. ..- .-. . / -.. .- - .-" },
            { text: "HIDE IP", morse: ".... .. -.. . / .. .--." },
            { text: "STRONG PASSWORD", morse: "... - .-. --- -. --. / .--. .- ... ... .-- --- .-. -.." }
        ],
        hard: [
            { text: "CYBER ATTACK", morse: "-.-. -.-- -... . .-. / .- - - .- -.-. -.-" },
            { text: "HACKERS STEAL", morse: ".... .- -.-. -.- . .-. ... / ... - . .- .-.." },
            { text: "TWO FACTOR", morse: "- .-- --- / ..-. .- -.-. - --- .- .-." }
        ]
    },
    2: {
        moderate: [
            { text: "STAY SAFE", morse: "... - .- -.-- / ... .- ..-. ." },
            { text: "PROTECT INFO", morse: ".--. .-. --- - . -.-. - / .. -. ..-. ---" },
            { text: "ENCRYPT FILES", morse: ". -. -.-. .-. -.-- .--. - / ..-. .. .-.. . ..." }
        ],
        hard: [
            { text: "PASSWORD LEAK", morse: ".--. .- ... ... .-- --- .-. -.. / .-.. . .- -.-" },
            { text: "SECURE LOGIN", morse: "... . -.-. ..- .-. . / .-.. --- --. .. -." },
            { text: "BLOCK ATTACKS", morse: "-... .-.. --- -.-. -.- / .- - - .- -.-. -.- ..." }
        ]
    },
    3: {
        moderate: [
            { text: "UPDATE SYSTEM", morse: "..- .--. -.. .- - . / ... -.-- ... - . --" },
            { text: "USE VPN", morse: "..- ... . / ...- .--. -." },
            { text: "BACKUP FILES", morse: "-... .- -.-. -.- ..- .--. / ..-. .. .-.. . ..." }
        ],
        hard: [
            { text: "HACK DETECTED", morse: ".... .- -.-. -.- / -.. . - . -.-. - . -.." },
            { text: "TWO STEP LOGIN", morse: "- .-- --- / ... - . .--. / .-.. --- --. .. -." },
            { text: "DATA ENCRYPTION", morse: "-.. .- - .- / . -. -.-. .-. -.-- .--. - .. --- -." }
        ]
    }
};

let selectedSet = 1;
let selectedLevel = "moderate";
let currentIndex = 0;
let score = 0;

const morseDisplay = document.getElementById("morseDisplay");
const inputField = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const skipButton = document.getElementById("skipButton");
const nextButton = document.getElementById("nextButton");

function selectSet(setNumber) {
    selectedSet = setNumber;
    document.getElementById("setSelection").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    displayMorse();
}

function selectLevel(level) {
    selectedLevel = level;
    document.getElementById("levelSelection").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    displayMorse();
}


document.getElementById("submitButton").addEventListener("click", checkAnswer);
skipButton.addEventListener("click", skipMorse);
nextButton.addEventListener("click", nextMorse);

displayMorse();

function displayMorse() {
    let morseData = morseSets[selectedSet][selectedLevel][currentIndex];
    morseDisplay.innerHTML = `<span style="font-size: 30px; letter-spacing: 8px;">${morseData.morse}</span>`;
    inputField.value = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer() {
    let morseData = morseSets[selectedSet][selectedLevel][currentIndex];
    if (inputField.value.toUpperCase().trim() === morseData.text) {
        feedback.textContent = "✅ Correct! +10 points";
        feedback.style.color = "#00FF00";
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        nextButton.style.display = "block";
    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
        feedback.style.color = "#FF0000";
    }
}

function skipMorse() {
    nextMorse();
}

function nextMorse() {
    if (currentIndex < morseSets[selectedSet][selectedLevel].length - 1) {
        currentIndex++;
        displayMorse();
    } else {
        feedback.textContent = `🎉 Game Over! Final Score: ${score} / ${morseSets[selectedSet][selectedLevel].length * 10}`;
        nextButton.style.display = "none";
    }
}
