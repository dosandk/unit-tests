export default class Card {
  data = {
    image: "",
    rating: 0,
    price: 0,
    title: "",
    category: "",
  };
  inStore = false;
  subElements = {};

  constructor(data = {}) {
    this.data = { ...this.data, ...data };
    this.render();

    this.subElements.addToCartBtn = this.element.querySelector(
      "[data-element='addToCartBtn']",
    );

    this.initListeners();
  }

  get template() {
    return `
      <div class="os-product-card">
        <div class="os-product-img" data-element="image" style="background-image: url(${this.data.image});"></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span data-element="rating">${this.data.rating}</span>
              <i class="bi bi-star"></i>
            </div>

            <div class="os-product-price" data-element="price">${this.data.price}</div>
          </div>

          <h5 class="os-product-title" data-element="title">${this.data.title}</h5>
          <p class="os-product-description" data-element="category">${this.data.category}</p>
        </div>

        <footer class="os-product-footer">
          <button class="os-btn-primary" data-element="addToCartBtn" type="button">Add to cart</button>
        </footer>
      </div>
    `;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  initListeners() {
    const { addToCartBtn } = this.subElements;

    addToCartBtn.addEventListener("pointerdown", () => {
      if (this.inStore) {
        this.dispatchEvent("remove-from-cart", this.data);
        this.removeActive();
      } else {
        this.dispatchEvent("add-to-cart", this.data);
        this.setActive();
      }
    });
  }

  setActive() {
    const { addToCartBtn } = this.subElements;

    addToCartBtn.innerHTML = "Remove from cart";
    addToCartBtn.classList.add("active");

    this.inStore = true;
  }

  removeActive() {
    const { addToCartBtn } = this.subElements;

    addToCartBtn.innerHTML = "Add to cart";
    addToCartBtn.classList.remove("active");

    this.inStore = false;
  }

  dispatchEvent(type = "", payload = {}) {
    this.element.dispatchEvent(
      new CustomEvent(type, {
        detail: payload,
        bubbles: true,
      }),
    );

    console.log(`Detail: ${type}`, payload);
  }
}
