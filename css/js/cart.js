/**
 * Studio Joons - Zero-Dependency E-Commerce Engine
 * Synchronizes with browser localStorage and triggers secure Mollie checkouts.
 */
class CartEngine {
  constructor() {
    this.storageKey = 'studio_joons_cart';
    this.cart = this.loadCart();
    this.drawerEl = document.getElementById('cart-drawer');
    this.backdropEl = document.getElementById('cart-drawer-backdrop');
    this.itemsListEl = document.getElementById('cart-items-list');
    this.subtotalEl = document.getElementById('cart-subtotal-amount');
    this.navCountEl = document.getElementById('cart-nav-count');
    this.headerCountEl = document.getElementById('cart-header-count');
    this.checkoutBtn = document.getElementById('cart-checkout-btn');

    this.initEventListeners();
    this.render();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Storage unavailable:', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Failed to save cart:', e);
    }
    this.render();
  }

  initEventListeners() {
    // Delegate clicks for Add to Bag triggers
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.add-to-cart-btn');
      if (btn) {
        const product = {
          id: btn.dataset.id,
          name: btn.dataset.name,
          price: parseFloat(btn.dataset.price),
          image: btn.dataset.image,
        };
        this.addItem(product);
        this.toggleDrawer(true);
      }
    });

    // Close drawer on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawerEl && this.drawerEl.classList.contains('is-open')) {
        this.toggleDrawer(false);
      }
    });
  }

  addItem(product) {
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  updateQuantity(id, delta) {
    const item = this.cart.find((i) => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(id);
      return;
    }
    this.saveCart();
  }

  removeItem(id) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  toggleDrawer(open) {
    if (!this.drawerEl || !this.backdropEl) return;
    if (open) {
      this.backdropEl.classList.remove('is-hidden');
      this.drawerEl.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      this.drawerEl.classList.remove('is-open');
      setTimeout(() => {
        this.backdropEl.classList.add('is-hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  render() {
    const totalCount = this.getTotalCount();
    const subtotal = this.getSubtotal();

    if (this.navCountEl) this.navCountEl.textContent = totalCount;
    if (this.headerCountEl) this.headerCountEl.textContent = `(${totalCount})`;
    if (this.subtotalEl) this.subtotalEl.innerHTML = `&euro;${subtotal.toFixed(2)}`;

    if (!this.itemsListEl) return;

    if (this.cart.length === 0) {
      this.itemsListEl.innerHTML = `
        <div class="cart-empty-message">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Your studio bag is currently empty.</p>
        </div>
      `;
      if (this.checkoutBtn) this.checkoutBtn.disabled = true;
      return;
    }

    if (this.checkoutBtn) this.checkoutBtn.disabled = false;

    this.itemsListEl.innerHTML = this.cart
      .map(
        (item) => `
        <article class="cart-line-item">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-top">
              <h3 class="cart-item-title">${item.name}</h3>
              <span class="cart-item-price">&euro;${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div class="cart-item-stepper-row">
              <div class="quantity-stepper">
                <button type="button" aria-label="Decrease quantity" onclick="cartEngine.updateQuantity('${item.id}', -1)">&minus;</button>
                <span>${item.quantity}</span>
                <button type="button" aria-label="Increase quantity" onclick="cartEngine.updateQuantity('${item.id}', 1)">&plus;</button>
              </div>
              <button type="button" class="cart-item-remove-btn" onclick="cartEngine.removeItem('${item.id}')">Remove</button>
            </div>
          </div>
        </article>
      `
      )
      .join('');
  }

  async handleCheckout(event) {
    event.preventDefault();
    if (this.cart.length === 0) return;

    const emailInput = document.getElementById('customer-email');
    const email = emailInput ? emailInput.value.trim() : '';
    if (!email) {
      alert('Please enter your email for order dispatch.');
      return;
    }

    const btnText = this.checkoutBtn.querySelector('.checkout-btn-text');
    const spinner = this.checkoutBtn.querySelector('.checkout-spinner');
    this.checkoutBtn.disabled = true;
    if (btnText) btnText.textContent = 'Redirecting to Mollie...';
    if (spinner) spinner.classList.remove('is-hidden');

    try {
      const response = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerEmail: email,
          items: this.cart.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize payment.');
      }

      // Redirect client to Mollie Hosted Payment Page
      window.location.href = data.checkoutUrl;
    } catch (err) {
      alert(`Checkout Error: ${err.message}`);
      this.checkoutBtn.disabled = false;
      if (btnText) btnText.textContent = 'Checkout with Mollie';
      if (spinner) spinner.classList.add('is-hidden');
    }
  }
}

// Global instance
const cartEngine = new CartEngine();