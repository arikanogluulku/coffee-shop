import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import CategoryButton from './CategoryButton';
import { fetchFilteredProducts } from '../../store/actions/productActions';

function Categories({ data }) {
  const dispatch = useDispatch();

  const allProductsHandler = () => {
    dispatch(fetchFilteredProducts('all'));
  };

  const categoryFilterHandler = (id) => {
    dispatch(fetchFilteredProducts(id));
  };
  return (
    <div className="categories__container">
      <div className="categories__wrapper">
        <CategoryButton tittle="all" handlerClick={allProductsHandler} />
        {
          data && data.map((category) => (
            <CategoryButton
              tittle={category.name}
              handlerClick={() => categoryFilterHandler(category.categoryID)}
              key={category.categoryID}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Categories;
