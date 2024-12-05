document.addEventListener("DOMContentLoaded", function() {
    // Load the header dynamically
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data; // Insert header HTML
            
            // Now attach the event listener to the hamburger icon after it's loaded
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const navbar = document.getElementById('navbar');

            if (hamburgerIcon && navbar) {
                // Add click event listener to hamburger icon
                hamburgerIcon.addEventListener('click', function() {
                    navbar.classList.toggle('active');
                });
            }
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

    // Handle "Add to Cart" Button Clicks
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gameSelect = document.getElementById('game-select');
    const gameImage = document.getElementById('game-image');
    const gameTitle = document.getElementById('game-title');
    const gameDescription = document.getElementById('game-description');

    // Create an object that contains game data
    const gameData = {
        mario: {
            title: 'Super Mario World',
            image: '/~Adam200393548/Fall%202024/Project/img/Products/SMW.png',
            description: 'Join Mario and Luigi in this classic side-scrolling platformer as they battle through levels to rescue Princess Toadstool.'
        },
        zelda: {
            title: 'The Legend of Zelda: A Link to the Past',
            image: '/~Adam200393548/Fall%202024/Project/img/Products/LTTP.jpg',
            description: 'Embark on an epic adventure to rescue Princess Zelda and defeat the evil wizard Agahnim in this iconic action RPG.'
        },
        dk: {
            title: 'Donkey Kong Country',
            image: '/~Adam200393548/Fall%202024/Project/img/Products/DKC.png',
            description: 'Guide Donkey Kong and Diddy Kong through jungle-themed levels in this action-packed platformer.'
        },
        starfox: {
            title: 'Star Fox',
            image: '/~Adam200393548/Fall%202024/Project/img/Products/SF.jpg',
            description: 'Join Fox McCloud and his team in this groundbreaking 3D space shooter, where you battle the evil Andross across the Lylat System.'
        }
    };

    // Event listener to change the image and description when a game is selected
    gameSelect.addEventListener('change', function() {
        const selectedGame = gameSelect.value;  // Get the selected game value (mario, zelda, etc.)

        // Update the content based on the selected game
        gameImage.src = gameData[selectedGame].image;
        gameTitle.textContent = gameData[selectedGame].title;
        gameDescription.textContent = gameData[selectedGame].description;
    });
});

