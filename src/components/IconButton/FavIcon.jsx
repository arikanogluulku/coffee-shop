import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { addFavorite, removeFavorite } from '../../store/actions/favoriteActions';
import IconButton from './IconButton';

function FavIcon({ favIconStyle, product }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const alert = useAlert();

  const favoriteControl = (id) => {
    let isFavorite;
    isFavorite = favorites.some((f) => f.productID === id);
    return isFavorite;
  };
  const addFavoriteHandle = (p) => {
    dispatch(addFavorite(p));
    alert.success(`${p.name} added to favorities.`);
  };
  const removeFavoriteHandle = (p) => {
    dispatch(removeFavorite(p.productID));
    alert.info(`${p.name} remove to favorities.`);
  };
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites, dispatch]);
  return (
    <>
      {
                favoriteControl(product.productID)
                  ? (
                    <IconButton icon="fas fa-heart" iconStyle={favIconStyle} handlerClick={() => removeFavoriteHandle(product)} />
                  )
                  : (
                    <IconButton icon="far fa-heart" iconStyle={favIconStyle} handlerClick={() => addFavoriteHandle(product)} />
                  )
            }
    </>
  );
}

export default FavIcon;
