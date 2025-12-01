// ============================================
// REVAL CREATIVE STUDIO - ENHANCED SCRIPT
// With GSAP Animations & Premium Effects
// ============================================

// ============================================
// 1. PRELOADER
// ============================================

function initPreloader() {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return;

    window.addEventListener('load', () => {
        // GSAP animation for preloader
        gsap.to('.preloader-spinner', {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'back.in'
        });

        gsap.to('.preloader-logo', {
            y: -50,
            opacity: 0,
            duration: 0.5,
            delay: 0.3
        });

        gsap.to('.preloader', {
            opacity: 0,
            duration: 0.5,
            delay: 0.6,
            onComplete: () => {
                preloader.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Delay page animations to ensure DOM is ready
                setTimeout(() => {
                    initPageAnimations();
                }, 100);
            }
        });
    });
}

// ============================================
// 2. SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// 3. CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursor || window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Dot follows immediately
        cursorX += (mouseX - cursorX) * 0.9;
        cursorY += (mouseY - cursorY) * 0.9;

        // Outline follows with delay
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorDot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Magnetic effect on buttons
    const magneticElements = document.querySelectorAll('.btn, .service-card, .pricing-card');

    magneticElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, {
                scale: 1.5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// 4. GSAP SCROLL ANIMATIONS
// ============================================

function initPageAnimations() {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Check if hero animations already played (prevent flicker on refresh)
    const heroAnimPlayed = sessionStorage.getItem('heroAnimPlayed');

    if (!heroAnimPlayed) {
        // Hero animations (run only once per session)
        gsap.from('.hero-title .word', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            onComplete: () => {
                sessionStorage.setItem('heroAnimPlayed', 'true');
            }
        });

        gsap.from('.hero-subtitle', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('.hero-cta', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            ease: 'power3.out'
        });
    }

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Service cards with stagger
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            markers: false,
            once: true,
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Pricing cards - FIX: Add proper ScrollTrigger
    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 80%',
            markers: false,
            once: true,
            toggleActions: 'play none none none'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    });

    // Portfolio items
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 80%',
            markers: false,
            once: true,
            toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Testimonial cards
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonial-grid',
            start: 'top 80%',
            markers: false,
            once: true,
            toggleActions: 'play none none none'
        },
        x: (index) => index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Why us items - FIX: Add proper ScrollTrigger
    gsap.from('.why-us-item', {
        scrollTrigger: {
            trigger: '.why-us-grid',
            start: 'top 80%',
            markers: false,
            once: true,
            toggleActions: 'play none none none'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
}

// ============================================
// 5. CARD TILT EFFECT (3D)
// ============================================

function initCardTilt() {
    const cards = document.querySelectorAll('.service-card, .pricing-card, .portfolio-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// 6. ENHANCED PARTICLE SYSTEM
// ============================================

class EnhancedParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: 0, y: 0 };

        this.resizeCanvas();
        this.initParticles();
        this.animate();

        window.addEventListener('resize', () => this.resizeCanvas());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
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
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2.5 + 1,
                opacity: Math.random() * 0.6 + 0.2,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(0, 217, 255,',
            'rgba(131, 56, 236,',
            'rgba(255, 0, 110,'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const force = (150 - distance) / 150;
                particle.vx -= (dx / distance) * force * 0.2;
                particle.vy -= (dy / distance) * force * 0.2;
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Keep in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

            // Damping
            particle.vx *= 0.99;
            particle.vy *= 0.99;

            // Draw particle with glow
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = particle.color + particle.opacity + ')';
            this.ctx.fillStyle = particle.color + particle.opacity + ')';
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw connections
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index < otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        this.ctx.shadowBlur = 0;
                        this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.15 * (1 - distance / 120)})`;
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
// 7. MOBILE MENU (Keep existing)
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

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ============================================
// 8. SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                gsap.to(window, {
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    duration: 1,
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ============================================
// 9. NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    gsap.to(navbar, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top -50',
            end: 'top -51',
            onEnter: () => {
                gsap.to(navbar, {
                    background: 'rgba(10, 14, 39, 0.98)',
                    boxShadow: '0 4px 30px rgba(0, 217, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    duration: 0.3
                });
            },
            onLeaveBack: () => {
                gsap.to(navbar, {
                    background: 'rgba(10, 14, 39, 0.95)',
                    boxShadow: 'none',
                    backdropFilter: 'blur(10px)',
                    duration: 0.3
                });
            }
        }
    });
}

// ============================================
// 10. SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, #00d9ff 0%, #8338ec 100%);
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 8px 24px rgba(0, 217, 255, 0.4);
    `;

    document.body.appendChild(scrollTopBtn);

    gsap.to(scrollTopBtn, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top -300',
            end: 'top -301',
            onEnter: () => {
                gsap.to(scrollTopBtn, {
                    opacity: 1,
                    visibility: 'visible',
                    duration: 0.3
                });
            },
            onLeaveBack: () => {
                gsap.to(scrollTopBtn, {
                    opacity: 0,
                    visibility: 'hidden',
                    duration: 0.3
                });
            }
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: 0,
            duration: 1.5,
            ease: 'power3.inOut'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', () => {
        gsap.to(scrollTopBtn, {
            scale: 1.1,
            boxShadow: '0 12px 32px rgba(0, 217, 255, 0.6)',
            duration: 0.3
        });
    });

    scrollTopBtn.addEventListener('mouseleave', () => {
        gsap.to(scrollTopBtn, {
            scale: 1,
            boxShadow: '0 8px 24px rgba(0, 217, 255, 0.4)',
            duration: 0.3
        });
    });
}

// ============================================
// 11. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize preloader first
    initPreloader();

    // Initialize particle system
    new EnhancedParticleSystem('particleCanvas');

    // Initialize all features
    initScrollProgress();
    initCustomCursor();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initCardTilt();
    initScrollToTop();

    console.log('🚀 Reval Creative Studio - Enhanced version loaded!');
});
