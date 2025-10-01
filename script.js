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
        
        if (btn.textContent.includes('Our Services') || btn.textContent.includes('Explore Services')) {
            btn.addEventListener('click', function() {
                scrollToSection('services');
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

    // Service data
    const serviceData = {
        'AI & Machine Learning': {
            icon: '🤖',
            description: 'Get expert AI and machine learning solutions tailored to your business needs. We build custom models that drive real business value.',
            features: ['Custom ML Models', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
            startingPrice: '$2,500',
            timeline: '4-8 weeks'
        },
        'Web Development': {
            icon: '💻',
            description: 'Professional web development services to build your online presence. From simple websites to complex web applications.',
            features: ['Responsive Design', 'E-commerce Solutions', 'Web Applications', 'API Integration'],
            startingPrice: '$1,800',
            timeline: '3-6 weeks'
        },
        'Cybersecurity': {
            icon: '🛡️',
            description: 'Protect your business with comprehensive cybersecurity solutions. Stay ahead of threats with our expert security services.',
            features: ['Security Audits', 'Penetration Testing', 'Threat Monitoring', 'Compliance Solutions'],
            startingPrice: '$3,000',
            timeline: '2-4 weeks'
        },
        'Data Engineering': {
            icon: '📈',
            description: 'Build robust data infrastructure that transforms raw data into actionable business intelligence.',
            features: ['Data Pipelines', 'Cloud Architecture', 'BI Solutions', 'Data Warehousing'],
            startingPrice: '$2,200',
            timeline: '4-10 weeks'
        },
        'Mobile App Development': {
            icon: '📱',
            description: 'Create cross-platform mobile applications that deliver exceptional user experiences on any device.',
            features: ['iOS Development', 'Android Development', 'React Native', 'App Store Deployment'],
            startingPrice: '$2,800',
            timeline: '6-12 weeks'
        },
        'Cloud Solutions': {
            icon: '☁️',
            description: 'Scalable cloud infrastructure and migration services for modern business needs. Future-proof your technology stack.',
            features: ['AWS Services', 'Google Cloud', 'Azure Solutions', 'Cloud Migration'],
            startingPrice: '$1,500',
            timeline: '2-6 weeks'
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

    // Show service inquiry modal
    window.showServiceModal = function(serviceName) {
        const modal = document.getElementById('serviceModal');
        const serviceContent = document.getElementById('serviceContent');
        const service = serviceData[serviceName];
        
        if (service) {
            serviceContent.innerHTML = `
                <div class="service-modal-content">
                    <div class="service-modal-icon">${service.icon}</div>
                    <h2>${serviceName}</h2>
                    <p>${service.description}</p>
                    
                    <div style="background: var(--background-alt); padding: 1.5rem; border-radius: 12px; margin: 2rem 0;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center;">
                            <div>
                                <h4 style="color: var(--text); margin-bottom: 0.5rem;">Starting Price</h4>
                                <p style="color: var(--primary); font-weight: 600; font-size: 1.25rem;">${service.startingPrice}</p>
                            </div>
                            <div>
                                <h4 style="color: var(--text); margin-bottom: 0.5rem;">Timeline</h4>
                                <p style="color: var(--text-light); font-weight: 500;">${service.timeline}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin: 2rem 0;">
                        <h4 style="color: var(--text); margin-bottom: 1rem;">What's Included:</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            ${service.features.map(feature => `
                                <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; background: var(--background-alt); border-radius: 6px;">
                                    <i class="fas fa-check" style="color: var(--success);"></i>
                                    <span style="font-size: 0.875rem;">${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <form class="service-form" onsubmit="handleServiceInquiry(event, '${serviceName}')">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="Phone Number">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Tell us about your project..." rows="3" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">
                            <i class="fas fa-paper-plane"></i> Get Free Consultation
                        </button>
                    </form>
                </div>
            `;
            
            modal.style.display = 'block';
        }
    };

    // Close modals
    window.closeModal = function() {
        const modal = document.getElementById('previewModal');
        modal.style.display = 'none';
    };

    window.closeServiceModal = function() {
        const modal = document.getElementById('serviceModal');
        modal.style.display = 'none';
    };

    // Handle service inquiry form submission
    window.handleServiceInquiry = function(event, serviceName) {
        event.preventDefault();
        
        // Get form data
        const formData = {
            service: serviceName,
            name: event.target.querySelector('input[type="text"]').value,
            email: event.target.querySelector('input[type="email"]').value,
            phone: event.target.querySelector('input[type="tel"]').value,
            message: event.target.querySelector('textarea').value
        };
        
        // Show success message
        showNotification(`Thank you for your interest in our ${serviceName} services! We'll contact you within 24 hours.`, 'success');
        
        // Close modal and reset form
        closeServiceModal();
        event.target.reset();
    };

    // Random course selector
    window.showRandomCourse = function() {
        const courses = ['python', 'datascience', 'webdev', 'cybersecurity'];
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        showCoursePreview(randomCourse);
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const previewModal = document.getElementById('previewModal');
        const serviceModal = document.getElementById('serviceModal');
        
        if (event.target === previewModal) {
            closeModal();
        }
        if (event.target === serviceModal) {
            closeServiceModal();
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
    const animateElements = document.querySelectorAll('.course-card, .feature-card, .path-card, .service-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add some interactive features
    document.querySelectorAll('.course-card, .service-card').forEach(card => {
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
            closeServiceModal();
        }
    });

    // Simple form handling for contact form
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
        this.reset();
    });

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        
        // Add styles for notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;
        
        notification.querySelector('button').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(notification);
        
        // Add CSS for notification animation
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Make notification function globally available
    window.showNotification = showNotification;
});
