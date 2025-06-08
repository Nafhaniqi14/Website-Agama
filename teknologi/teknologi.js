document.addEventListener('DOMContentLoaded', function() {
  // Loading Page Animation
  const loadingPage = document.querySelector('.loading-page');
  const progressBar = document.querySelector('.progress');
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Hide loading page after animation completes
      setTimeout(() => {
        loadingPage.style.opacity = '0';
        loadingPage.style.visibility = 'hidden';
        
        // Show the main content
        document.body.style.overflow = 'auto';
      }, 0);
    }
    progressBar.style.width = `${progress}%`;
  }, 0);
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      }
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight Active Menu Item on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Animate Elements on Scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.content-card, .definition-item, .scientist-card, .principle-item, .challenge-item, .strategy-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animation
  document.querySelectorAll('.content-card, .definition-item, .scientist-card, .principle-item, .challenge-item, .strategy-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  
  // Character Animation on Loading Page
  const character = document.querySelector('.character');
  const mouth = document.querySelector('.mouth');
  
  // Make character blink and smile occasionally
  setInterval(() => {
    // Blink
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
      eye.style.height = '2px';
      setTimeout(() => {
        eye.style.height = '15px';
      }, 200);
    });
    
    // Smile occasionally
    if (Math.random() > 0.7) {
      mouth.style.height = '5px';
      mouth.style.borderRadius = '0 0 15px 15px';
      setTimeout(() => {
        mouth.style.height = '10px';
        mouth.style.borderRadius = '0 0 10px 10px';
      }, 1000);
    }
  }, 3000);
});