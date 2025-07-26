  // Enhanced hover effects
    document.querySelectorAll(".section").forEach((section) => {
      section.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-4px) scale(1.01)";
        this.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.5)";
      });

      section.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
        this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
      });

      section.addEventListener("click", function () {
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "translateY(-4px) scale(1.01)";
        }, 150);
      });
    });

    // Add subtle animations on load
    window.addEventListener("load", () => {
      document.querySelectorAll(".section").forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";

        setTimeout(() => {
          section.style.transition = "all 0.6s ease";
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }, index * 100);
      });
    });

    // Hamburger Menu Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const hamburgerMenu = document.getElementById('hamburger-menu');
      const mobileMenu = document.getElementById('mobile-menu');
      const closeMenu = document.getElementById('close-menu');
      const mobileMenuOverlay = mobileMenu.querySelector('.bg-white');

      // Open menu
      hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });

      // Close menu
      function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
      }

      closeMenu.addEventListener('click', closeMobileMenu);

      // Close menu when clicking outside
      mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
          closeMobileMenu();
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          closeMobileMenu();
        }
      });
    });