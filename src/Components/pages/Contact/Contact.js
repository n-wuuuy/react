// components/MainPage.jsx
import React from 'react';
import './Contact.css';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';


function Contact() {
    return(
        <div>
            <div class="container_r">
                <div class="info-area_r">
                    <div class="title_r">
                        Наша профессиональная команда экспертов-юристов всегда готова вам помочь.
                    </div>
                    <img class="dilimiter-img" src="./images/icons/IMAGE(11).png"/>
                    <div class="description_r">
                        Мы всегда доступны для новых дел, больших или малых. Отправьте нам электронное письмо, и мы свяжемся с вами в ближайшее время, или позвоните с 8:00 до 19:00 с понедельника по субботу.
                    </div>
                    <button class="btn_r">
                        Связаться с нами
                    </button>
                </div>
                <div class="contact-area_r">
                    <div class="info-card_r">
                        <div class="contact-title_r">
                            Получите бесплатную консультацию
                        </div>
                        <div class="contact-desc_r">
                            Вы можете получить бесплатную консультацию и оценку вашего случая у нас по следующему контактному номеру
                        </div>
                        <div class="contact-data_r">
                            <div class="icon_r">
                                <img class="img-icon_r" src="./images/call1.png" />
                            </div>
                            <div class="contact_r">
                                <div class="signature_r">
                                    Позвоните нам по телефону:
                                </div>
                                <div class="tel-number_r">
                                    375295734930
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Contact;