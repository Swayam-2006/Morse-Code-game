// Updated script.js with increased Morse code size, skip button, and scoring system for three sets

let morseSets = {
    1: [
        { text: "SECURE YOUR DATA", morse: "... . -.-. ..- .-. . / -.-- --- ..- .-. / -.. .- - .-" },
        { text: "HIDE YOUR IP", morse: ".... .. -.. . / -.-- --- ..- .-. / .. .--." },
        { text: "STRONG PASSWORDS WIN", morse: "... - .-. --- -. --. / .--. .- ... ... .-- --- .-. -.. ... / .-- .. -." },
        { text: "CYBER ATTACK RISK", morse: "-.-. -.-- -... . .-. / .- - - .- -.-. -.- / .-. .. ... -.-" },
        { text: "HACKERS STEAL DATA", morse: ".... .- -.-. -.- . .-. ... / ... - . .- .-.. / -.. .- - .-" },
        { text: "TWO FACTOR SECURITY", morse: "- .-- --- / ..-. .- -.-. - --- .-. / ... . -.-. ..- .-. .. - -.--" }
    ],
    2: [
        { text: "STAY SAFE ONLINE", morse: "... - .- -.-- / ... .- ..-. . / --- -. .-.. .. -. ." },
        { text: "PROTECT YOUR INFO", morse: ".--. .-. --- - . -.-. - / -.-- --- ..- .-. / .. -. ..-. ---" },
        { text: "ENCRYPT ALL FILES", morse: ". -. -.-. .-. -.-- .--. - / .- .-.. .-.. / ..-. .. .-.. . ..." },
        { text: "PASSWORD LEAK ALERT", morse: ".--. .- ... ... .-- --- .-. -.. / .-.. . .- -.- / .- .-.. . .-. -" },
        { text: "SECURE LOGIN FAST", morse: "... . -.-. ..- .-. . / .-.. --- --. .. -. / ..-. .- ... -" },
        { text: "BLOCK MALWARE THREATS", morse: "-... .-.. --- -.-. -.- / -- .- .-.. .-- .- .-. . / - .... .-. . .- - ..." }
    ],
    3: [
        { text: "UPDATE YOUR SYSTEM", morse: "..- .--. -.. .- - . / -.-- --- ..- .-. / ... -.-- ... - . --" },
        { text: "USE A VPN", morse: "..- ... . / .- / ...- .--. -." },
        { text: "BACKUP IMPORTANT FILES", morse: "-... .- -.-. -.- ..- .--. / .. -- .--. --- .-. - .- -. - / ..-. .. .-.. . ..." },
        { text: "HACK DETECTED ALERT", morse: ".... .- -.-. -.- / -.. . - . -.-. - . -.. / .- .-.. . .-. -" },
        { text: "TWO STEP VERIFICATION", morse: "- .-- --- / ... - . .--. / ...- . .-. .. ..-. .. -.-. .- - .. --- -." },
        { text: "DATA PRIVACY FIRST", morse: "-.. .- - .- / .--. .-. .. ...- .- -.-. -.-- / ..-. .. .-. ... -" }
    ]
};

let selectedSet = 1;
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

document.getElementById("submitButton").addEventListener("click", checkAnswer);
skipButton.addEventListener("click", skipMorse);
nextButton.addEventListener("click", nextMorse);

displayMorse();

function displayMorse() {
    let morseData = morseSets[selectedSet][currentIndex];
    morseDisplay.innerHTML = `<span style="font-size: 30px; letter-spacing: 8px;">${morseData.morse}</span>`;
    inputField.value = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer() {
    let morseData = morseSets[selectedSet][currentIndex];
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
    if (currentIndex < morseSets[selectedSet].length - 1) {
        currentIndex++;
        displayMorse();
    } else {
        feedback.textContent = `🎉 Game Over! Final Score: ${score} / ${morseSets[selectedSet].length * 10}`;
        nextButton.style.display = "none";
    }
}
