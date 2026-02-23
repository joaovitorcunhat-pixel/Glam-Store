const products = [
    {
        id: 1,
        name: "Kit Skincare Glow",
        price: 129.90,
        image: "https://via.placeholder.com/300"
    },
    {
        id: 2,
        name: "Sérum Vitamina C",
        price: 59.90,
        image: "https://via.placeholder.com/300"
    },
    {
        id: 3,
        name: "Base Matte",
        price: 49.90,
        image: "https://via.placeholder.com/300"
    },
    {
        id: 4,
        name: "Kit Maquiagem Premium",
        price: 199.90,
        image: "https://via.placeholder.com/300"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(product => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>R$ ${product.price.toFixed(2)}</p>
                <button class="btn" onclick="addToCart(${product.id})">Adicionar</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
    document.getElementById("cart-modal").style.display = "block";
    renderCart();
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    container.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        container.innerHTML += `<p>${item.name} - R$ ${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    totalEl.innerText = total.toFixed(2);
}

function checkout() {
    let message = "Pedido Glam Store:%0A";
    cart.forEach(item => {
        message += `${item.name} - R$ ${item.price.toFixed(2)}%0A`;
    });

    window.open(`https://wa.me/5511999999999?text=${message}`);
}

renderProducts();
updateCartCount();