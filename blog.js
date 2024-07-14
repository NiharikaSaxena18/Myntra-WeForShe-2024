function updateCountdown() {
    const countdownElement = document.getElementById('countdown-learning');
    const targetDate = new Date(countdownElement.getAttribute('data-date')).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "The leaderboard is live!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const completeBlog = this.nextElementSibling;
            if (completeBlog.style.display === "block") {
                completeBlog.style.display = "none";
                this.textContent = "Read More";
            } else {
                completeBlog.style.display = "block";
                this.textContent = "Read Less";
            }
        });
    });
});


