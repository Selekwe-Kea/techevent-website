// ==============================
// MOBILE NAVIGATION MENU
// ==============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ==============================
// COUNTDOWN TIMER
// ==============================

// Set your event date here (Sandton City Event Example)
const eventDate = new Date("2025-12-15T09:00:00").getTime();

const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = "Event Started!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdownEl.innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


// ==============================
// FORM VALIDATION
// ==============================
const form = document.getElementById("registerForm");
const formMsg = document.getElementById("formMsg");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();

        if (name.length < 2) {
            formMsg.style.color = "red";
            formMsg.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMsg.style.color = "red";
            formMsg.textContent = "Enter a valid email address.";
            return;
        }

        formMsg.style.color = "green";
        formMsg.textContent = "Registration successful!";

        form.reset();
    });
}


// ==============================
// SCROLL FADE-IN ANIMATIONS
// ==============================
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(el => observer.observe(el));
