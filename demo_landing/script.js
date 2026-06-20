// Simple scroll to menu function
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add simple interaction for order buttons
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.btn-order, .cta-nav');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple visual feedback
            const originalText = this.innerText;
            this.innerText = 'เพิ่มลงตะกร้าแล้ว! ☕';
            this.style.backgroundColor = 'var(--accent)';
            this.style.color = 'var(--text-dark)';
            
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 2000);
        });
    });
});
