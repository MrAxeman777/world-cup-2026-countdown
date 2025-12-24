// FIFA World Cup 2026 Opening Match
// June 11, 2026

const worldCupDate = new Date("June 11, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = worldCupDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "🏟️ IT'S KICKOFF TIME!";
  }
}, 1000);
