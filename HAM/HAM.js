document.addEventListener('DOMContentLoaded', function() {
  // Loading Page Animation
  const loadingPage = document.querySelector('.loading-page');
  
  // Simulate loading
  setTimeout(() => {
    loadingPage.style.opacity = '0';
    loadingPage.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  }, 0);
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      }
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
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll animations
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / 1.2
    );
  };
  
  const displayScrollElement = (element) => {
    element.setAttribute('data-scroll', 'in');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      }
    });
  };
  
  // Initialize scroll animations
  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // Run once on page load
  
  // Form submission
  const newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert('Terima kasih telah berlangganan newsletter kami!');
        emailInput.value = '';
      } else {
        alert('Silakan masukkan alamat email Anda.');
      }
    });
  }
  
  // Active link highlighting
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('#menu li a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
  
  // PDF download tracking
  const pdfButton = document.querySelector('.pdf-button');
  if (pdfButton) {
    pdfButton.addEventListener('click', function() {
      // Here you can add tracking code like Google Analytics
      console.log('PDF downloaded');
    });
  }
  
  // Character animation on hover
  const character = document.querySelector('.character');
  if (character) {
    character.addEventListener('mouseenter', function() {
      this.querySelector('.mouth').style.height = '5px';
      this.querySelector('.mouth').style.borderRadius = '10px';
    });
    
    character.addEventListener('mouseleave', function() {
      this.querySelector('.mouth').style.height = '10px';
      this.querySelector('.mouth').style.borderRadius = '0 0 10px 10px';
    });
  }
});