document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Gallery Data (based on uploaded images)
    // ========================================
    const galleryData = [
        {
            id: 1,
            src: 'Assets/04c195fd851adfe31024d2994aca18cb.png',
            category: 'nails',
            title: 'Elegant Nail Design'
        },
        {
            id: 2,
            src: 'Assets/140b78f7464381b3e67a2681e9c10a72.png',
            category: 'nails',
            title: 'Soft Nude Glam'
        },
        {
            id: 3,
            src: 'Assets/7af55bb1cb579e07a83ddff0b459c724.png',
            category: 'nails',
            title: 'Bold Color Nail Art'
        },
        {
            id: 4,
            src: 'Assets/85b6046eeae638dfc69ea7f1a8878114.png',
            category: 'nails',
            title: 'Luxury Gel Set'
        },
        {
            id: 5,
            src: 'Assets/9a0bf1c3fa46ad42e0e72c7f206c7945.png',
            category: 'nails',
            title: 'Floral Nail Art'
        },
        {
            id: 6,
            src: 'Assets/a7ee7037f3bac0a4a6aea5f0de141f91.png',
            category: 'nails',
            title: 'Glossy Nail Finish'
        },
        {
            id: 7,
            src: 'Assets/ac970c39766ec37fe83c93c7d0a7c6aa.png',
            category: 'nails',
            title: 'Statement Nail Design'
        },
        {
            id: 8,
            src: 'Assets/c782fbde607f3521fe3fd8aa93330c21.png',
            category: 'nails',
            title: 'Bright French Tip'
        },
        {
            id: 9,
            src: 'Assets/cdf7a4ded29dae771f9c7199c4d0976c.png',
            category: 'nails',
            title: 'Classic Pink Nails'
        },
        {
            id: 10,
            src: 'Assets/braids (1).jpeg',
            category: 'braids',
            title: 'Knotless Braids Style'
        },
        {
            id: 12,
            src: 'Assets/braids (3).jpeg',
            category: 'braids',
            title: 'Box Braids Look'
        },
        {
            id: 14,
            src: 'Assets/locs (1).jpeg',
            category: 'locs',
            title: 'Locs Style'
        },
        {
            id: 15,
            src: 'Assets/locs (2).jpeg',
            category: 'locs',
            title: 'Natural Locs Finish'
        }
    ];

    // ========================================
    // DOM Elements
    // ========================================
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const mobileToggle = document.getElementById('mobileToggle');
    const galleryGrid = document.getElementById('galleryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const backToTop = document.getElementById('backToTop');
    const bookingForm = document.getElementById('bookingForm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const particlesContainer = document.getElementById('particles');
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.getElementById('testimonialDots');

    let currentLightboxIndex = 0;
    let filteredGallery = [...galleryData];
    let currentTestimonial = 0;
    let autoSlideInterval;

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    mobileToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const spans = mobileToggle.querySelectorAll('span');
        
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ========================================
    // Particle Animation (Hero)
    // ========================================
    function createParticles() {
        if (!particlesContainer) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            
            const size = 2 + Math.random() * 4;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            const colors = ['#e91e8c', '#d4af37', '#f8bbd9', '#ffd700'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ========================================
    // Animated Counter
    // ========================================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Trigger when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    animateCounters();

    // ========================================
    // Gallery Rendering
    // ========================================
    function renderGallery(items) {
        if (!galleryGrid) return;
        
        galleryGrid.innerHTML = items.map((item, index) => `
            <div class="gallery-item" data-index="${index}" data-category="${item.category}">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-expand"></i>
                    <span>${item.title}</span>
                </div>
            </div>
        `).join('');

        // Add click handlers
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openLightbox(index);
            });
        });
    }

    renderGallery(galleryData);

    // ========================================
    // Gallery Filter
    // ========================================
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            if (filter === 'all') {
                filteredGallery = [...galleryData];
            } else {
                filteredGallery = galleryData.filter(item => item.category === filter);
            }
            
            // Animate transition
            galleryGrid.style.opacity = '0';
            setTimeout(() => {
                renderGallery(filteredGallery);
                galleryGrid.style.opacity = '1';
            }, 300);
        });
    });

    // ========================================
    // Lightbox
    // ========================================
    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const item = filteredGallery[currentLightboxIndex];
        if (item) {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.title;
            lightboxCaption.textContent = item.title;
        }
    }

    function nextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredGallery.length;
        updateLightbox();
    }

    function prevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
        updateLightbox();
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // ========================================
    // Testimonials Slider
    // ========================================
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    function createDots() {
        if (!testimonialDots) return;
        testimonialDots.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => goToTestimonial(index));
            testimonialDots.appendChild(dot);
        });
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        if (testimonialTrack) {
            testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
        }
        
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        goToTestimonial((currentTestimonial + 1) % testimonials.length);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextTestimonial, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    if (testimonialTrack) {
        createDots();
        startAutoSlide();
        
        // Pause on hover
        testimonialTrack.addEventListener('mouseenter', stopAutoSlide);
        testimonialTrack.addEventListener('mouseleave', startAutoSlide);
        
        // Touch/drag support
        let startX = 0;
        let isDragging = false;
        
        testimonialTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            stopAutoSlide();
        }, { passive: true });
        
        testimonialTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        }, { passive: true });
        
        testimonialTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToTestimonial((currentTestimonial + 1) % testimonials.length);
                } else {
                    goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
                }
            }
            isDragging = false;
            startAutoSlide();
        }, { passive: true });
    }

    // ========================================
    // Scroll Reveal Animation
    // ========================================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.service-card, .pricing-card, .about-content, .about-images, .contact-info, .contact-form-wrapper');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });
    }
    initScrollReveal();

    // ========================================
    // Back to Top
    // ========================================
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========================================
    // Booking Form
    // ========================================
    if (bookingForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showToast('Booking request sent successfully! We will contact you shortly.');
                bookingForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // ========================================
    // Toast Notification
    // ========================================
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Parallax Effect (subtle)
    // ========================================
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < window.innerHeight) {
            const particles = document.querySelectorAll('.particle');
            particles.forEach((p, i) => {
                const speed = 0.3 + (i % 3) * 0.1;
                p.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ========================================
    // Gallery Grid Transition
    // ========================================
    if (galleryGrid) {
        galleryGrid.style.transition = 'opacity 0.3s ease';
    }

    console.log('🌸 Chellah Nailed It website loaded successfully!');
});