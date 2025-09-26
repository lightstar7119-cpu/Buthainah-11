
document.getElementById('themeToggle')?.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3);
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownEl.innerHTML = `ينتهي العرض خلال: ${days} أيام و `;
    }
    
    if (distance < 0) {
        clearInterval(timer);
        if (countdownEl) countdownEl.innerHTML = "انتهى العرض";
    }
}, 1000);
