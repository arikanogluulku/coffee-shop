import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
        <i className="fab fa-linkedin" />
      </div>
      <div className="footer__links">
        <Link to="/" className="footer__links__item">our story</Link>
        <Link to="/" className="footer__links__item">Corporate</Link>
        <Link to="/" className="footer__links__item">blog</Link>
        <Link to="/" className="footer__links__item">production</Link>
      </div>
      <div className="footer__info">
        created by
        <span>  Ülkü Arıkanoğlu  </span>
        ©2021|November
      </div>
    </footer>
  );
}

export default Footer;
