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
            // Trigger scroll animation for elements already in view after load
            handleScrollAnimation(); 
        }, 600); 
    }, 2500); 

    // --- 2. Scroll Animation (Intersection Observer) ---
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        })
    }
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // --- 3. Pixel Character Eye Tracking (Adjusted for larger size) ---
    const pupils = document.querySelectorAll(".pupil");
    const head = document.querySelector(".head");
    
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Animate pupils
        pupils.forEach((pupil) => {
            const rect = pupil.parentElement.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
            const distance = Math.min(8, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 12);

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        // Add subtle 3D tilt to the whole head based on mouse position
        if(head) {
            const windowCenterX = window.innerWidth / 2;
            const windowCenterY = window.innerHeight / 2;
            const tiltX = (mouseY - windowCenterY) * -0.015;
            const tiltY = (mouseX - windowCenterX) * 0.015;
            
            head.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    });

    // --- 4. Curved Carousel Logic ---
    const container = document.querySelector(".carousel-container");
    const cards = document.querySelectorAll(".project-card");

    function applyCurveEffect() {
        if (!container) return;
        const containerCenter = container.getBoundingClientRect().left + (container.clientWidth / 2);

        cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + (cardRect.width / 2);
            
            const distanceFromCenter = cardCenter - containerCenter;
            const curveAmount = Math.pow(distanceFromCenter * 0.0025, 2) * 12; 
            const rotation = distanceFromCenter * 0.008;

            card.style.transform = `translateY(${curveAmount}px) rotateZ(${rotation}deg)`;
        });
    }

    container.addEventListener("scroll", applyCurveEffect);
    window.addEventListener("resize", applyCurveEffect);
    
    setTimeout(applyCurveEffect, 2600); 
});
