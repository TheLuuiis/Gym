window.addEventListener('DOMContentLoaded', () => {

/* Header  */
ScrollReveal({
    reset: true,
    duration: 2000,
    distance: '150px',
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' 
});

ScrollReveal().reveal('nav span img', {
    origin: 'left',
    delay: 300,
    scale: 1.2,
    rotate: { x: 0, y: 180, z: 0 }
});

ScrollReveal().reveal('.ul .li', {
    origin: 'top',
    delay: 500,
    interval: 200, 
    scale: 0.8,
    rotate: { x: 20, y: 0, z: 0 }
});

ScrollReveal().reveal('nav button', {
    origin: 'right',
    delay: 800,
    scale: 1.1,
    rotate: { x: 0, y: 0, z: 360 }
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const nav = document.querySelector('nav');

    if (nav) {
        nav.style.transform = `translateY(${scrolled * 0.1}px) scale(1.02) rotateX(${scrolled * 0.02}deg)`;
    }
});

/* 1 Sección */
const sr = ScrollReveal({
    duration: 1200,
    distance: '80px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)', 
    reset: true 
});

sr.reveal('.description-gym sub', { 
    origin: 'bottom', 
    delay: 200, 
    scale: 1.1
});

sr.reveal('.description-gym h1', { 
    origin: 'left', 
    delay: 400, 
    rotate: { x: 0, y: 10, z: 0 },
    scale: 1.2 
});

sr.reveal('.description-gym p', { 
    origin: 'right', 
    delay: 600, 
    rotate: { x: 0, y: -10, z: 0 }, 
    scale: 1.05 
});

sr.reveal('.description-gym a', { 
    origin: 'bottom', 
    delay: 800, 
    distance: '100px', 
    scale: 1.15 
});

sr.reveal('.image-gym', { 
    origin: 'right', 
    delay: 1000, 
    distance: '150px', 
    rotate: { x: 10, y: 0, z: 0 }, 
    scale: 1.2 
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const imageGym = document.querySelector('.image-gym img');
    if (imageGym) {
        imageGym.style.transform = `translateY(${scrolled * 0.2}px) scale(1.05) rotateX(${scrolled * 0.05}deg)`;
    }
});

/* 2 ----------  sección   ---------- */
const scrollRevealInstance = ScrollReveal({
    duration: 1500,
    distance: '100px',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
    reset: false 
});

scrollRevealInstance.reveal('.description-explore h1', {
    origin: 'top',
    delay: 200,
    distance: '150px',
    rotate: { x: 20, y: 0, z: 0 },
    scale: 1.2
});

scrollRevealInstance.reveal('.botones span', {
    origin: 'bottom',
    delay: 300,
    distance: '100px',
    scale: 0.9,
    interval: 200
});

scrollRevealInstance.reveal('.card', {
    origin: 'bottom',
    delay: 400,
    distance: '200px',
    rotate: { x: 10, y: 10, z: 0 },
    scale: 0.8,
    interval: 300
});

scrollRevealInstance.reveal('.card span box-icon', {
    origin: 'left',
    delay: 500,
    distance: '50px',
    rotate: { x: 0, y: 360, z: 0 },
    scale: 1.5,
    interval: 200
});

scrollRevealInstance.reveal('.card h1, .card p, .join', {
    origin: 'right',
    delay: 600,
    distance: '100px',
    scale: 1.1,
    interval: 200
});


























































});