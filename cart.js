function renderCartItems() {
    cartContainer.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
        
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            cartItemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-info">
                    <h2>${item.name}</h2>
                    <h2>${item.price} Ft</h2>
                    <select class="quantity" data-id="${item.id}">
                        ${Array.from({ length: 9 }, (_, index) => `
                            <option value="${index + 1}" ${item.quantity === index + 1 ? 'selected' : ''}>${index + 1}</option>
                        `).join('')}
                    </select>
                </div>
            `;

            cartContainer.appendChild(cartItemDiv);
            total += item.price * item.quantity;
        });
    }

    totalPriceElement.textContent = `${total} Ft`;
}
