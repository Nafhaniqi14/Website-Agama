document.addEventListener('DOMContentLoaded', function() {
    // Loading page animation
    const loadingPage = document.querySelector('.loading-page');
    const progressBar = document.querySelector('.progress');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loadingPage.style.opacity = '0';
                loadingPage.style.visibility = 'hidden';
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, 0);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbar.style.display = 'none';
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Responsive navbar
    function handleResponsiveNavbar() {
        if (window.innerWidth > 992) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', handleResponsiveNavbar);
    handleResponsiveNavbar();
    
    // Animate content cards on scroll
    const animateOnScroll = function() {
        const contentCards = document.querySelectorAll('.content-card');
        
        contentCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
// Di dalam file JavaScript Anda
const backButton = document.getElementById('backButton');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backButton.style.opacity = '1';
        backButton.style.visibility = 'visible';
    } else {
        backButton.style.opacity = '0';
        backButton.style.visibility = 'hidden';
    }
});

// Atur style awal
backButton.style.opacity = '0';
backButton.style.visibility = 'hidden';
backButton.style.transition = 'all 0.3s ease';
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});