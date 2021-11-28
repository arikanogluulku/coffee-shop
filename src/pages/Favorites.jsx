import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoritesList, PagesTittle, Info } from '../components';
import { getFavoritesStorage } from '../store/actions/favoriteActions';

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favorites')) != null) { dispatch(getFavoritesStorage()); }
  }, []);

  return (
    <>
      <PagesTittle tittle="Favorites" />
      {
      favorites.length > 0 ? <FavoritesList data={favorites} />
        : (
          <Info
            children={(
              <p className="info__text">You haven't added any products to your favorites yet.</p>
            )}
          />
        )
    }
    </>
  );
}

export default Favorites;
