// Odin Recipes - Interactive Features
class RecipeApp {
    constructor() {
        this.recipes = [];
        this.currentTheme = 'light';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadRecipes();
        this.setupAnimations();
        this.setupSearch();
        this.setupDarkMode();
        this.setupPrintMode();
        this.setupCookTimer();
    }

    setupEventListeners() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add loading animation to images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            });
        });

        // Add click effects to recipe cards
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    this.createRippleEffect(e, card);
                }
            });
        });
    }

    createRippleEffect(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.recipe-section, .recipe-card').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for header
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('recipe-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filterRecipes(query);
            });
        }
    }

    filterRecipes(query) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => {
            const title = card.querySelector('.recipe-title').textContent.toLowerCase();
            const description = card.querySelector('.recipe-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    setupDarkMode() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                this.toggleDarkMode();
            });
        }

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
    }

    toggleDarkMode() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        const toggle = document.getElementById('dark-mode-toggle');
        if (toggle) {
            toggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    setupPrintMode() {
        const printBtn = document.getElementById('print-recipe');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                this.printRecipe();
            });
        }
    }

    printRecipe() {
        const printWindow = window.open('', '_blank');
        const recipeContent = document.querySelector('.recipe-content').innerHTML;
        
        printWindow.document.write(`
            <html>
                <head>
                    <title>Recipe - Print</title>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; }
                        .recipe-section { margin: 20px 0; }
                        h1, h2 { color: #333; }
                        img { max-width: 100%; height: auto; }
                        @media print { body { margin: 20px; } }
                    </style>
                </head>
                <body>
                    ${recipeContent}
                </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
    }

    setupCookTimer() {
        const timerBtn = document.getElementById('start-timer');
        if (timerBtn) {
            timerBtn.addEventListener('click', () => {
                this.showTimerModal();
            });
        }
    }

    showTimerModal() {
        const modal = document.createElement('div');
        modal.className = 'timer-modal';
        modal.innerHTML = `
            <div class="timer-content">
                <h3>Set Cooking Timer</h3>
                <input type="number" id="timer-minutes" placeholder="Minutes" min="1" max="180">
                <button id="start-timer-btn">Start Timer</button>
                <button id="close-timer">Cancel</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('start-timer-btn').addEventListener('click', () => {
            const minutes = document.getElementById('timer-minutes').value;
            if (minutes > 0) {
                this.startTimer(parseInt(minutes));
                modal.remove();
            }
        });
        
        document.getElementById('close-timer').addEventListener('click', () => {
            modal.remove();
        });
    }

    startTimer(minutes) {
        const endTime = Date.now() + (minutes * 60 * 1000);
        
        const timerDisplay = document.createElement('div');
        timerDisplay.className = 'timer-display';
        timerDisplay.innerHTML = `
            <div class="timer-content">
                <h4>⏰ Cooking Timer</h4>
                <div id="timer-countdown"></div>
                <button id="stop-timer">Stop Timer</button>
            </div>
        `;
        
        document.body.appendChild(timerDisplay);
        
        const countdown = document.getElementById('timer-countdown');
        const interval = setInterval(() => {
            const remaining = endTime - Date.now();
            
            if (remaining <= 0) {
                clearInterval(interval);
                this.showNotification('Timer finished! Your food is ready! 🎉');
                timerDisplay.remove();
                return;
            }
            
            const mins = Math.floor(remaining / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            countdown.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
        
        document.getElementById('stop-timer').addEventListener('click', () => {
            clearInterval(interval);
            timerDisplay.remove();
        });
    }

    showNotification(message) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Odin Recipes', { body: message });
        } else {
            alert(message);
        }
    }

    loadRecipes() {
        // Simulate loading recipes from an API
        this.recipes = [
            { name: 'Lasagna', time: '90 min', difficulty: 'Medium' },
            { name: 'Chicken Curry', time: '45 min', difficulty: 'Easy' },
            { name: 'Chocolate Chip Cookies', time: '25 min', difficulty: 'Easy' }
        ];
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecipeApp();
    
    // Request notification permission
    if ('Notification' in window) {
        Notification.requestPermission();
    }
});

// Add CSS for new features
const additionalStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
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

    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }

    .timer-modal, .timer-display {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .timer-content {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .timer-content input {
        display: block;
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 2px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    .timer-content button {
        background: var(--gradient);
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .timer-content button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    #timer-countdown {
        font-size: 2rem;
        font-weight: bold;
        color: var(--primary-color);
        margin: 1rem 0;
    }

    [data-theme="dark"] {
        --dark-color: #ecf0f1;
        --light-color: #2c3e50;
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        color: #ecf0f1;
    }

    [data-theme="dark"] .recipe-section {
        background: #34495e;
        color: #ecf0f1;
    }

    [data-theme="dark"] .recipe-card {
        background: #34495e;
        color: #ecf0f1;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
