import { v4 as uuid } from 'uuid';
import favoriteTypes from '../actionTypes/favoriteTypes';

export const getFavoritesStorage = () => async (dispatch) => {
  dispatch({
    type: favoriteTypes.GET_FAVORITES_STORAGE,
    payload: JSON.parse(localStorage.getItem('favorites')),
  });
};

export const addFavorite = (product) => async (dispatch) => {
  dispatch({
    type: favoriteTypes.ADD_FAVORITE,
    payload: {
      id: uuid(),
      ...product,
    },
  });
};
const updateFavoritesStorage = () => ({
  type: favoriteTypes.UPDATE_FAVORITES_STORAGE,
});

export const removeFavorite = (id) => async (dispatch) => {
  await dispatch({
    type: favoriteTypes.REMOVE_FAVORITE,
    payload: id,
  });
  updateFavoritesStorage();
};
