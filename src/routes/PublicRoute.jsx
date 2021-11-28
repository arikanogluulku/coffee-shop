import React from 'react';
import { Route } from 'react-router-dom';
import PublicLayout from '../Layout/PublicLayout';

export const PublicRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      <PublicLayout>
        {children}
      </PublicLayout>
    )}
  />
);
