// Add this JavaScript code at the end of your HTML document or within a <script> tag

// Function to handle adding items to the shopping cart
function addToCart(title, price) {
  var cartItems = document.getElementById('cart-items');
  var cartTotal = document.getElementById('cart-total');

  // Create a new list item for the cart
  var listItem = document.createElement('li');
  listItem.textContent = title + ' - $' + price;
  cartItems.appendChild(listItem);

  // Calculate and update the cart total
  var total = parseFloat(cartTotal.textContent.replace('$', ''));
  total += parseFloat(price);
  cartTotal.textContent = '$' + total.toFixed(2);
}

// Add event listeners to the "Add to Cart" buttons
var addToCartBtns = document.getElementsByClassName('add-to-cart-btn');
for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', function() {
    var title = this.getAttribute('data-title');
    var price = this.getAttribute('data-price');
    addToCart(title, price);
  });
}

// Function to handle the checkout process
function checkout() {
  // Add your custom code here to process the checkout, e.g., redirecting to a payment gateway
  alert('Checkout functionality not implemented yet!');
}

// Add event listener to the "Checkout" button
var checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', checkout);
