const basketControl = (basket, id) => {
  const itemSelected = basket.find((i) => i.productID === id);
  if (itemSelected) {
    return itemSelected.qty;
  }
  return 0;
};
export default basketControl;
