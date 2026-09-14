/* style.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');

:root {
    --bg-dark: #050505;
    --text-light: #f4f4f5;
    --text-muted: #a1a1aa;
    --accent: #3b82f6;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* Loader Styles - Thinner, smaller text */
#loader {
    position: fixed;
    inset: 0;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.6s cubic-bezier(0.87, 0, 0.13, 1);
}

.glossy-text {
    font-size: 2.5rem; /* Smaller */
    font-weight: 300;  /* Thinner */
    letter-spacing: 2px;
    color: #444; 
    background: linear-gradient(120deg, #333 30%, #fff 50%, #333 70%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gloss 2s linear infinite;
    text-align: center;
    padding: 0 20px;
}

@keyframes gloss {
    to { background-position: 200% center; }
}

.hidden {
    opacity: 0;
    pointer-events: none;
    display: none !important;
}

/* Scroll Animation Classes */
.scroll-animate {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Layout & Hero */
#main-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#hero {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 90vh;
    padding: 4rem 5%;
    flex-wrap: wrap;
    gap: 40px;
}

.hero-content {
    max-width: 650px;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #ffffff, #a1a1aa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-weight: 400;
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.hero-content p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}

/* Glassmorphism Buttons */
.glass-btn {
    display: inline-block;
    padding: 12px 28px;
    margin-right: 15px;
    background: var(--glass-bg);
    color: var(--text-light);
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    font-weight: 500;
}

.glass-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
}

.small-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
    margin-right: 10px;
}

/* Scaled-Up Pixel Character */
.pixel-character {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.head {
    width: 160px;
    height: 160px;
    background: #2a2a2a;
    position: relative;
    box-shadow: 
        inset -12px -12px 0px rgba(0,0,0,0.4),
        inset 12px 12px 0px rgba(255,255,255,0.05),
        0 20px 40px rgba(0,0,0,0.5);
    border-radius: 12px; 
    transition: transform 0.1s;
}

.eye {
    width: 40px;
    height: 40px;
    background: #e4e4e7;
    position: absolute;
    top: 35px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.3);
}

.eye:nth-child(1) { left: 25px; }
.eye:nth-child(2) { right: 25px; }

.pupil {
    width: 16px;
    height: 16px;
    background: #09090b;
    border-radius: 50%;
    position: relative;
    transition: transform 0.05s linear;
}

.mouth {
    width: 60px;
    height: 12px;
    background: #111;
    position: absolute;
    bottom: 30px;
    left: 50px;
    border-radius: 2px;
}

/* Glass Panels */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(12px);
    border-radius: 16px;
}

/* Experience Section */
#experience {
    padding: 6rem 5%;
}

#experience h2, #projects h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 600;
}

.exp-card {
    padding: 3rem;
    max-width: 800px;
    margin: 0 auto;
    border-left: 4px solid var(--accent);
}

.exp-card h4 {
    color: var(--text-muted);
    margin: 1rem 0 1.5rem 0;
    font-weight: 400;
}

.exp-card ul {
    list-style-position: outside;
    margin-left: 20px;
    color: #d4d4d8;
    line-height: 1.8;
}
.exp-card ul li { margin-bottom: 0.8rem; }

/* Curved Carousel */
#projects {
    padding: 4rem 0 8rem 0;
    overflow: hidden;
}

.carousel-container {
    width: 100%;
    overflow-x: auto;
    padding: 50px 5%;
    scrollbar-width: none; 
}

.carousel-container::-webkit-scrollbar {
    display: none; 
}

.carousel-track {
    display: flex;
    gap: 40px;
    padding: 50px 0;
    width: max-content;
}

.project-card {
    width: 380px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    transition: transform 0.1s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-card h3 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

.project-card p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
}

.tech-stack {
    font-size: 0.85rem !important;
    color: var(--accent) !important;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.links {
    margin-top: auto;
    display: flex;
    gap: 10px;
}
