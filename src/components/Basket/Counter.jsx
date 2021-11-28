import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import basketControl from 'Utilities/basketControl';
import { useAlert } from 'react-alert';
import { addToBasket, removeBasket } from '../../store/actions/basketActions';
import './style.scss';

function Counter({ product }) {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const alert = useAlert();

  const handlerAddToBasket = (p) => {
    dispatch(addToBasket(p));
    alert.success(`${p.name} added to cart.`);
  };
  const handlerRemoveBasket = (p) => {
    dispatch(removeBasket(p));
    alert.error(`${p.name} deleted to cart.`);
  };
  return (

    <div className="counter">
      <button className="counter__button" type="button" onClick={() => handlerRemoveBasket(product)}>-</button>

      <input disabled className="counter__value" type="text" value={basketControl(basket, product.productID)} />

      <button className="counter__button" type="button" onClick={() => handlerAddToBasket(product)}>+</button>
    </div>

  );
}

export default Counter;
