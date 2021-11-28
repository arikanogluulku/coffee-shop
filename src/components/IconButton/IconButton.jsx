import React from 'react';
import './style.scss';

function IconButton({
  icon, iconStyle, handlerClick, badge,
}) {
  return (
    <>
      <button type="button" className={`icon__button ${iconStyle}`} onClick={handlerClick}>
        <i className={icon}>
          {
          badge
          && (
          <span className="badge">
            {badge}
          </span>
          )
          }
        </i>
      </button>
    </>
  );
}

export default IconButton;
