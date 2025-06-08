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

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');
  
mobileMenuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Tab Functionality for Hadith Section
const tabButtons = document.querySelectorAll('.tab-button');
const hadithItems = document.querySelectorAll('.hadith-item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Here you would typically fetch and display the appropriate hadith content
    // For demo purposes, we'll just show the first item
    hadithItems.forEach(item => item.style.display = 'none');
    hadithItems[0].style.display = 'block';
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 100) {
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

// Horizontal scroll effect for articles
const articlesContainer = document.querySelector(".articles-grid");
if (articlesContainer) {
  articlesContainer.style.overflowX = 'auto';
  articlesContainer.style.whiteSpace = 'nowrap';
  articlesContainer.style.scrollbarWidth = 'thin';
  
  // Make article cards display inline-block for horizontal scrolling
  document.querySelectorAll('.article-card').forEach(card => {
    card.style.display = 'inline-block';
    card.style.width = '300px';
    card.style.marginRight = '30px';
    card.style.whiteSpace = 'normal';
    card.style.verticalAlign = 'top';
  });
}

// Dosen image hover effect
document.querySelectorAll('.dosen-image').forEach(image => {
  image.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});
