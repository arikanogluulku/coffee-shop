import basketTypes from '../actionTypes/basketTypes';

export const addToBasket = (product) => ({
  type: basketTypes.ADD_TO_BASKET,
  payload: product,
});
export const removeBasket = (product) => ({
  type: basketTypes.REMOVE_FROM_BASKET,
  payload: product,
});
export const removeProduct = (product) => ({
  type: basketTypes.REMOVE_PRODUCT,
  payload: product,
});
export const deleteBasket = () => ({
  type: basketTypes.DELETE_BASKET,
});
