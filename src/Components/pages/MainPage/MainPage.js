// components/MainPage.jsx
import React from 'react';
import './MainPage.css';
import Modal from '../../common/Modal/Modal';


function MainPage() {
 return (
    <div>
 <div className="content-page">
 <div className="image-content">
 <img className="img-inf-area" style={{ marginBottom: '3vh' }} src="./images/img1.jpg" alt="Info 1" />
 <img className="img-inf-area" src="./images/img2.jpg" alt="Info 2" />
 </div>
 <div className="info-area-inf-part">
 <div className="container-inf-part">
 <div className="title-inf-part">
 Добро пожаловать в Адвокатское право - <br />Компания «Юрист и юридическая фирма»
 </div>
 <img className="dilimiter-img" style={{ width: '15vh', height: 'auto' }} src="./images/icons/IMAGE(13).png" alt="Delimiter" />
 <div className="description-inf-part">
 Несмотря на то, что мы находимся в Бруклине, наши юристы по морскому праву с гордостью помогают пострадавшим по всей стране, включая рабочих, которые работали в иностранных водах во время инцидента, выступать против крупнейших офшорных компаний и побеждать....
 </div>
 </div>
 <div className="person-card">
 <img style={{ width: 'auto', height: '10vh' }} src="./images/little_person.png" alt="Lawyer" />
 <h2 className="img-desc">Забело Максим</h2>
 </div>
 <div className="statistics">
 <div className="statistic">
 <img className="img-statistic" src="./images/icons/document.png" alt="Document Icon" />
 <div className="information">
 95%<br />Успешеных дел
 </div>
 </div>
 <div style={{ backgroundColor: '#D1B06B' }} className="statistic">
 <div className="number-img">
 <h3 className="number-box">
 35+
 </h3>
 </div>
 <div style={{ color: 'black' }} className="information">
 Лет <br />Опыта
 </div>
 </div>
 </div>
 </div>
 </div>
 <Modal />
 </div>
 );
}


export default MainPage;
