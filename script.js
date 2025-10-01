// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add click events to all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });

    // Add click events to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Browse Courses') || btn.textContent.includes('View Courses')) {
            btn.addEventListener('click', function() {
                scrollToSection('courses');
            });
        }
        
        if (btn.textContent.includes('Why Choose Us')) {
            btn.addEventListener('click', function() {
                scrollToSection('features');
            });
        }
    });

    // Course preview data
    const coursePreviews = {
        python: {
            title: "Python Programming Mastery",
            description: "Get a sneak peek into our comprehensive Python course. Learn why Python is the perfect language for beginners and professionals alike.",
            features: [
                "Interactive coding exercises",
                "Real-world projects",
                "Step-by-step tutorials",
                "Community support"
            ]
        },
        datascience: {
            title: "Data Science & Machine Learning",
            description: "Preview our data science curriculum and see how we make complex concepts easy to understand through practical examples.",
            features: [
                "Hands-on data analysis",
                "Machine learning projects",
                "Data visualization techniques",
                "Statistical modeling"
            ]
        },
        webdev: {
            title: "Full-Stack Web Development",
            description: "See how we teach modern web development with real projects that you can build and deploy.",
            features: [
                "Frontend frameworks",
                "Backend development",
                "Database integration",
                "Deployment strategies"
            ]
        },
        cybersecurity: {
            title: "Cybersecurity Fundamentals",
            description: "Preview our cybersecurity course and learn how we teach essential security concepts through practical labs.",
            features: [
                "Security principles",
                "Hands-on labs",
                "Threat analysis",
                "Protection techniques"
            ]
        }
    };

    // Show course preview modal
    window.showCoursePreview = function(courseKey) {
        const modal = document.getElementById('previewModal');
        const previewContent = document.getElementById('previewContent');
        const course = coursePreviews[courseKey];
        
        if (course) {
            previewContent.innerHTML = `
                <div class="preview-header">
                    <h2>${course.title}</h2>
                    <p>${course.description}</p>
                </div>
                
                <div class="preview-video">
                    <i class="fas fa-play-circle"></i>
                    <p>Course Preview Video</p>
                </div>
                
                <div class="preview-features">
                    ${course.features.map(feature => `
                        <div class="preview-feature">
                            <i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 0.5rem;"></i>
                            <p>${feature}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="courses/${courseKey}.html" class="btn btn-primary btn-large">
                        <i class="fas fa-play"></i> Start Full Course
                    </a>
                </div>
            `;
            
            modal.style.display = 'block';
        }
    };

    // Close modal
    window.closeModal = function() {
        const modal = document.getElementById('previewModal');
        modal.style.display = 'none';
    };

    // Random course selector
    window.showRandomCourse = function() {
        const courses = ['python', 'datascience', 'webdev', 'cybersecurity'];
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        showCoursePreview(randomCourse);
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('previewModal');
        if (event.target === modal) {
            closeModal();
        }
    };

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const bars = document.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.course-card, .feature-card, .path-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add some interactive features
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-8px) scale(1)';
            } else {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Simple form handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo site. In a real application, this would submit your information.');
            this.reset();
        });
    });
});
