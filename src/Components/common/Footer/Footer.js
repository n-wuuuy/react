// components/Footer.jsx
import React from 'react';
import './Footer.css';


function Footer() {
 return (
 <footer>
 <img style={{ height: 'auto', width: '100vw' }} src="./images/foter_start_img.jpg" alt="Footer Start" />
 <div>
 <div className="img-line">
 <img className="dilimiter-footer" src="./images/icons/IMAGE(19).png" alt="Delimiter" />
 <img className="logo-name" src="./images/icons/IMAGE(18).png" alt="Logo" />
 <img className="dilimiter-footer" src="./images/icons/IMAGE(17).png" alt="Delimiter" />
 </div>
 <div className="footer-content">
 <section className="links-area-25">
 <hr />
 <button className="dropbtn" >
 Быстрые ссылки
 </button>
 <hr />
 <div className="list-some-column" id="dropdownContent1">
 <div>
 <a style={{ display: 'block' }} href="./index.html"><h5>Главная</h5></a>
 <a style={{ display: 'block' }} href="./therd_page.html"><h5>О нас</h5></a>
 <a style={{ display: 'block' }} href="./fourth_page.html"><h5>Цены</h5></a>
 <a style={{ display: 'block' }} href="./therd_page.html"><h5>Отзывы и статистика</h5></a>
 <a style={{ display: 'block' }} href="./fourth_page.html"><h5>Сврязваться с нами</h5></a>
 </div>
 <div>
 <a style={{ display: 'block' }} href="https://x.com/"><h5>Блог</h5></a>
 <a style={{ display: 'block' }} href="https://x.com/"><h5>Частный блог</h5></a>
 <a style={{ display: 'block' }} href="https://x.com/"><h5>Случаи</h5></a>
 <a style={{ display: 'block' }} href="https://x.com/"><h5>Частные случаи</h5></a>
 <a style={{ display: 'block' }} href="./second.html"><h5>Области практики</h5></a>
 </div>
 </div>
 </section>


 <section className="links-area-15">
 <hr />
 <button className="dropbtn" >
 Разработчикам
 </button>
 <hr />
 <div className="list-info" id="dropdownContent2">
 <a style={{ display: 'block' }} href="https://github.com/n-wuuuy/New_front"><h5>Руководство по стилю</h5></a>
 <a style={{ display: 'block' }} href="https://github.com/n-wuuuy/New_front"><h5>Лицензии</h5></a>
 <a style={{ display: 'block' }} href="https://github.com/n-wuuuy/New_front"><h5>Защищено</h5></a>
 <a style={{ display: 'block' }} href="https://github.com/n-wuuuy/New_front"><h5>Журнал изменений</h5></a>
 <a style={{ display: 'block' }} href="https://github.com/n-wuuuy/New_front"><h5>Страница ошибки</h5></a>
 </div>
 </section>


 <section className="links-area-15">
 <hr />
 <button className="dropbtn" >
 Зоны Практики
 </button>
 <hr />
 <div className="list-info" id="dropdownContent3">
 <h5>Торговое право</h5>
 <h5>Строительное право</h5>
 <h5>Автомобильные аварии</h5>
 <h5>Уголовное право</h5>
 <h5>Семейное право</h5>
 </div>
 </section>


 <section className="links-area-25">
 <hr />
 <button className="dropbtn" >
 Связаться с нами
 </button>
 <hr />
 <div className="list-info-contact">
 <div>
 <h5>Адвокатская контора, Ленина 2,</h5>
 <h5>Минск 90027, Беларусь.</h5>
 </div>
 <div>
 <h5>Телефон: +375294629548</h5>
 <h5>Почта: info@gmail.com</h5>
 </div>
 </div>
 </section>
 </div>
 <hr />
 <div className="links">
 <div className="copyright">
 Copyright © Адвокатская контора | Дизайнер <span className="highlight">БГУИР.</span> - Испольнитель <span className="highlight">БГУИР.</span>
 </div>
 <div className="social-networks">
 <h6>Перейти</h6>
 <a href="https://ru.pinterest.com/"><img src="./images/icons/IMAGE(20).png" alt="Pinterest" /></a>
 <a href="https://x.com/"><img src="./images/icons/IMAGE(21).png" alt="Twitter" /></a>
 <a href="https://www.instagram.com/"><img src="./images/icons/IMAGE(22).png" alt="Instagram" /></a>
 <a href="https://www.facebook.com"><img src="./images/icons/IMAGE(23).png" alt="Facebook" /></a>
 </div>
 </div>
 <hr />
 </div>
 </footer>
 );
}


export default Footer;
