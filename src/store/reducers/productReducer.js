/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
import productTypes from '../actionTypes/productTypes';

const initialState = {
  products: [],
  product: {},
  filteredProducts: [],
  searchResult: [],
  loading: false,
  error: null,
};
export default function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case productTypes.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        filteredProducts: payload,
        loading: false,
      };
    case productTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case productTypes.FETCH_FILTERED_PRODUCTS:
      let filteredProductList;
      payload === 'all' ? filteredProductList = state.filteredProducts
        : filteredProductList = state.filteredProducts
          .filter((product) => product.categoryID === payload);
      return {
        ...state,
        products: filteredProductList,
      };
    case productTypes.SEARCH_PRODUCTS:
      let searchProductList;
      searchProductList = state.filteredProducts
        .filter((product) => ((product.name.toUpperCase()).includes(payload.toUpperCase())));
      return {
        ...state,
        searchResult: searchProductList,
      };
    case productTypes.SEARCH_RESULT_CLEAR:
      return {
        ...state,
        searchResult: null,
      };
    case productTypes.GET_SINGLE_PRODUCT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case productTypes.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case productTypes.GET_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
