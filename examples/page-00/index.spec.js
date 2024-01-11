import Page from "./index.js";

describe("Page", () => {
  let page;

  beforeEach(() => {
    page = new Page();
    document.body.append(page.element);
  });

  afterEach(() => {
    page = null;
    document.body.innerHTML = "";
  });

  it("should be rendered correctly", () => {
    expect(page.element).toBeInTheDocument();
    expect(page.element).toBeVisible();
  });

  it("should add product to cart", () => {
    const { addToCartBtn } = page.components.card.subElements;

    addToCartBtn.dispatchEvent(new CustomEvent("pointerdown"));

    const counterValue = page.components.store.subElements.counter.innerHTML;

    expect(counterValue).toBe("1");
  });

  it("should remove product from cart", () => {
    const { addToCartBtn } = page.components.card.subElements;

    addToCartBtn.dispatchEvent(new CustomEvent("pointerdown"));
    addToCartBtn.dispatchEvent(new CustomEvent("pointerdown"));

    const counterValue = page.components.store.subElements.counter.innerHTML;

    expect(counterValue).toBe("0");
  });
});
