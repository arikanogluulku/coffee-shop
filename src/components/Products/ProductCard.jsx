import React from 'react';
import { moneyFormatter } from 'Utilities/moneyFormat';
import { useHistory } from 'react-router-dom';

function ProductCard({ product, children }) {
  const history = useHistory();
  const openDetail = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div className="products__item" key={product.productID}>
      <img src={product.image} alt="" onClick={() => openDetail(product.productID)} />
      <h3>{product.name}</h3>
      <p>{ moneyFormatter.format(product.price)}</p>
      {children}
    </div>
  );
}

export default ProductCard;
