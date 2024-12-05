









document.addEventListener("DOMContentLoaded", function() {
    // Load the header dynamically
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data; // Insert header HTML   
        })
        .catch(error => console.error('Error loading header:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle "Send Message" Button Click
    const sendMessageButton = document.getElementById('send-message-button');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default form submission behavior
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'block'; // Show "Message Sent!" message
                setTimeout(() => {
                    successMessage.style.display = 'none'; // Hide after 3 seconds
                }, 3000);
            }
        });
    }
});