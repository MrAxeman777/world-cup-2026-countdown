// Set the date of the opening match
const worldCupDate = new Date("June 11, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = worldCupDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "The World Cup has started!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
