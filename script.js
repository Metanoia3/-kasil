console.log('Kasil: testing branch JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  // nav bar declarations 
  let lastScrollTop = 0;
  let scrollThreshold = 100;
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const logo = document.getElementById('logo');

  const h1 = document.querySelector('h1');
  // if (h1) h1.insertAdjacentHTML('afterend', '<p id="js-ok">JS is working ✅</p>');

  // Scroll event listener
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class based on scroll position
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
      // Switch to black logo when scrolled (if you have a black version)
      // logo.src = 'images/kasil-black.png';
    } else {
      navbar.classList.remove('scrolled');
      // Switch back to white logo
      // logo.src = 'images/kasil-white.png';
    }
    
    // Hide/show navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      // Scrolling down
      navbar.classList.add('hidden');
    } else {
      // Scrolling up
      navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
  });

  // Update active link based on current page
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = document.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call with timeout
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});