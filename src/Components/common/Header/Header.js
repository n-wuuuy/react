// components/Header.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


function Header() {
 return (
 <header>
 <div className="header-company">
 <img className="img-logo" src="./images/company_logo.png" alt="Company Logo" />
 <Link style={{ display: 'block' }} to="/contact">
 <button className="header-btn">
 Записаться на консультацию
 </button>
 </Link>
 </div>
 <hr />
 <nav className="nav-bar">
 <div className="burger-menu" id="burger-menu">
 <span></span>
 <span></span>
 <span></span>
 </div>
 <ul className="nav-links" id="nav-links">
 <div className="nav-bar-links">
 <li><Link to="/">Главная</Link></li>
 <li><Link to="/services">Услуги</Link></li>
 <li><Link to="/emploee">О нас</Link></li>
 <li><Link to="/about">Отзывы</Link></li>
 </div>
 <div className="contacts">
 <div className="contact">
 <div className="icon">
 <img className="contact-icon" src="./images/icons/call.png" alt="Call Icon" />
 </div>
 <div className="contact-info">
 <div className="contact-title">
 Позвоните нам:
 </div>
 <div className="contact-data">
 37529299632379
 </div>
 </div>
 </div>
 <div className="contact">
 <div className="icon">
 <img className="contact-icon" src="./images/icons/mail.png" alt="Mail Icon" />
 </div>
 <div className="contact-info">
 <div className="contact-title">
 Электронная почта:
 </div>
 <div className="contact-data">
 zabelosoft@mail.com
 </div>
 </div>
 </div>
 </div>
 </ul>
 </nav>
 <hr />
 </header>
 );
}


export default Header;
