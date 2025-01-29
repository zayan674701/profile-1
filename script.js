// Typing effect
const texts = ['Web Developer', 'Digital Marketer', 'UI/UX Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause at the end of word
    } else {
        setTimeout(type, 100); // Typing speed
    }
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    type();
    
    // Add scroll reveal animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to waves on scroll
window.addEventListener('scroll', () => {
    const waves = document.querySelectorAll('.wave');
    const scrolled = window.pageYOffset;
    
    waves.forEach((wave, index) => {
        wave.style.transform = `translateX(${-scrolled * (0.1 * (index + 1))}px)`;
    });
});