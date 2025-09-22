import { getCartTotal, deleteFromCart, cartData } from './cart.js';

export function refreshCart(data) {
  const box = document.getElementById("cartBox");
  const totalBox = document.getElementById("grandTotal");
  box.innerHTML = "";

  data.forEach((item, idx) => {
    const line = document.createElement("div");
    line.classList.add("cart-line");
    line.innerHTML = `
      <span>${item.title} - ₹${item.price}</span>
      <button class="btn" style="background:#e53935;" data-id="${idx}">Remove</button>
    `;
    box.appendChild(line);
  });

  // remove buttons
  box.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.getAttribute("data-id");
      deleteFromCart(id);
      refreshCart(cartData);
    });
  });

  // update total
  totalBox.textContent = `Total: ₹${getCartTotal()}`;
}
