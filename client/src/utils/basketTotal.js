const getBasket = (basket) => {
  if (!basket) {
    return 0;
  }
  return basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);
};

export { getBasket };
