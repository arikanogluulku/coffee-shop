import React, { Suspense } from 'react';
import './style.scss';
import { Navbar, Footer, Loading } from '../components';

function PublicLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <div className="content">
          {children}
        </div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default PublicLayout;
