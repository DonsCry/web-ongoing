// ============================================
// REVAL CREATIVE STUDIO - MAIN SCRIPT
// ============================================

// ============================================
// 1. PARTICLE ANIMATION
// ============================================

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resizeCanvas();
        this.initParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Keep in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            
            // Draw particle
            this.ctx.fillStyle = `rgba(0, 217, 255, ${particle.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index < otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 150)})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// 2. MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ============================================
// 3. SMOOTH SCROLL & ACTIVE NAV
// ============================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 4. INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // Observe why-us items
    document.querySelectorAll('.why-us-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
    
    // Observe portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// ============================================
// 5. PARALLAX EFFECT
// ============================================

function initParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (!heroBackground) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxAmount = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${parallaxAmount}px)`;
    });
}

// ============================================
// 6. NAVBAR BACKGROUND ON SCROLL
// ============================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ============================================
// 7. ACTIVE SECTION HIGHLIGHTING
// ============================================

function initActiveSectionHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// 8. SMOOTH SCROLL BEHAVIOR
// ============================================

function initSmoothScrollBehavior() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// ============================================
// 9. BUTTON RIPPLE EFFECT
// ============================================

function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// 10. COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// 11. SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00d9ff 0%, #00a8cc 100%);
        color: #0a0e27;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 8px 24px rgba(0, 217, 255, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'scale(1)';
    });
}

// ============================================
// 12. PRELOAD IMAGES
// ============================================

function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
}

// ============================================
// 13. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem('particleCanvas');
    
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initNavbarScroll();
    initActiveSectionHighlight();
    initSmoothScrollBehavior();
    initButtonRipple();
    initScrollToTop();
    preloadImages();
    
    console.log('Reval Creative Studio - All systems initialized!');
});

// ============================================
// 14. PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// 15. UTILITY FUNCTIONS
// ============================================

// Get element by ID
const getElement = (id) => document.getElementById(id);

// Get elements by class
const getElements = (className) => document.querySelectorAll(`.${className}`);

// Add event listener to multiple elements
const addEventListenerToAll = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener(event, callback);
    });
};

// Remove class from all elements
const removeClassFromAll = (selector, className) => {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.remove(className);
    });
};

// Add class to element
const addClass = (element, className) => {
    element.classList.add(className);
};

// Remove class from element
const removeClass = (element, className) => {
    element.classList.remove(className);
};

// Toggle class
const toggleClass = (element, className) => {
    element.classList.toggle(className);
};

// ============================================
// 16. EXPORT FOR WORDPRESS INTEGRATION
// ============================================

// If using as a module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ParticleSystem,
        initMobileMenu,
        initSmoothScroll,
        initScrollAnimations,
        initParallax,
        initNavbarScroll,
        initActiveSectionHighlight,
        initSmoothScrollBehavior,
        initButtonRipple,
        initScrollToTop,
        debounce,
        throttle
    };
}
