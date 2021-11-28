import React from 'react';
import { useDispatch } from 'react-redux';
import { moneyFormatter } from 'Utilities/moneyFormat';
import { useAlert } from 'react-alert';
import Counter from './Counter';
import { IconButton } from '../IconButton';
import { removeProduct } from '../../store/actions/basketActions';
import './style.scss';

function BasketCard({ product }) {
  const dispatch = useDispatch();
  const alert = useAlert();

  const productRemove = (p) => {
    dispatch(removeProduct(p));
    alert.error(`${p.name} remove to cart.`);
  };
  return (
    <>
      <tr className="basket__card" key={product.productID}>
        <td>
          <img className="basket__image" src={product.image} alt="" />
        </td>
        <td>
          {product.name}
        </td>
        <td>
          {moneyFormatter.format(product.price)}
        </td>
        <td>
          <Counter product={product} />
        </td>
        <td>
          {moneyFormatter.format(product.qty * product.price)}
        </td>
        <td>
          <IconButton
            icon="far fa-trash-alt"
            iconStyle="product__remove"
            handlerClick={() => productRemove(product)}
          />
        </td>
      </tr>
    </>
  );
}

export default BasketCard;
