import favoriteTypes from '../actionTypes/favoriteTypes';

const initialState = {
  favorites: [],
};

export default function favoriteReducer(state = initialState, { type, payload }) {
  switch (type) {
    case favoriteTypes.ADD_FAVORITE:
      if (JSON.parse(localStorage.getItem('favorites') == null)) {
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      }
      return {
        ...state,
        favorites: [...JSON.parse(localStorage.getItem('favorites')), payload],
      };
    case favoriteTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.productID !== payload),
      };
    case favoriteTypes.GET_FAVORITES_STORAGE:
      return {
        ...state,
        favorites: payload,
      };
    case favoriteTypes.UPDATE_FAVORITES_STORAGE:
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      return state;
    default:
      return state;
  }
}
