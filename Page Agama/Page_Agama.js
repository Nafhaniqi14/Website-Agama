/**
 * Script utama untuk halaman "Peranan Agama dalam Kehidupan"
 * Menangani semua interaksi dan fungsionalitas pada halaman
 */
// Loading Page Animation
window.addEventListener('load', function() {
  const loadingPage = document.querySelector('.loading-page');
  const progressBar = document.querySelector('.progress');
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingPage.style.opacity = '0';
        loadingPage.style.visibility = 'hidden';
        
        // Enable scrolling after loading
        document.body.style.overflow = 'auto';
      }, 0);
    }
  }, 0);
  
  // Disable scrolling during loading
  document.body.style.overflow = 'hidden';
  
  // Character interaction
  const character = document.querySelector('.character');
  const mouth = document.querySelector('.mouth');
  
  character.addEventListener('mouseenter', () => {
    mouth.style.height = '5px';
    mouth.style.borderRadius = '10px';
  });
  
  character.addEventListener('mouseleave', () => {
    mouth.style.height = '10px';
    mouth.style.borderRadius = '0 0 10px 10px';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // ==================== MOBILE MENU TOGGLE ====================
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });

  // ==================== SMOOTH SCROLLING ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
          navbar.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL without refreshing
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });

  // ==================== TAB SYSTEM ====================
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show the selected tab content
      const tabId = button.getAttribute('data-tab');
      const selectedTab = document.getElementById(tabId);
      if (selectedTab) {
        selectedTab.classList.add('active');
        // Trigger animation
        selectedTab.style.animation = 'none';
        setTimeout(() => {
          selectedTab.style.animation = 'fadeIn 0.5s ease';
        }, 10);
      }
    });
  });

  // ==================== ACTIVE NAVIGATION HIGHLIGHT ====================
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    let activeSectionId = '';
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = sectionId;
      }
    });
    
    // Update active class in navigation
    document.querySelectorAll('#menu a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  // ==================== BACK TO TOP BUTTON ====================
  const backToTopBtn = document.getElementById('back-to-top');
  
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  }
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==================== NEWSLETTER FORM ====================
  const newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (email && emailRegex.test(email)) {
        // Here you would typically send the data to your server
        console.log('Email submitted:', email);
        alert('Terima kasih telah berlangganan newsletter kami!');
        emailInput.value = '';
      } else {
        alert('Silakan masukkan alamat email yang valid.');
        emailInput.focus();
      }
    });
  }

  // ==================== ANIMATION ON SCROLL ====================
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      '.content-card, .classification-item, .source-item, .principle-item'
    );
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Initialize elements for animation
  function initAnimations() {
    document.querySelectorAll(
      '.content-card, .classification-item, .source-item, .principle-item'
    ).forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  }

  // ==================== RESPONSIVE ADJUSTMENTS ====================
  function handleResponsive() {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }
  }

  // ==================== INITIALIZE ====================
  function init() {
    // Set initial active nav link
    updateActiveNav();
    
    // Initialize animations
    initAnimations();
    animateOnScroll();
    
    // Set initial back to top button state
    toggleBackToTop();
    
    // Activate first tab by default
    if (tabButtons.length > 0 && tabContents.length > 0) {
      tabButtons[0].click();
    }
  }

  // ==================== EVENT LISTENERS ====================
  window.addEventListener('scroll', function() {
    updateActiveNav();
    toggleBackToTop();
    animateOnScroll();
  });

  window.addEventListener('resize', function() {
    handleResponsive();
    // Recalculate positions after resize
    setTimeout(updateActiveNav, 100);
  });

  // Initialize everything
  init();
});

// Fallback for browsers that don't support DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
