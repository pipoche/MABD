// 🔐 CHANGE PASSWORD HERE
const CORRECT_PASSWORD = "Malaka";

// Password check
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === CORRECT_PASSWORD) {
        window.location.href = "HappyBirthday.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'Password incorrect. You do not have access 🎁',
            confirmButtonColor: '#ff4d6d'
        });
    }
}

// ⏳ Countdown to March 18
function updateCountdown() {
    const now = new Date();
    let target = new Date(now.getFullYear(), 2, 18); // March = 2

    if (now > target) {
        target = new Date(now.getFullYear() + 1, 2, 18);
    }

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until 18 March 🎉`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🎆 Simple Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function firework() {
    const x = random(0, canvas.width);
    const y = random(0, canvas.height / 2);

    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.arc(x + random(-60, 60), y + random(-60, 60), 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${random(0,360)},100%,60%)`;
        ctx.fill();
    }
}

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    firework();
}, 900);

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
