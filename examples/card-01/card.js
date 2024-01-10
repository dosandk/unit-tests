export default class Card {
  data = {
    image: "",
    rating: 0,
    price: 0,
    title: "",
    category: "",
  };

  constructor() {
    this.render();
    this.loadData();
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

  async loadData() {
    const url =
      "https://online-store.bootcamp.place/api/products?_page=1&_limit=1";

    try {
      const response = await fetch(url);
      const [data] = await response.json();

      // NOTE: just only for demo
      data.image = data.images[0];
      delete data.images;

      this.update(data);
    } catch (error) {
      console.error(`Error: something went wrong ${error.message}`);
    }
  }

  update(data = {}) {
    this.data = { ...this.data, ...data };

    const subElements = this.element.querySelectorAll("[data-element]");

    for (const element of subElements) {
      const name = element.dataset.element;

      // NOTE: just only for demo
      if (name === "image") {
        element.style.backgroundImage = `url(${this.data[name]})`;
      } else {
        element.innerHTML = data[name];
      }
    }
  }
}
