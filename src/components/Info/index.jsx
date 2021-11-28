import React from 'react';
import infoImage from '../../assets/info.gif';
import './style.scss';

function Info({ children }) {
  return (
    <div className="info">
      <img className="info__image" src={infoImage} alt="" />
      {children}
    </div>
  );
}

export default Info;
