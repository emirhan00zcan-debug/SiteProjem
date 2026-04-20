document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Category Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mobile Menu Toggle (Basic Placeholder)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Mobil menü yakında hizmetinizde!');
        });
    }

    // Hero Slider Logic (Clean Version & Reverted Support)
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderContainer = document.querySelector('.slider-container');

    // Support both .prev-slide (clean) and .prev-btn (immersive) classes
    const prevBtn = document.querySelector('.prev-slide') || document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-slide') || document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        // Handle wrap-around
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current (for internal animations)
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        // SLIDE ANIMATION: Move the container sideways
        if (sliderContainer) {
            sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        currentSlide = index;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Timer Functions
    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Event Listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    // Dot Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Initialize if slider exists
    if (slides.length > 0) {
        showSlide(0);
        startTimer();
    }

    // Mega Menu Category Links logic
    const megaLinks = document.querySelectorAll('.mega-column ul li a');
    megaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filter = link.getAttribute('data-filter');
            // Check if we are on the homepage
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                // If on homepage, just click the filter
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                if (filterBtn) {
                    filterBtn.click();
                }
            } else {
                // If not on homepage, let the link logic in standard a href handle it if needed, 
                // but usually these links go to index.html#products. 
                // We might need to store the filter in localStorage if we want it to apply after navigation.
                // For now, simple link following is fine.
            }
        });
    });

    // Reveal animations on scroll
    const revealOnScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Update Reveal Elements for new content (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Smooth Scroll for Koleksiyon/Showcase & Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // If it's a link to top
            if (targetId === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // Normal anchor scrolling
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
