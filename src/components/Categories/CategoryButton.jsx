import React from 'react';

function CategoryButton({ tittle, handlerClick }) {
  return (
    <div className="categories__item">
      <button type="submit" className="categories__link" onClick={handlerClick}>
        {tittle}
      </button>
    </div>
  );
}

export default CategoryButton;
