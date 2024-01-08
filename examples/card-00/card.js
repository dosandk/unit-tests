export default class Card {
  constructor(data = {}) {
    this.data = data;

    this.render();
  }

  get template() {
    return `
      <div class="os-product-card">
        <div class="os-product-img" style="background-image: url(${this.data.image});"></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span>${this.data.rating}</span>
              <i class="bi bi-star"></i>
            </div>

            <div class="os-product-price">${this.data.price}</div>
          </div>

          <h5 class="os-product-title">${this.data.title}</h5>
          <p class="os-product-description">${this.data.category}</p>
        </div>

        <footer class="os-product-footer">
          <button class="os-btn-primary" type="button">Add to cart</button>
        </footer>
      </div>
    `;
  }
  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }
}
