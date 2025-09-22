export let cartData = [];

// add item
export function insertToCart(item) {
  cartData.push(item);
}

// delete item by index
export function deleteFromCart(i) {
  cartData.splice(i, 1);
}

// total calculator
export function getCartTotal() {
  return cartData.reduce((sum, item) => sum + item.price, 0);
}
