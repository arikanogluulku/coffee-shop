import productTypes from '../actionTypes/productTypes';

export const fetchProductsPending = () => ({
  type: productTypes.FETCH_PRODUCTS_PENDING,
});
export const fetchProductsSuccess = (data) => ({
  type: productTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductsFail = (message) => ({
  type: productTypes.FETCH_PRODUCTS_FAIL,
  payload: message,
});
export const getSingleProductPending = () => ({
  type: productTypes.GET_SINGLE_PRODUCT_PENDING,
});
export const getSingleProductSuccess = (data) => ({
  type: productTypes.GET_SINGLE_PRODUCT_SUCCESS,
  payload: data,
});
export const getSingleProductFail = (message) => ({
  type: productTypes.GET_SINGLE_PRODUCT_FAIL,
  payload: message,
});

const filteredProducts = (id) => ({
  type: productTypes.FETCH_FILTERED_PRODUCTS,
  payload: id,
});

export const fetchFilteredProducts = (id) => async (dispatch) => {
  dispatch(filteredProducts(id));
};

export const searchProducts = (text) => async (dispatch) => (
  dispatch({
    type: productTypes.SEARCH_PRODUCTS,
    payload: text,
  }));
export const searchResultClear = () => ({
  type: productTypes.SEARCH_RESULT_CLEAR,
});
