import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import {
  Home, Favorites, Cart, ProductDetail,
} from '../pages';

const Routes = () => (
  <Switch>
    <PublicRoute path="/" exact>
      <Home />
    </PublicRoute>
    <PublicRoute path="/favorites">
      <Favorites />
    </PublicRoute>
    <PublicRoute path="/cart">
      <Cart />
    </PublicRoute>
    <PublicRoute path="/:productId">
      <ProductDetail />
    </PublicRoute>
  </Switch>
);
export default Routes;
