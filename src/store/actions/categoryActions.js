import categoryTypes from '../actionTypes/categoryTypes';

export const fetchCategoriesPending = () => ({
  type: categoryTypes.FETCH_CATEGORIES_PENDING,
});

export const fetchCategoriesSuccess = (data) => ({
  type: categoryTypes.FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export const fetchCategoriesFail = (message) => ({
  type: categoryTypes.FETCH_CATEGORIES_FAIL,
  payload: message,
});
