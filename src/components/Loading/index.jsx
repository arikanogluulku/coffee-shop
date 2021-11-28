import React from 'react';
import loading from '../../assets/loading.png';
import './style.scss';

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  );
}

export default Loading;
