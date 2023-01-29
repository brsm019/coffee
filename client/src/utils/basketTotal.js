const getBasket = (basket) => {
  return basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);
};

export { getBasket };
