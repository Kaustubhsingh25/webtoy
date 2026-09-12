let score = 0;

const redBtn = document.getElementById("redBtn");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const darkBtn = document.getElementById("darkBtn");
const soundBtn = document.getElementById("soundBtn");

let soundOn = true;

const messages = [
    "WHY ARE YOU STILL CLICKING?",
    "I TOLD YOU NOT TO PRESS IT!",
    "STOP! 😂",
    "You can't stop, can you?",
    "ONE MORE CLICK...",
    "This is getting addictive!",
    "You want to keep going on?",
    "Trust me you cant catch me"
];

redBtn.addEventListener("click", function() {
if (soundOn) {
    let audio = new AudioContext();
    let oscillator = audio.createOscillator();

    oscillator.connect(audio.destination);
    oscillator.frequency.value = 400;
    oscillator.start();

    setTimeout(function() {
        oscillator.stop();
    }, 500);
}
    score++;
    scoreText.textContent = score;

    let random = Math.floor(Math.random() * messages.length);
    message.textContent = messages[random];

    redBtn.classList.add("shake");

    setTimeout(function() {
        redBtn.classList.remove("shake");
    }, 200);

    if (score >= 5) {
        redBtn.textContent = "CATCH ME 😈";

        redBtn.style.position = "absolute";
        redBtn.style.left = Math.random() * 80 + "%";
        redBtn.style.top = Math.random() * 80 + "%";
    }

    if (score >= 9) {
        redBtn.textContent = "RUN BEHIND ME🏃";

        redBtn.style.position = "absolute";
        redBtn.style.left = Math.random() * 80 + "%";
        redBtn.style.top = Math.random() * 80 + "%";
    }

    if (score >= 15) {
        redBtn.textContent = "RUN FASTER"

        redBtn.style.position = "absolute";
        redBtn.style.left = Math.random() * 80 + "%";
        redBtn.style.top = Math.random() * 80 + "%";
    }

    if (score >= 5){
        message.textContent = "TRY TO CATCH ME IF YOU CAN!"
    }

    if (score >= 10) {
        message.textContent = "YOU REALLY CAN'T STOP! 😂";
    }

    if (score >= 13) {
        message.textContent = "YOU THINK YOU CAN CATCH ME";
    }

    if (score >= 20) {
        message.textContent = "NOW THAT'S ENOUGH!!";
    }
});

darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
soundBtn.addEventListener("click", function() {
    soundOn = !soundOn;

    if (soundOn) {
        soundBtn.textContent = "🔊 Sound ON";
    } else {
        soundBtn.textContent = "🔇 Sound OFF";
    }
});