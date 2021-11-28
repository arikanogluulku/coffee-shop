import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { ProductCard } from '../Products';
import Button from '../Button';
import { IconButton } from '../IconButton';
import { removeFavorite } from '../../store/actions/favoriteActions';
import { addToBasket } from '../../store/actions/basketActions';

function FavoritesList({ data }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const removeFavoriteHandle = (p) => {
    dispatch(removeFavorite(p.productID));
    alert.error(`${p.name} remove to favorities.`);
  };
  const handlerAddBasket = (p) => {
    dispatch(addToBasket(p));
    alert.success(`${p.name} added to cart.`);
  };
  return (
    <div className="favorites__wrapper">
      {
            data && data.map((product) => (
              <ProductCard
                product={product}
                children={(
                  <div className="favorites__icons">
                    <Button handlerClick={() => handlerAddBasket(product)}>Add To Cart</Button>
                    <IconButton icon="far fa-times-circle" iconStyle="favorites__remove" handlerClick={() => removeFavoriteHandle(product)} />
                  </div>
                )}
              />
            ))
          }
    </div>
  );
}

export default FavoritesList;
