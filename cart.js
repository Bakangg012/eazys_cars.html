
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}


function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsList = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    if (cartItemsList && totalPriceElement) {
        cartItemsList.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} x ${item.quantity} 
                <button onclick="removeFromCart(${index})">Remove</button>`;
            cartItemsList.appendChild(li);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = "Total: $" + totalPrice;
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}


if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
