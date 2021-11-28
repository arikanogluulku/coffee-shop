import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { moneyFormatter } from 'Utilities/moneyFormat';
import basketControl from 'Utilities/basketControl';
import {
  Loading, Button, FavIcon, Counter,
} from '../../components';
import { getSingleProduct } from '../../api/productApi';
import { addToBasket } from '../../store/actions/basketActions';
import './style.scss';

function ProductDetail() {
  const productState = useSelector((state) => state.products);
  const basket = useSelector((state) => state.basket.basket);
  const { loading, product } = productState;
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerAddToBasket = (p) => {
    dispatch(addToBasket(p));
  };
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, []);

  if (loading) {
    <Loading />;
  }
  return (
    <div className="product__wrapper">
      <div className="product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product__info">
        <h1>{product.name}</h1>
        <p className="product__info__price">
          {
          moneyFormatter.format(product.price)
         }
        </p>
        <p className="product__info__description">
          {product.description}
        </p>
        {
        basketControl(basket, product.productID)
          ? (
            <div className="product__counter">
              <Counter product={product} />
              <Button handlerClick={() => history.push('/cart')}> Go Basket </Button>
            </div>
          )

          : (
            <Button handlerClick={() => handlerAddToBasket(product)}>
              Add To Cart
              <i className="fas fa-shopping-cart" style={{ marginLeft: '0.5rem' }} />
            </Button>
          )
        }

      </div>
      <FavIcon favIconStyle="product__fav" product={product} />
    </div>
  );
}

export default ProductDetail;
