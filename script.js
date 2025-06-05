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
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    const searchBox = document.querySelector('.search-box');
    
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
    searchBox.style.display = searchBox.style.display === 'flex' ? 'none' : 'flex';
    
    if (window.innerWidth <= 768) {
        if (navbar.style.display === 'block') {
            navbar.style.position = 'absolute';
            navbar.style.top = '100%';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.background = '#fff';
            navbar.style.padding = '20px';
            navbar.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            
            navbar.querySelector('ul').style.flexDirection = 'column';
            navbar.querySelector('ul li').style.margin = '10px 0';
            
            searchBox.style.position = 'absolute';
            searchBox.style.top = 'calc(100% + 150px)';
            searchBox.style.left = '15px';
            searchBox.style.right = '15px';
        } else {
            navbar.style.position = '';
            navbar.style.top = '';
            navbar.style.left = '';
            navbar.style.right = '';
            navbar.style.background = '';
            navbar.style.padding = '';
            navbar.style.boxShadow = '';
            
            navbar.querySelector('ul').style.flexDirection = '';
            navbar.querySelector('ul li').style.margin = '';
            
            searchBox.style.position = '';
            searchBox.style.top = '';
            searchBox.style.left = '';
            searchBox.style.right = '';
        }
    }
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
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                document.querySelector('.navbar').style.display = 'none';
                document.querySelector('.search-box').style.display = 'none';
            }
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
// Tidak diperlukan JavaScript khusus untuk section ini
// Kecuali jika ingin menambahkan fitur tambahan seperti:
// - Tombol kontak
// - Galeri foto
// - Dll.

// Contoh jika ingin menambahkan efek hover pada gambar dosen
document.querySelector('.dosen-image').addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.02)';
  this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.dosen-image').addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
});
const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Smooth scrolling for anchor links
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