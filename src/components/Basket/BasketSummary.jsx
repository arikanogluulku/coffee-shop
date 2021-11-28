import React from 'react';
import { useDispatch } from 'react-redux';
import { moneyFormatter } from 'Utilities/moneyFormat';
import { useAlert } from 'react-alert';
import { deleteBasket } from '../../store/actions/basketActions';
import Button from '../Button';

function BasketSummary({ totalPrice, basketLength }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const basketDelete = () => {
    dispatch(deleteBasket());
    alert.success(' Cart Cleared');
  };
  return (
    <>
      <div className="basket__summary">
        <h1 className="basket__summary__tittle">Basket Summary</h1>
        <p className="basket__summary__length">
          total Product :
          <span>{basketLength}</span>
        </p>
        <p className="basket__summary__amount">
          amount of payment :
          <span>{moneyFormatter.format(totalPrice)}</span>
        </p>
        <Button onClick={() => console.log('payment step')}>
          complete shopping
          <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }} />
        </Button>
        <h4 onClick={basketDelete} className="basket__summary__clear ">Clear Cart</h4>
      </div>
    </>
  );
}

export default BasketSummary;
