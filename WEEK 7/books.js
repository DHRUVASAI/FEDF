import { catalog } from './data.js';
import { insertToCart, cartData } from './cart.js';
import { refreshCart } from './ui.js';

export function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  catalog.forEach((book, idx) => {
    const row = document.createElement("div");
    row.classList.add("book-row");

    row.innerHTML = `
      <div>
        <b>${book.title}</b><br>
        <small>${book.author}</small><br>
        <span>₹${book.price}</span>
      </div>
      <div>
        ${book.stock 
          ? `<button class="btn" data-id="${idx}">Add</button>` 
          : `<span style="color:red;">Unavailable</span>`}
      </div>
    `;

    container.appendChild(row);
  });

  // event listeners
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.getAttribute("data-id");
      insertToCart(catalog[id]);
      refreshCart(cartData);
    });
  });
}
