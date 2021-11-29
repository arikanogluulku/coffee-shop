import basketTypes from '../actionTypes/basketTypes';

const initialState = {
  basket: [],
  totalPrice: 0,
};
export default function basketReducer(state = initialState, { type, payload }) {
  const product = payload;
  switch (type) {
    case basketTypes.ADD_TO_BASKET:
      const exist = state.basket.find((p) => p.productID === product.productID);
      if (exist) {
        return {
          ...state,
          basket: state.basket.map((p) => (p.productID === exist.productID ? { ...p, qty: p.qty + 1 } : p)),
          totalPrice: state.totalPrice + exist.price,
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...product, qty: 1 }],
        totalPrice: state.totalPrice + product.price,
      };

    case basketTypes.REMOVE_FROM_BASKET:
      const exist1 = state.basket.find((p) => p.productID === product.productID);
      if (exist1.qty === 1) {
        return {
          ...state,
          basket: state.basket.filter((p) => p.productID !== exist1.productID),
          totalPrice: state.totalPrice - product.price,
        };
      }
      return {
        ...state,
        basket: state.basket.map((p) => (p.productID === exist1.productID ? { ...p, qty: p.qty - 1 } : p)),
        totalPrice: state.totalPrice - product.price,
      };
    case basketTypes.REMOVE_PRODUCT:
      return {
        ...state,
        basket: state.basket.filter((p) => p.productID !== product.productID),
        totalPrice: state.totalPrice - (product.price * product.qty),
      };
    case basketTypes.DELETE_BASKET:
      return state = initialState;

    default:
      return state;
  }
}
