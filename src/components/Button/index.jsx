import React from 'react';
import './style.scss';

function Button({ handlerClick, children }) {
  return (
    <button className="button__global" type="button" onClick={handlerClick}>{children}</button>
  );
}

export default Button;
