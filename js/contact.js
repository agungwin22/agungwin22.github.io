document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous messages
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
    
    // Validation
    if (!name || !email || !subject || !message) {
        showError('Semua field wajib diisi!');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Format email tidak valid!');
        return;
    }
    
    if (message.length < 10) {
        showError('Pesan minimal 10 karakter!');
        return;
    }
    
    try {
        // Format message for WhatsApp
        const whatsappMessage = `Halo Agung Cahyono! 👋\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp API URL (replace with your number)
        const whatsappUrl = `https://wa.me/6282322316366?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        showSuccess('Pesan Anda sedang dibuka di WhatsApp! Harap tunggu...');
        
        // Reset form after successful submission
        setTimeout(() => {
            document.getElementById('contactForm').reset();
        }, 2000);
        
    } catch (error) {
        showError('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 5000);
}

// Auto-resize textarea
document.getElementById('message').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});