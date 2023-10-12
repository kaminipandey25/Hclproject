// Function to add the product to the cart
function addToCart() {
    // Check if the user is logged in
    const isLoggedIn = confirm("Please log in to continue. Do you want to log in?");

    if (isLoggedIn) {
        // Prompt the user to allow their current location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Create a new cart item element
                const cartItem = document.createElement("li");
                cartItem.className = "cart-item";
                cartItem.textContent = `Earring - 150 INR - Location: ${latitude}, ${longitude}`;

                // Add the cart item to the cart
                const cartItems = document.getElementById("cart-items");
                cartItems.appendChild(cartItem);
            });
        } else {
            alert("Geolocation is not supported in your browser.");
        }
    } else {
        alert("You canceled the login. Product was not added to the cart.");
    }
}
