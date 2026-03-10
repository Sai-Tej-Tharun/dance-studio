const themeToggle = document.getElementById('theme-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navContainer = document.querySelector('.nav-container');
const modeIcon = document.querySelector('.mode-icon');

// 1. Theme Logic
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    modeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
};

// Auto-detect System Preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(prefersDark.matches ? 'dark' : 'light');
}

// Manual Toggle
themeToggle.addEventListener('click', () => {
    const currentMode = document.documentElement.getAttribute('data-theme');
    setTheme(currentMode === 'dark' ? 'light' : 'dark');
});

// 2. Hamburger Menu Logic
mobileMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    // Animate hamburger to X
    mobileMenu.classList.toggle('open');
});

/*card section*/
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.class-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for each card
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
        observer.observe(card);
    });
});
/*Gallary */
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay logic
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.15 });

    galleryItems.forEach(item => {
        // Initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px) scale(0.95)';
        item.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        revealObserver.observe(item);
    });
});
/*sec2 */
document.addEventListener('DOMContentLoaded', () => {
    const underlineText = document.querySelector('.animate-underline');

    const underlineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to start the drawing transition
                entry.target.classList.add('active');
                // Stop observing once the animation has played
                underlineObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 1.0 // Trigger only when the full text is visible
    });

    if (underlineText) {
        underlineObserver.observe(underlineText);
    }
});
/*sec3 */
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    });
});

window.addEventListener('scroll', () => {
    const parallaxSection = document.querySelector('.feature-layout');
    
    // Check if we are on desktop/tablet before running parallax
    if (window.innerWidth > 640) {
        const scrollPosition = window.pageYOffset;
        
        // Calculate the speed (0.3 = 30% scroll speed)
        // Offset the background-position-y
        parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
    }
});

// Optional: Smoothly fade in cards as they scroll into view
const revealOptions = { threshold: 0.1 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, revealOptions);

document.querySelectorAll('.info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(card);
});
/* sect4 */
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-signup');
    const name = document.getElementById('name').value;

    // UI Change on Success
    btn.textContent = "THANK YOU!";
    btn.style.background = "#28a745"; // Success green
    
    console.log(`Newsletter signup: ${name}`);
    
    // Reset after 3 seconds
    setTimeout(() => {
        btn.textContent = "SIGN UP";
        btn.style.background = "var(--purple-grad)";
        this.reset();
    }, 3000);
});

/*home1 */
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add a temporary "transitioning" class for extra smoothness
    document.body.classList.add('theme-transitioning');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 400); // Matches the CSS transition speed
};
/*sec1 */
const observerOptions = { threshold: 0.2 };

const balletObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered reveal
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 200);
        }
    });
}, observerOptions);

document.querySelectorAll('.class-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    balletObserver.observe(card);
});
/*sec2 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Switching Logic
    const stepBtns = document.querySelectorAll('.step-btn');
    
    stepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stepBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Optional: You can change the description text here
            // based on the data-step attribute if needed.
        });
    });

    // 2. Scroll Animation (From previous steps)
    const technicInfo = document.querySelector('.technic-info');
    const technicImage = document.querySelector('.technic-image-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                technicInfo.style.opacity = '1';
                technicInfo.style.transform = 'translateX(0)';
                technicImage.style.opacity = '1';
                technicImage.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });

    // Initial state
    technicInfo.style.opacity = '0';
    technicInfo.style.transform = 'translateX(-30px)';
    technicImage.style.opacity = '0';
    technicImage.style.transform = 'translateX(30px)';
    technicInfo.style.transition = technicImage.style.transition = 'all 0.8s ease-out';

    observer.observe(technicInfo);
});
/*sec2 */
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for a premium feel
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
});
/*sec3 */
document.addEventListener('DOMContentLoaded', () => {
    const ctaContent = document.querySelector('.content-inner');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    // Initial State for Reveal
    ctaContent.style.opacity = '0';
    ctaContent.style.transform = 'translateX(50px)';
    ctaContent.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

    observer.observe(ctaContent);
});


/*about */
document.addEventListener('DOMContentLoaded', () => {
    const courseBtn = document.querySelector('.btn-courses');
    const visualCircle = document.querySelector('.circle-feature img');
    const circleContainer = document.querySelector('.circle-feature');

    if (courseBtn && visualCircle) {
        // When mouse enters the button
        courseBtn.addEventListener('mouseenter', () => {
            visualCircle.style.transform = 'scale(1.15)';
            circleContainer.style.borderColor = '#f2a879';
        });

        // When mouse leaves the button
        courseBtn.addEventListener('mouseleave', () => {
            visualCircle.style.transform = 'scale(1)';
            circleContainer.style.borderColor = '#ffffff';
        });
    }
});
/*team */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove 'expanded' class from the default card when user starts hovering
            cards.forEach(c => c.classList.remove('expanded'));
        });
    });
});
/*test */

const userItems = document.querySelectorAll('.user-item');
const reviewText = document.getElementById('review-text');
let currentIndex = 1; // Start at Edward (the middle item)
let autoPlayTimer;

// Function to update the UI
function updateReview(index) {
  // Update Active Class
  userItems.forEach(i => i.classList.remove('active'));
  userItems[index].classList.add('active');

  // Fade Text
  reviewText.style.opacity = 0;
  setTimeout(() => {
    reviewText.textContent = reviewsData[index].text;
    reviewText.style.opacity = 1;
  }, 300);

  currentIndex = index;
}

// Function to start Auto-Play
function startAutoPlay() {
  autoPlayTimer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % reviewsData.length;
    updateReview(nextIndex);
  }, 1000); // 5 Seconds
}

// Handle Manual Clicks
userItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    clearInterval(autoPlayTimer); // Stop auto-play on manual interaction
    updateReview(index);
    startAutoPlay(); // Restart timer after click
  });
});

// Initialize
startAutoPlay();

/*serv */
const observerOptions1 = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Target all sections you want to animate on scroll
document.querySelectorAll('.hero-content, .info-card').forEach(el => {
  observer.observe(el);
});
const trialForm = document.getElementById('trial-form');

trialForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Basic feedback
  const btn = trialForm.querySelector('.btn-book-now');
  btn.textContent = "SENDING...";
  btn.disabled = true;

  setTimeout(() => {
    alert("Thank you! Your trial class request has been sent.");
    btn.textContent = "BOOK NOW";
    btn.disabled = false;
    trialForm.reset();
  }, 1500);
});

/*blog faq */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all other items
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-icon').textContent = '+';
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.faq-icon').textContent = '−';
    }
  });
});


/*register */
function flipCard() {
  const cardInner = document.querySelector('.flip-card-inner');
  cardInner.classList.toggle('is-flipped');
}
