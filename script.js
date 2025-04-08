document.addEventListener('DOMContentLoaded', () => {

    // --- Countdown Timer ---
    const countdownDate = new Date("June 7, 2025 17:30:00").getTime(); // !! SET YOUR WEDDING DATE AND TIME HERE !!

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown-timer").innerHTML = "<p style='font-size: 1.2em; color: var(--accent-color);'>The Big Day is Here!</p>";
            // Optionally hide the "Counting Down" heading or change it
             const countdownHeading = document.querySelector('.countdown h2');
             if (countdownHeading) countdownHeading.innerText = "It's Wedding Time!";
        }
    }, 1000); // Update every second

    // --- Simple Scroll Animation ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target);
            }
            // Optional: Add this else block if you want elements to fade out when scrolled out of view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});