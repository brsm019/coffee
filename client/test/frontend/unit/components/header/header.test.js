import { getBasket } from "./../../../../../src/utils/basketTotal";

describe("getBasket function", () => {
  it("should return 0 if basket is empty", () => {
    const basket = [];
    expect(getBasket(basket)).toEqual(0);
  });

  it("should correctly calculate the total of items in the basket", () => {
    const basket = [
      {
        id: "1",
        title: "BOOKKISA",
        price: "16.00",
      },
      { id: "2", title: "LA FLORESTA", price: "15.50" },
      {
        id: "3",
        title: "EL DASTO",
        price: "14.00",
      },
    ];
    const expectedTotal = 16.0 + 15.5 + 14.0;
    expect(getBasket(basket)).toEqual(expectedTotal);
  });

  it("should correctly handle null and undefined values in basket", () => {
    const basket1 = null;
    const basket2 = undefined;
    expect(getBasket(basket1)).toEqual(0);
    expect(getBasket(basket2)).toEqual(0);
  });
});
