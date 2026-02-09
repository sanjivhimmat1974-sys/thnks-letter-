function revealSurprise() {
    const giftBox = document.getElementById('gift-box');
    const surpriseMessage = document.getElementById('surprise-message');
    const audio = document.getElementById('background-music');

    // Random surprise messages - cute and short one-line
    const surprises = [
        "You're the sweetest! 🌟",
        "Thanks for the magic! 💖",
        "Hugs and smiles! 🤗",
        "You're awesome! 😊"
    ];
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    surpriseMessage.innerHTML = `
        <h2>🎁 A Special Virtual Gift for You!</h2>
        <p>${randomSurprise}</p>
        <p>With warm regards,<br>The College Fest Team: Sadab, Madni, Faiyaz, Jansi, Diya, and Mansi</p>
        <p><a href="feedback.html" class="feedback-link">Share Your Feedback</a></p>
    `;

    // Show the gift box
    giftBox.style.display = 'block';

    // Play music
    audio.play().catch(function(error) {
        console.log('Music play failed:', error);
    });

    // Create enhanced sparkles for magical effect
    createSparkles();

    // Animate the gift box opening after a delay
    setTimeout(() => {
        giftBox.classList.add('open');
        // Show the surprise message after the box opens
        setTimeout(() => {
            surpriseMessage.style.display = 'block';
            // Create more sparkles and magical gifts for extra surprise
            createMagicalGifts();

            // Random additional effect
            const effects = ['extraSparkles', 'floatingHearts', 'colorBurst'];
            const randomEffect = effects[Math.floor(Math.random() * effects.length)];
            if (randomEffect === 'extraSparkles') {
                setTimeout(() => createSparkles(), 1000);
            } else if (randomEffect === 'floatingHearts') {
                createFloatingHearts();
            } else if (randomEffect === 'colorBurst') {
                createColorBurst();
            }
        }, 1000);
    }, 500);
}

function createSparkles() {
    const sparkleCount = 15;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}

// Handle feedback form submission
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const visitorName = document.getElementById('visitor-name').value;
            const visitorEmail = document.getElementById('visitor-email').value;
            const rating = document.getElementById('rating').value;
            const feedbackMessage = document.getElementById('feedback-message').value;
            // For now, just log to console (in a real app, send to server)
            console.log('Feedback from:', visitorName, 'Email:', visitorEmail, 'Rating:', rating, 'Message:', feedbackMessage);
            alert('Thank you for your feedback, ' + visitorName + '! 🎉');
            // Reset form
            feedbackForm.reset();
        });
    }
});

// Additional surprise functions
function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        heart.style.fontSize = '2em';
        heart.style.animation = `floatUpHeart ${2 + Math.random() * 2}s ease-out forwards`;
        heart.style.zIndex = '20';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

function createColorBurst() {
    const colors = ['#ff6b6b', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'];
    for (let i = 0; i < 20; i++) {
        const burst = document.createElement('div');
        burst.style.position = 'absolute';
        burst.style.width = '10px';
        burst.style.height = '10px';
        burst.style.background = colors[Math.floor(Math.random() * colors.length)];
        burst.style.borderRadius = '50%';
        burst.style.left = Math.random() * 100 + '%';
        burst.style.top = Math.random() * 100 + '%';
        burst.style.animation = `colorBurst ${1 + Math.random()}s ease-out forwards`;
        document.body.appendChild(burst);
        setTimeout(() => {
            burst.remove();
        }, 2000);
    }
}

// Keyframe for heart animation
const style = document.createElement('style');
style.textContent = `
@keyframes floatUpHeart {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
}
@keyframes colorBurst {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
    100% { transform: scale(0) rotate(360deg); opacity: 0; }
}
`;
document.head.appendChild(style);

// Autoplay music on first user interaction
document.addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Music play failed:', error);
    });
}, { once: true });
