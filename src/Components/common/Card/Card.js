import React from 'react';
import './Card.css';

function Card({title, descriotion, img, onChange, checked}) {
    return(
        <div class="card">
            <label class="custom-checkbox">
                <input 
                    class="card-checkbox"
                    type="checkbox"
                    onChange={onChange}
                    checked={checked}/>
                <span class="checkmark"></span>
            </label>
            <div class="info-area">

                <div class="card-title">
                    {title}
                </div>
                <div class="title-desc">
                    {descriotion}
                </div>
            </div>
            <div class="action-area">
                <img src={img} alt="Рисунок не найден"/>
                <button class="btn">Подробнее</button>
            </div>
        </div>
    )
}

export default Card;