// Shroom External - Premium Roblox External Cheat
// Smooth animations and interactive features

document.addEventListener('DOMContentLoaded', function() {
            // Initialize all animations and interactions
        initAnimations();
        initScrollEffects();
        initNavigation();
        initVideoHoverAutoplay();
        initDownloadButtons();
        initDownloadPanel();
        initStatusIndicator();
        initHumanVerification();
        initAIAssistant();
});

// Smooth scrolling for navigation links
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize scroll-triggered animations
function initScrollEffects() {
    // Navbar background effect on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            element.style.transform = `translateY(${rate * speed}px) rotate(${rate * 0.1}deg)`;
        });
    });
}

// Initialize entrance animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and video boxes
    const animatedElements = document.querySelectorAll('.feature-card, .video-box, .download-option');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Hero section entrance animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }, 300);
    }
}

        // Initialize video hover autoplay functionality
        function initVideoHoverAutoplay() {
            const videoBoxes = document.querySelectorAll('.video-box');
            
            videoBoxes.forEach(box => {
                const iframe = box.querySelector('iframe');
                if (iframe) {
                    let isPlaying = false;
                    let originalSrc = iframe.src;
                    
                    // Add loading animation
                    const loadingDiv = document.createElement('div');
                    loadingDiv.className = 'video-loading';
                    loadingDiv.innerHTML = `
                        <div class="loading-spinner"></div>
                        <p>Loading video...</p>
                    `;
                    
                    iframe.parentNode.appendChild(loadingDiv);
                    
                    // Remove loading when iframe loads
                    iframe.addEventListener('load', function() {
                        if (loadingDiv.parentNode) {
                            loadingDiv.parentNode.removeChild(loadingDiv);
                        }
                    });
                    
                    // Hover to play
                    box.addEventListener('mouseenter', function() {
                        if (!isPlaying) {
                            const videoId = iframe.getAttribute('data-video-id');
                            iframe.src = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&autoplay=1&loop=1&playlist=${videoId}`;
                            isPlaying = true;
                        }
                    });
                    
                    // Mouse leave to pause
                    box.addEventListener('mouseleave', function() {
                        if (isPlaying) {
                            iframe.src = originalSrc;
                            isPlaying = false;
                        }
                    });
                }
            });
        }

// Initialize download button interactions
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click ripple effect
            createRippleEffect(e, this);
            
            // Add download animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Create ripple effect on button click
function createRippleEffect(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .video-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        z-index: 10;
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(255, 107, 53, 0.3);
        border-top: 3px solid #ff6b35;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(rippleStyle);

// Add hover effects for feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for hero title
function initTypingEffect() {
    const titleMain = document.querySelector('.title-main');
    if (!titleMain) return;
    
    const text = titleMain.textContent;
    titleMain.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleMain.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Initialize typing effect
setTimeout(initTypingEffect, 500);

// Add particle background effect
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 107, 53, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${Math.random() * 10 + 10}s linear infinite;
            pointer-events: none;
        `;
        
        hero.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;

document.head.appendChild(particleStyle);

// Initialize particles
setTimeout(createParticles, 1000);

// Add smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.classList.add('revealed');
        }
    });
}

// Add reveal animation CSS
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: none !important;
    }
`;

document.head.appendChild(revealStyle);

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on page load
setTimeout(revealOnScroll, 100);

// Add hover effects for social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add download button click tracking
function trackDownload(buttonType) {
    console.log(`Download button clicked: ${buttonType}`);
    // Here you can add analytics tracking
    // Example: gtag('event', 'download', { 'event_category': 'cheat', 'event_label': buttonType });
}

// Add click handlers for download buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-option .btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const optionType = this.closest('.download-option').querySelector('h3').textContent;
            trackDownload(optionType);
            
            // Show download confirmation
            showDownloadConfirmation(optionType);
        });
    });
});

// Show download confirmation
function showDownloadConfirmation(type) {
    const confirmation = document.createElement('div');
    confirmation.className = 'download-confirmation';
    confirmation.innerHTML = `
        <div class="confirmation-content">
            <h3>Download Started!</h3>
            <p>Your ${type} download is beginning...</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (confirmation.parentNode) {
            confirmation.parentNode.removeChild(confirmation);
        }
    }, 5000);
}

