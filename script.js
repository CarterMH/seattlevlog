// Add some interactive effects when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const mainText = document.querySelector('.main-text');
    
    // Add a fade-in effect when the page loads
    mainText.style.opacity = '0';
    mainText.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        mainText.style.transition = 'all 1.5s ease-out';
        mainText.style.opacity = '1';
        mainText.style.transform = 'translateY(0)';
    }, 100);
    
    // Add click effect for fun interaction
    mainText.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Calculate and display countdown (optional enhancement)
    function updateCountdown() {
        const targetDate = new Date('2025-10-21T00:00:00');
        const now = new Date();
        const timeDifference = targetDate - now;
        
        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            // You could add a subtitle with countdown if desired
            // For now, we'll keep it simple as requested
        }
    }
    
    // Update countdown every day
    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
});

// Add some subtle particle effects for visual interest
function createParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${3 + Math.random() * 4}s linear infinite;
        `;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 7000);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
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
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles periodically
setInterval(createParticles, 3000);