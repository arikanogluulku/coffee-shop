import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  BasketCard, BasketSummary, PagesTittle, Info, Button,
} from '../components';

function Cart() {
  const basketState = useSelector((state) => state.basket);
  const history = useHistory();
  const { basket, totalPrice } = basketState;
  return (
    <>
      <PagesTittle tittle="Your Basket" />
      {
        basket.length > 0
          ? (
            <div className="basket__container">
              <table className="basket__table">
                <tr>
                  <th>İmage</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Number</th>
                  <th>Total Price</th>
                </tr>
                {
                  basket.map((product) => (
                    <BasketCard product={product} />
                  ))
                }
              </table>
              <BasketSummary totalPrice={totalPrice} basketLength={basket.length} />
            </div>
          )
          : (
            <Info
              children={(
                <p className="info__text">
                  There is no product in your cart.
                  <Button handlerClick={() => history.push('/')}>Continue Shopping</Button>
                </p>
              )}
            />
          )
      }
    </>
  );
}

export default Cart;
