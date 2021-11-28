import categoryTypes from '../actionTypes/categoryTypes';

const initialState = {
  categories: [],
  activeCategory: null,
  loading: false,
  error: null,
};
export default function categoryReducer(state = initialState, { payload, type }) {
  switch (type) {
    case categoryTypes.FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    case categoryTypes.FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
