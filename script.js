// Set the opening match date and time (June 11, 2026, 18:00 Central Time UTC-6)
const worldCupDate = new Date(Date.UTC(2026, 5, 11, 18 + 6, 0, 0)).getTime(); 
// monthIndex is 0-based (June = 5), adding 6 hours to convert UTC-6 to UTC

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
