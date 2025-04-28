// components/MainPage.jsx
import React from 'react';
import './About.css';


function About() {
    return(
        <div>
            <div className="container">
                <div className="info-area">
                    <div className="title">
                        Боритесь, чтобы получить то, что вы заслуживаете
                    </div>
                    <img src="./images/IMAGE(7).png" />
                    <div className="description">
                    Наши сертифицированные адвокаты по семейному праву работают над достижением справедливого и своевременного разрешения юридических вопросов в вашем деле.
                    </div>
                </div>
                <div className="action-area">
                    <section className="inf-sec">
                        <div className="box">
                            <img className="icon-main" src="./images/icons/heart.png" />
                            <div className="sec-text">
                                7230
                            </div>
                        </div>
                        <div className="sec-inf">
                            <div className="sec-title">
                                Доверие клинтов
                            </div>
                            <div className="sec-desc">
                                Довольные клиенты
                            </div>
                        </div>
                    </section>
                    <section className="inf-sec">
                        <div className="box">
                            <img className="icon-main" src="./images/icons/star.png" />
                            <div className="sec-text">
                                98%
                            </div>
                        </div>
                        <div className="sec-inf">
                            <div className="sec-title">
                                Успешные случаи
                            </div>
                            <div className="sec-desc">
                                Статистика
                            </div>
                        </div>
                    </section>
                    <section className="img-sec">
                        <div className="img-title">
                            15,890+
                        </div>
                        <div className="img-desc">
                            Уголовных дел защищено
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;