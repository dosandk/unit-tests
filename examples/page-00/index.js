import Card from "./components/card.js";
import Store from "./components/store.js";

const product = {
  id: "1",
  image: "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg",
  title: "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  rating: 2.89,
  price: 15999,
  category: "laptops",
  brand: "acer",
};

export default class Page {
  components = {};

  constructor() {
    this.components = {
      store: new Store(),
      card: new Card(product),
    };
    this.render();
    this.renderComponents();
  }

  get template() {
    return `
      <div>
        <h1>Page</h1>
    
        <div data-element="store"></div>
        <div data-element="card"></div>
      </div>
    `;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  renderComponents() {
    const subElements = this.element.querySelectorAll("[data-element]");

    for (const element of subElements) {
      const name = element.dataset.element;

      element.append(this.components[name].element);
    }
  }
}
