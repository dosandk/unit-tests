import Card from "./card.js";

const product = {
  id: "1",
  image: "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg",
  title: "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  rating: 2.89,
  price: 15999,
  category: "laptops",
  brand: "acer",
};

describe("Card component", () => {
  let card;

  beforeEach(() => {
    card = new Card(product);

    document.body.append(card.element);
  });

  afterEach(() => {
    card = null;
    document.body.innerHTML = "";
  });

  it("should be rendered correctly", () => {
    expect(card.element).toBeInTheDocument();
    expect(card.element).toBeVisible();
  });

  it("should render data correctly", () => {
    const ratingElement = card.element.querySelector(".os-product-rating span");
    const priceElement = card.element.querySelector(".os-product-price");
    const titleElement = card.element.querySelector(".os-product-title");
    const descriptionElement = card.element.querySelector(
      ".os-product-description",
    );

    expect(card.element).toBeInTheDocument();
    expect(titleElement.textContent).toBe(
      "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
    );
    expect(ratingElement.textContent).toBe("2.89");
    expect(priceElement.textContent).toBe("15999");
    expect(descriptionElement.textContent).toBe("laptops");
  });
});
