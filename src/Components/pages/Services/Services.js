// components/MainPage.jsx
import React from 'react';
import './Services.css';
import Card from '../../common/Card/Card';
import CardToolBarMenu from '../../common/CardToolBarMenu/CardToolBarMenu';


function Services() {
    return(
        <div>
            <div class="container">
                <div class="text-area">
                    <div class="title">
                        Исследуйте
                        Наши области практики
                    </div>
                    <div class="description">
                        Мы — группа адвокатов по гражданским судебным разбирательствам, которые занимаются обеспечением правосудия по вопросам, связанным со страховой защитой, страховым покрытием, недобросовестностью, страховым мошенничеством и уголовными разбирательствами.
                    </div>
                </div>
                <img class="custom-image" src="./images/IMAGE(6).png" />
                <CardToolBarMenu></CardToolBarMenu>
            </div>
        </div>
    )
}

export default Services;