document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format pesan email
    const emailBody = `Halo Agung Cahyono!\n\nDari: ${name} (${email})\n\n${message}`;
    
    // Encode pesan untuk URL
    const encodedBody = encodeURIComponent(emailBody);
    
    // Buat URL mailto
    const mailtoURL = `mailto:alex.chen@example.com?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
    
    // Buka email client
    window.location.href = mailtoURL;
    
    // Reset form
    this.reset();
});