const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navOverlay = document.getElementById('navOverlay');

// Open Menu
menuBtn.addEventListener('click', () => {
    navOverlay.style.width = "100%";
    
    // Animate menu items
    const menuItems = document.querySelectorAll('.menu-content a');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, 100 * index);
    });
});

// Close Menu
closeBtn.addEventListener('click', () => {
    navOverlay.style.width = "0%";
    
    // Reset menu items animation
    const menuItems = document.querySelectorAll('.menu-content a');
    menuItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(50px)";
    });
});

// Close Menu if link is clicked
document.querySelectorAll('.menu-content a').forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.style.width = "0%";
        
        // Reset menu items animation
        const menuItems = document.querySelectorAll('.menu-content a');
        menuItems.forEach((item) => {
            item.style.opacity = "0";
            item.style.transform = "translateX(50px)";
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const menuIcon = document.querySelector('.menu-icon');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        menuIcon.style.top = "15px";
        menuIcon.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        menuIcon.style.top = "25px";
        menuIcon.style.background = "rgba(0, 0, 0, 0.7)";
    }
});