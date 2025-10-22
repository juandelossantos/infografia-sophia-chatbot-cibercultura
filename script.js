/**
 * SOPHI.A - Interactive Infographic
 * JavaScript functionality
 */

// ===== UTILITY FUNCTIONS =====

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait = 10) {
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

/**
 * Throttle function for performance optimization
 */
function throttle(func, limit = 16) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PROGRESS BAR =====

const progressBar = document.getElementById('progressBar');

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
}

// ===== NAVIGATION =====

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu after clicking
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ===== SCROLL SPY =====

const sections = document.querySelectorAll('.section, .hero-section');

function highlightNavigation() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ===== BACK TO TOP BUTTON =====

const backToTopButton = document.getElementById('backToTop');

function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== TOOLTIP =====

const tooltip = document.getElementById('tooltip');
const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', (e) => {
        const tooltipText = trigger.getAttribute('data-tooltip');
        tooltip.textContent = tooltipText;
        tooltip.classList.add('visible');
        updateTooltipPosition(e);
    });
    
    trigger.addEventListener('mousemove', (e) => {
        updateTooltipPosition(e);
    });
    
    trigger.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });
});

function updateTooltipPosition(e) {
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    
    let left = e.clientX - tooltipWidth / 2;
    let top = e.clientY - tooltipHeight - 10;
    
    // Prevent tooltip from going off-screen
    if (left < 10) left = 10;
    if (left + tooltipWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltipWidth - 10;
    }
    if (top < 10) {
        top = e.clientY + 10;
    }
    
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

// ===== LIGHTBOX GALLERY =====

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const galleryId = item.getAttribute('data-gallery');
        
        // In a real implementation, you would load actual images here
        // For now, we'll show a message
        lightboxCaption.textContent = `Evidencia visual ${galleryId} - Añade tu imagen aquí`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Note: When you have actual images, set the src:
        // lightboxImage.src = item.querySelector('img').src;
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ===== FLIP CARDS TOUCH SUPPORT (MOBILE) =====

const flipCards = document.querySelectorAll('.flip-card');

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            const inner = card.querySelector('.flip-card-inner');
            if (card.classList.contains('flipped')) {
                inner.style.transform = 'rotateY(180deg)';
            } else {
                inner.style.transform = 'rotateY(0deg)';
            }
        });
    });
}

// ===== SMOOTH SCROLL FOR ALL HASH LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== KEYBOARD NAVIGATION =====

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const sectionsArray = Array.from(sections);
        const currentIndex = sectionsArray.indexOf(currentSection);
        
        let targetIndex;
        if (e.key === 'ArrowDown') {
            targetIndex = Math.min(currentIndex + 1, sectionsArray.length - 1);
        } else {
            targetIndex = Math.max(currentIndex - 1, 0);
        }
        
        if (targetIndex !== currentIndex) {
            e.preventDefault();
            sectionsArray[targetIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

function getCurrentSection() {
    let current = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
        }
    });
    return current;
}

// ===== SCROLL EVENT HANDLERS =====

const handleScroll = throttle(() => {
    updateProgressBar();
    highlightNavigation();
    toggleBackToTop();
}, 16);

window.addEventListener('scroll', handleScroll);

// ===== RESIZE EVENT HANDLERS =====

const handleResize = debounce(() => {
    // Recalculate any size-dependent calculations here
    updateProgressBar();
}, 250);

window.addEventListener('resize', handleResize);

// ===== INITIALIZE ON DOM LOAD =====

document.addEventListener('DOMContentLoaded', () => {
    // Initial calls
    updateProgressBar();
    highlightNavigation();
    toggleBackToTop();
    
    // Initialize Lucide icons (called in HTML but ensure it's available)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add loaded class to body for CSS animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Console message
    console.log('%c🤖 SOPHI.A Infografía Interactiva', 'font-size: 20px; font-weight: bold; color: #2196F3;');
    console.log('%cProyecto desarrollado para UNAD - Cibercultura 2025', 'font-size: 14px; color: #666;');
});

// ===== PERFORMANCE OPTIMIZATION =====

// Lazy load images when they come into viewport
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== PREVENT LAYOUT SHIFT =====

// Add resize observer for elements that might cause layout shifts
if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(entries => {
        // Handle resize events without causing performance issues
        debounce(() => {
            entries.forEach(entry => {
                // You can add specific handling here if needed
            });
        }, 100)();
    });
    
    // Observe elements that might change size
    document.querySelectorAll('.intro-card, .flip-card, .gallery-item').forEach(el => {
        resizeObserver.observe(el);
    });
}

// ===== ANALYTICS & TRACKING (OPTIONAL) =====

// Track section views
const trackSectionView = debounce((sectionId) => {
    console.log(`Section viewed: ${sectionId}`);
    // Add your analytics tracking here
    // Example: gtag('event', 'section_view', { section: sectionId });
}, 1000);

sections.forEach(section => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackSectionView(entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    sectionObserver.observe(section);
});

// ===== ERROR HANDLING =====

window.addEventListener('error', (e) => {
    console.error('Error caught:', e.error);
    // You can add error reporting here
});

// ===== EXPORT FOR TESTING (IF NEEDED) =====

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateProgressBar,
        highlightNavigation,
        toggleBackToTop,
        closeLightbox,
        debounce,
        throttle
    };
}