// Add confirmation styling
const confirmationStyle = document.createElement('style');
confirmationStyle.textContent = `
    .download-confirmation {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-orange);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: var(--shadow-orange);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .confirmation-content h3 {
        margin-bottom: 0.5rem;
    }
    
    .confirmation-content button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 0.5rem;
    }
    
    .confirmation-content button:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

 document.head.appendChild(confirmationStyle);
 
 // Initialize download panel functionality
 function initDownloadPanel() {
     const downloadTrigger = document.querySelector('.download-trigger');
     const downloadPanel = document.getElementById('downloadPanel');
     const closePanel = document.getElementById('closePanel');
     const updatesList = document.getElementById('updatesList');
     const downloadBtn = document.getElementById('downloadBtn');
     
     // Show panel when download button is clicked
     downloadTrigger.addEventListener('click', function() {
         downloadPanel.classList.add('active');
         document.body.style.overflow = 'hidden';
         loadLatestUpdates();
     });
     
     // Close panel when close button is clicked
     closePanel.addEventListener('click', function() {
         downloadPanel.classList.remove('active');
         document.body.style.overflow = 'auto';
     });
     
     // Close panel when clicking outside
     downloadPanel.addEventListener('click', function(e) {
         if (e.target === downloadPanel) {
             downloadPanel.classList.remove('active');
             document.body.style.overflow = 'auto';
         }
     });
     
     // Close panel with Escape key
     document.addEventListener('keydown', function(e) {
         if (e.key === 'Escape' && downloadPanel.classList.contains('active')) {
             downloadPanel.classList.remove('active');
             document.body.style.overflow = 'auto';
         }
     });
     
     // Load latest updates
     function loadLatestUpdates() {
         const updates = [
             'Config System',
             'Better Aimbot', 
             'New Menu'
         ];
         
         updatesList.innerHTML = '';
         updates.forEach(update => {
             const updateItem = document.createElement('div');
             updateItem.className = 'update-item';
             updateItem.textContent = update;
             updatesList.appendChild(updateItem);
         });
     }
     
     // Handle download button click
     downloadBtn.addEventListener('click', function() {
         // Add download animation
         this.style.transform = 'scale(0.95)';
         setTimeout(() => {
             this.style.transform = 'scale(1)';
         }, 150);
         
         // Redirect to Shroom Uploads
         window.open('https://shroomuploads.online?share=cq2kscm4fd', '_blank');
         
         // Show download confirmation
         showDownloadConfirmation('Shroom External');
         
         // Close panel after a short delay
         setTimeout(() => {
             downloadPanel.classList.remove('active');
             document.body.style.overflow = 'auto';
         }, 1000);
     });
 }

// Initialize status indicator
function initStatusIndicator() {
    const statusText = document.getElementById('statusText');
    const statusDot = document.querySelector('.status-dot');
    
    async function fetchStatus() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Colxd/version/refs/heads/main/externalstatus');
            const status = await response.text().trim();
            
            if (status === 'Online' || status === 'online') {
                statusText.textContent = 'ONLINE';
                statusDot.style.background = '#00ff00';
                statusDot.style.boxShadow = '0 0 10px #00ff00';
            } else if (status === 'Coming Soon') {
                statusText.textContent = 'COMING SOON';
                statusDot.style.background = '#ff0000';
                statusDot.style.boxShadow = '0 0 10px #ff0000';
            } else if (status === 'Offline' || status === 'offline') {
                statusText.textContent = 'OFFLINE';
                statusDot.style.background = '#ff0000';
                statusDot.style.boxShadow = '0 0 10px #ff0000';
            } else {
                statusText.textContent = status.toUpperCase();
                statusDot.style.background = '#888888';
                statusDot.style.boxShadow = '0 0 10px #888888';
            }
        } catch (error) {
            console.error('Error fetching status:', error);
            statusText.textContent = 'ERROR';
            statusDot.style.background = '#ff0000';
            statusDot.style.boxShadow = '0 0 10px #ff0000';
        }
    }
    
    // Fetch status immediately
    fetchStatus();
    
    // Update status every 30 seconds
    setInterval(fetchStatus, 30000);
}

// Initialize Human Verification (Disabled for now)
function initHumanVerification() {
    // Hide loading screen immediately
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
    
    // Hide verification modal immediately
    const verificationModal = document.getElementById('verificationModal');
    if (verificationModal) {
        verificationModal.style.display = 'none';
    }
    
    // Ensure body overflow is auto for immediate access
    document.body.style.overflow = 'auto';
}

// Initialize AI Assistant
function initAIAssistant() {
    const aiAssistant = document.getElementById('aiAssistant');
    const assistantToggle = document.getElementById('assistantToggle');
    const minimizeBtn = document.getElementById('minimizeBtn');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    
    // Toggle chat open/closed
    assistantToggle.addEventListener('click', function() {
        aiAssistant.classList.add('chat-open');
        chatInput.focus();
    });
    
    // Minimize chat
    minimizeBtn.addEventListener('click', function() {
        aiAssistant.classList.remove('chat-open');
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Generate AI response
        setTimeout(() => {
            const response = generateAIResponse(message);
            addMessage(response, 'assistant');
        }, 500);
    }
    
    // Send button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add message to chat
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (type === 'assistant') {
            messageContent.innerHTML = content;
        } else {
            messageContent.textContent = content;
        }
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate AI responses
    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Download help
        if (lowerMessage.includes('download') || lowerMessage.includes('how to download')) {
            return `
                <p><strong>📥 Download Instructions:</strong></p>
                <ol>
                    <li>Click the "Download" button in the hero section</li>
                    <li>Complete the verification process</li>
                    <li>Click "Download Shroom External" in the panel</li>
                    <li>Extract the ZIP file to your desired folder</li>
                    <li>Run the executable as administrator</li>
                </ol>
                <p><em>Need more help? Join our Discord community!</em></p>
            `;
        }
        
        // Community help
        if (lowerMessage.includes('community') || lowerMessage.includes('discord') || lowerMessage.includes('join')) {
            return `
                <p><strong>🔗 Join Our Community:</strong></p>
                <ul>
                    <li><strong>Discord:</strong> <a href="https://discord.gg/pCV7SnRB9U" target="_blank" style="color: #7289da;">discord.gg/pCV7SnRB9U</a></li>
                    <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@getshrooms" target="_blank" style="color: #ff0000;">@getshrooms</a></li>
                </ul>
                <p><em>Get support, updates, and connect with other users!</em></em></p>
            `;
        }
        
        // Features help
        if (lowerMessage.includes('features') || lowerMessage.includes('what can it do')) {
            return `
                <p><strong>✨ Shroom External Features:</strong></p>
                <ul>
                    <li>🎯 <strong>Aimbot</strong> - Advanced aim assistance</li>
                    <li>👁️ <strong>ESP/Wallhacks</strong> - See through walls</li>
                    <li>🎯 <strong>Trigger Bot</strong> - Auto-shooting</li>
                    <li>🛡️ <strong>Undetected</strong> - Advanced anti-detection</li>
                    <li>🔄 <strong>Auto Updates</strong> - Always latest version</li>
                </li>
                </ul>
            `;
        }
        
        // General help
        if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
            return `
                <p><strong>❓ How can I help you?</strong></p>
                <p>I can assist with:</p>
                <ul>
                    <li>📥 Download instructions</li>
                    <li>🔗 Community access</li>
                    <li>✨ Feature information</li>
                    <li>❓ General questions</li>
                </ul>
                <p><em>Just ask me anything!</em></p>
            `;
        }
        
        // Default response
        return `
            <p>I'm not sure about that. Try asking me about:</p>
            <ul>
                <li>📥 How to download</li>
                <li>🔗 How to join the community</li>
                <li>✨ What features are available</li>
                <li>❓ General help</li>
            </ul>
        `;
    }
}
