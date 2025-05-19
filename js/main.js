// Load sections
function loadSections() {
    const sections = [
        'header', 'hero', 'brands', 'products', 
        'features', 'tech-showcase', 'testimonials', 
        'newsletter', 'footer'
    ];
    
    sections.forEach(section => {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById(section).innerHTML = html;
            });
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    loadSections();
    
    // Event delegation for mobile menu
    document.addEventListener('click', function(e) {
        if (e.target.id === 'mobile-menu-button' || 
            e.target.closest('#mobile-menu-button')) {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('open');
        }
    });
    
    // Smooth scrolling for navigation links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.remove('open');
            }
        }
    });
    
    // Add shadow to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        }
    });
});