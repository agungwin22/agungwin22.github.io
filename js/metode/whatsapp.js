document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format pesan WhatsApp
    const whatsappMessage = `Halo Alex Chen!\n\nSaya ${name}\nEmail: ${email}\nNomor WA: ${phone}\n\nSubjek: ${subject}\n\nPesan:\n${message}`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    // Buka WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
});