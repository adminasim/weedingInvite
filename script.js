let open = false;

function openCard() {
    const nameInput = document.getElementById("guestName");
    const name = nameInput.value.trim();

    if (!name) {
        alert("Please enter your name 💖");
        return;
    }

    // Set guest name in the card
    const guestElements = document.querySelectorAll(".guest");
    guestElements.forEach(el => el.innerText = " - " + name);

    // Transitions
    document.getElementById("nameBox").style.display = "none";
    document.getElementById("card").style.display = "block";

    // Play Music
    const bgm = document.getElementById("bgm");
    bgm.play().catch(() => console.log("Autoplay blocked. Tap anywhere to play."));

    // Burst Confetti
    createConfetti();
}

// Card Flip Logic
document.getElementById("card").addEventListener("click", () => {
    const cardElement = document.querySelector(".card");
    open = !open;
    cardElement.style.transform = open ? "rotateY(180deg)" : "rotateY(0deg)";
});

// Improved Confetti (Rose Petal Style)
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ffffff'];
    for (let i = 0; i < 70; i++) {
        const petal = document.createElement("div");
        petal.className = "confetti";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.width = Math.random() * 12 + 8 + "px";
        petal.style.height = petal.style.width;
        petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
        petal.style.opacity = Math.random();
        
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 5000);
    }
}

// Countdown Logic
const weddingDate = new Date("March 29, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const countdownEl = document.getElementById("countdown");
    if (diff <= 0) {
        countdownEl.innerHTML = "🎉 Today is the Wedding!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s left`;
}, 1000);