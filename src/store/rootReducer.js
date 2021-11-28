import { combineReducers } from 'redux';
import basketReducer from './reducers/basketReducer';
import categoryReducer from './reducers/categoryReducer';
import favoriteReducer from './reducers/favoriteReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  favorites: favoriteReducer,
  basket: basketReducer,

});

export default rootReducer;
