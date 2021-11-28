import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProducts, searchResultClear } from '../../store/actions/productActions';
import './style.scss';

function Search() {
  const result = useSelector((state) => state.products.searchResult);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const ulRef = useRef();
  const inputRef = useRef();
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
    });
    document.addEventListener('click', () => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  const searchInputChange = (text) => {
    text.length >= 3 ? dispatch(searchProducts(text)) : dispatch(searchResultClear());
  };
  return (
    <div className="search__icon">
      <i className="fas fa-search" onClick={handleShow} />
      <div className={`search__form ${show ? 'search__form-active' : ''} `}>
        <input type="search" placeholder="search here..." ref={inputRef} onChange={(e) => searchInputChange(e.target.value)} />
        <label className="fas fa-search" />
        <ul className="search__result" ref={ulRef}>
          { result && result.map((product) => (
            <Link to={`/${product.productID}`} style={{ textDecoration: 'none' }} key={product.productID}>
              <div className="search__result__item">
                <img src={product.image} alt="" />
                <p>{product.name}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
