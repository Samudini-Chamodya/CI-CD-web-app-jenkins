// Initialize timestamp on page load
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
});

function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });
    
    document.getElementById('timestamp').textContent = timestamp;
    
    // Add a nice animation effect
    const timestampElement = document.getElementById('timestamp');
    timestampElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        timestampElement.style.transform = 'scale(1)';
    }, 200);
}

// Add some interactivity
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        setTimeout(() => {
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }, 200);
    });
});