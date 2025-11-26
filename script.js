// ===================================
// JavaScript for MERBAU GULIVER Website
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navigation Functionality
    // ===================================
    
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // ===================================
    // Smooth Scrolling
    // ===================================
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Number Counter Animation
    // ===================================
    
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 10);
        } else {
            counter.innerText = target;
            
            // Add + or % symbol if needed
            const parent = counter.parentElement;
            const label = parent.querySelector('.stat-label');
            if (label) {
                if (label.textContent.includes('%')) {
                    counter.innerText = target + '%';
                } else if (target >= 100) {
                    counter.innerText = target + '+';
                }
            }
        }
    };
    
    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                countUp(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counter.innerText = '0';
        counterObserver.observe(counter);
    });
    
    // ===================================
    // Scroll Animation (Fade In)
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements
    const elementsToAnimate = [
        '.service-card',
        '.team-member',
        '.about-feature',
        '.contact-item'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('fade-in');
            animateOnScroll.observe(element);
        });
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Here you would normally send the data to a server
            // For demo purposes, we'll just show an alert
            console.log('Form Data:', data);
            
            // Show success message
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ===================================
    // Image Error Handling
    // ===================================
    
    // Create placeholder image for missing images
    const createPlaceholder = (width, height, text) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(0, 0, width, height);
        
        // Text
        ctx.fillStyle = '#718096';
        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text || 'Image', width/2, height/2);
        
        return canvas.toDataURL();
    };
    
    // Handle missing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.classList.contains('team-photo')) {
                this.src = createPlaceholder(150, 150, 'Team Member');
            } else if (this.classList.contains('logo-img')) {
                // Hide logo image and show text if logo fails to load
                this.style.display = 'none';
                const logoText = this.nextElementSibling;
                if (logoText && logoText.classList.contains('logo-text')) {
                    logoText.style.display = 'block';
                }
            } else if (this.classList.contains('hero-bg-img')) {
                // Create gradient background if hero image fails
                const heroSection = this.closest('.hero');
                if (heroSection) {
                    heroSection.style.background = 'linear-gradient(135deg, #1a2332 0%, #2d3e50 50%, #c41e3a 100%)';
                }
                this.style.display = 'none';
            }
        });
    });
    
    // ===================================
    // Active Navigation Link
    // ===================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function activateNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', activateNavLink);
    
    // ===================================
    // Parallax Effect for Hero
    // ===================================
    
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // ===================================
    // Loading Animation
    // ===================================
    
    window.addEventListener('load', function() {
        // Add loaded class to body for any initial animations
        document.body.classList.add('loaded');
    });
    
    // ===================================
    // Service Cards Hover Effect
    // ===================================
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add slight rotation to adjacent cards
            const allCards = Array.from(serviceCards);
            const currentIndex = allCards.indexOf(this);
            
            if (currentIndex > 0) {
                allCards[currentIndex - 1].style.transform = 'rotate(-1deg)';
            }
            if (currentIndex < allCards.length - 1) {
                allCards[currentIndex + 1].style.transform = 'rotate(1deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            serviceCards.forEach(c => {
                if (c !== this) {
                    c.style.transform = '';
                }
            });
        });
    });
    
    // ===================================
    // Initialize on Load
    // ===================================
    
    console.log('MERBAU GULIVER website loaded successfully!');
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
