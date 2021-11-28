import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api/productApi';
import { fetchCategory } from '../api/categoryApi';
import {
  Categories, Products, Header, Loading,
} from '../components';

function Home() {
  const categoryState = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products.products);
  const { categories, loading } = categoryState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <Header />
      <Categories data={categories} />
      <Products data={products} />
    </>
  );
}

export default Home;
