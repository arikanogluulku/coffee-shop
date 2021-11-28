import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import basketControl from 'Utilities/basketControl';
import { useAlert } from 'react-alert';
import ProductCard from './ProductCard';
import IconButton from '../IconButton/IconButton';
import FavIcon from '../IconButton/FavIcon';
import Counter from '../Basket/Counter';
import { addToBasket } from '../../store/actions/basketActions';

function Products({ data }) {
  const basket = useSelector((state) => state.basket.basket);
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  const handlerAddToBasket = (p) => {
    dispatch(addToBasket(p));
    alert.success(`${p.name} added to cart.`);
  };
  return (
    <div className="products__container">
      <div className="products__wrapper">
        {
          data.map((product) => (
            <ProductCard
              product={product}
              children={(
                <div className="products__icons">
                  <IconButton icon="fas fa-eye" iconStyle="products__icons__item" handlerClick={() => history.push(`/${product.productID}`)} />
                  <FavIcon favIconStyle="products__icons__item" product={product} />
                  {
                  basketControl(basket, product.productID) ? <Counter product={product} />
                    : <IconButton icon="fas fa-cart-plus" iconStyle="products__icons__item" handlerClick={() => handlerAddToBasket(product)} />
                  }
                </div>
              )}
            />
          ))
        }

      </div>
    </div>
  );
}

export default Products;
