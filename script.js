window.onload = function() {
    const heading = document.getElementById('main-heading');
    const colors = ['#e91e63', '#4CAF50', '#2196F3', '#ff9800', '#9c27b0'];
    let index = 0;

    setInterval(() => {
        heading.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    
    function updateClock() {
        const clock = document.getElementById("clock");
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
};
