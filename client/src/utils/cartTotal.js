let cartTotal = (basket) =>
  basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);

export { cartTotal };
