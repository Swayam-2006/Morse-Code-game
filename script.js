const morsePhrases = {
    1: { // Set 1
        moderate: [
            { morse: "... . -.-. ..- .-. . / -.-- --- ..- .-. / -.. .- - .-", answer: "SECURE YOUR DATA" },
            { morse: "-.- . . .--. / .--. . .- ...- . / ... . -.-. .-. . -", answer: "KEEP PEAVE SECRET" },
            { morse: ". -. -.-. .-. -.-- .--. - / -.-- --- ..- .-. / .. -. ..-. ---", answer: "ENCRYPT YOUR INFO" }
        ],
        hard: [
            { morse: "-.-. -.-- -... . .-. / .- - - .- -.-. -.- / .-. .. ... -.-", answer: "CYBER ATTACK RISK" },
            { morse: ".... .- -.-. -.- . .-. ... / ... - . .- .- .-.. / -.. .- - .-", answer: "HACKERS STEAL DATA" },
            { morse: "- .-- --- / ..-. .- -.-. - --- .-. / ... . -.-. ..- .-. .. - -.--", answer: "TWO FACTOR SECURITY" }
        ]
    },
    2: { // Set 2
        moderate: [
            { morse: ".... .. -.. . / -.-- --- ..- .-. / .. .--.", answer: "HIDE YOUR IP" },
            { morse: "... .- ...- . / .--. . .-. ... --- -. .- .-.. / .. -. ..-. ---", answer: "SAVE PERSONAL INFO" },
            { morse: ".- ...- --- .. -.. / ... .-.. --- .-- / -. . - .-- --- .-. -.- ...", answer: "AVOID SLOW NETWORKS" }
        ],
        hard: [
            { morse: "... - .- -.-- / .- .-- .- -.-- / .... .- -.-. -.- . . .-. ...", answer: "STAY AWAY HACKERS" },
            { morse: "-.. --- -. .----. - / - .-. ..- ... - / ..-. .-. . . / .-- .. ..-. ..", answer: "DON'T TRUST FREE WIFI" },
            { morse: ".... .- -.-. -.- . .-. ... / ..- ... . / ... --- -.-. .. .- .-.. / . -. --. .. -. . . . .-. .. -. --.", answer: "HACKERS USE SOCIAL ENGINEERING" }
        ]
    },
    3: { // Set 3
        moderate: [
            { morse: "... - .- -.-- / ... .- ..-. . / --- -. .-.. .. -. .", answer: "STAY SAFE ONLINE" },
            { morse: "... . - / ... - .-. --- -. --. / .--. .- ... ... .-- --- .-. -..", answer: "SET STRONG PASSWORD" },
            { morse: "... - --- .--. / -.. --- .-- -. .-.. --- .- -.. / ... ..- ... .--. .. -.-. .. --- ..- ... / .- .--. .--.", answer: "STOP DOWNLOAD SUSPICIOUS APP" }
        ],
        hard: [
            { morse: ".- .-.. .-- .- -.-- ... / ... . -.-. ..- .-. . / . -..- .--. . .-. .. -- . -. -", answer: "ALWAYS SECURE EXPERIMENT" },
            { morse: ".... .- -.-. -.- . . .-. ... / - .- .-. --. . - / -... . ..-. --- .-. . / - .-- .--. .. -. --.", answer: "HACKERS TARGET TYPING" },
            { morse: "-.. --- -. .----. - / --- .--. . -. / .- - - .- - -.-. .... -- . -. - ...", answer: "DON'T OPEN ATTACHMENTS" }
        ]
    }
};

let selectedSet;
let currentChallenge = {};

function selectSet(setNumber) {
    selectedSet = setNumber;
    document.getElementById("level-selection").style.display = "block";
}

function startGame(level) {
    let challengeSet = morsePhrases[selectedSet][level];
    currentChallenge = challengeSet[Math.floor(Math.random() * challengeSet.length)];
    
    document.getElementById("morse-question").innerText = `Decode this: ${currentChallenge.morse}`;
    document.getElementById("game-area").style.display = "block";
}

function checkAnswer() {
    let userAnswer = document.getElementById("morse-answer").value.toUpperCase().trim();
    let feedback = document.getElementById("feedback");

    if (userAnswer === currentChallenge.answer) {
        feedback.innerText = "✅ Correct! Here’s your hint: Stay Cyber Safe!";
    } else {
        feedback.innerText = "❌ Incorrect! Try again.";
    }
}
