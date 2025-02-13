function launchConfetti() {
    var duration = 5 * 1000; // Confetti lasts for 5 seconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7, 
            startVelocity: 30,
            spread: 90, 
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ["#ffe5ec", "#c77dff", "#ff99c8", "#fc03a1", "#ff007f", "#ffffff"], // Romantic colors (pink, red, white)
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

window.onload = launchConfetti;


