export default class Store {
  subElements = {};
  itemsCount = 0;

  constructor() {
    this.render();

    this.subElements.counter = this.element.querySelector(
      "[data-element='counter']",
    );

    this.initListeners();
  }

  get template() {
    return `<div class="app-store">
      Total items: <span data-element="counter">${this.itemsCount}</span>
    </div>`;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  initListeners() {
    document.addEventListener("add-to-cart", (event) => {
      console.log("Add to store", event);

      this.itemsCount += 1;

      this.update();
    });
    document.addEventListener("remove-from-cart", (event) => {
      console.log("Remove from store", event);

      this.itemsCount -= 1;

      this.update();
    });
  }

  update() {
    this.subElements.counter.innerHTML = this.itemsCount;
  }
}
