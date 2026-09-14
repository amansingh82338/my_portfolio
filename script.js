// script.js
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loading Screen Logic ---
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }, 500); // Wait for fade out transition
    }, 2500); // 2.5 seconds loading time

    // --- 2. Pixel Character Eye Tracking ---
    const pupils = document.querySelectorAll(".pupil");
    
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        pupils.forEach((pupil) => {
            // Get center of the eye
            const rect = pupil.parentElement.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            // Calculate angle between eye center and mouse
            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
            
            // Limit the distance the pupil can move
            const distance = Math.min(6, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 10);

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // --- 3. Curved Carousel Logic ---
    const container = document.querySelector(".carousel-container");
    const cards = document.querySelectorAll(".project-card");

    function applyCurveEffect() {
        const containerCenter = container.getBoundingClientRect().left + (container.clientWidth / 2);

        cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + (cardRect.width / 2);
            
            // Calculate distance from center of screen
            const distanceFromCenter = cardCenter - containerCenter;
            
            // Create a parabola effect (y = ax^2). 
            // The further from center, the more it drops down.
            const curveAmount = Math.pow(distanceFromCenter * 0.003, 2) * 15; 
            
            // Add a slight rotation for dynamic flair
            const rotation = distanceFromCenter * 0.01;

            card.style.transform = `translateY(${curveAmount}px) rotateZ(${rotation}deg)`;
        });
    }

    // Run on scroll and on load
    container.addEventListener("scroll", applyCurveEffect);
    window.addEventListener("resize", applyCurveEffect);
    
    // Initial call to set positions once loader finishes
    setTimeout(applyCurveEffect, 2600); 
});
