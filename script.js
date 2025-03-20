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
let correctAnswers = 0;

const morseDisplay = document.getElementById("morseDisplay");
const inputField = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const passMessage = document.getElementById("passMessage");

function selectSet(setNumber) {
    selectedSet = setNumber;
    document.getElementById("setSelection").style.display = "none";
    document.getElementById("levelMessage").style.display = "block";
}

function startGame() {
    document.getElementById("levelMessage").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    currentIndex = 0;
    score = 0;
    correctAnswers = 0;
    displayMorse();
}

function displayMorse() {
    if (currentIndex >= morseSets[selectedSet].length) {
        endGame();
        return;
    }
    let morseData = morseSets[selectedSet][currentIndex];
    morseDisplay.innerHTML = `<span style="font-size: 30px; letter-spacing: 8px;">${morseData.morse}</span>`;
    inputField.value = "";
    feedback.textContent = "";
}

document.getElementById("submitButton").addEventListener("click", checkAnswer);
document.getElementById("skipButton").addEventListener("click", skipQuestion);

function checkAnswer() {
    let morseData = morseSets[selectedSet][currentIndex];
    if (inputField.value.toUpperCase().trim() === morseData.text) {
        feedback.textContent = "✅ Correct! +10 points";
        score += 10;
        correctAnswers++;
    } else {
        feedback.textContent = "❌ Incorrect. Try again!";
        return;
    }
    
    scoreDisplay.textContent = `Score: ${score}`;
    currentIndex++;
    displayMorse();
}

function skipQuestion() {
    feedback.textContent = "⏭️ Question Skipped!";
    currentIndex++;
    displayMorse();
}

function endGame() {
    document.getElementById("gameArea").style.display = "none";
    if (correctAnswers >= 4) {
        passMessage.textContent = "🎉 You passed this level!";
    } else {
        passMessage.textContent = "❌ You failed this level. Try again!";
    }
    passMessage.style.display = "block";
}
