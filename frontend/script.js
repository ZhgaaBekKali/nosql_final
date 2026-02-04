const API_URL = "http://localhost:3000/api";

async function loadProducts() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();

    const container = document.getElementById("products");
    container.innerHTML = "";

    data.forEach(p => {
        container.innerHTML += `
      <div class="card">
        <strong>${p.name || "Product"}</strong><br>
        Price: ${p.price || "-"}<br>
        Category: ${p.category || "-"}
      </div>
    `;
    });
}

async function loadOrders() {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();

    const container = document.getElementById("orders");
    container.innerHTML = "";

    data.forEach(o => {
        container.innerHTML += `
      <div class="card">
        Order ID: ${o._id}<br>
        Status: ${o.status}<br>
        Total: ${o.total_price}
      </div>
    `;
    });
}

async function loadReviews() {
    const res = await fetch(`${API_URL}/reviews`);
    const data = await res.json();

    const container = document.getElementById("reviews");
    container.innerHTML = "";

    data.forEach(r => {
        container.innerHTML += `
      <div class="card">
        Rating: ${r.rating}<br>
        Comment: ${r.comment || ""}
      </div>
    `;
    });
}
