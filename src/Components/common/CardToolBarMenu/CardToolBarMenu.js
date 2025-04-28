import React, { useState } from 'react';
import './CardToolBarMenu.css';
import Card from '../Card/Card';

function CardToolBarMenu() {
    const cards = [
        {title: 'Торговое право', descriotion: 'Будьте в курсе новых событий, поскольку законы и правила часто меняются в зависимости от ситуации.', img: './images/icons/IMAGE(5).png'},
        {title: 'Строительное право', descriotion: 'Никогда не судите, просто слушайте и советуйте. Даже если ваш клиент принял плохое решение в деле.', img: './images/icons/IMAGE(1).png'},
        {title: 'Семейное право', descriotion: 'Вы можете оказаться не в состоянии безопасно работать или выполнять должностные обязанности.', img: './images/icons/IMAGE(3).png'},
        {title: 'Уголовное право', descriotion: 'Наши юристы приложат все усилия, чтобы оказать вам поддержку и внимание, которых вы заслуживаете.', img: './images/icons/IMAGE(4).png'},
        {title: 'Неправомерная смерть', descriotion: 'Будьте в курсе событий в вашей области права. Будьте в курсе нового правосудия, законов и правил.', img: './images/icons/IMAGE(2).png'},
        {title: 'Автомобильные аварии', descriotion: 'Нечестность ни к чему не приведет и создаст вам репутацию нечестного в законе человека.', img: './images/icons/IMAGE.png'},
    ]

    const lawyers = [
        {
            name: 'Лебедев Генадий Викторовч', 
            position: 'Юрист по торговому праву',
            price: '500 BYN',
            tel: '375295743750',
            mail: 'law_master_gen@gmai.com',
            photo: './images/five_page/person_1.png',
            cases: [1700, 24, 75, 108, 50, 600]
        },
        {
            name: 'Петрова Мария Ивановна',
            position: 'Юрист по строительному праву',
            price: '450 BYN',
            tel: '375291234567',
            mail: 'petrova_maria@mail.com',
            photo: './images/five_page/person_2.png',
            cases: [1600, 3000, 65, 110, 45, 580]
          },
    ]

    const [selected, setSelected] = useState(new Set());
    const [currentLawyerIndex, setCurrentLawyerIndex] = useState(0);

    const selectAll = () => {
      const allIndices = new Set(cards.map((_, idx) => idx));
      setSelected(allIndices);
    };
    
    const deselectAll = () => {
      setSelected(new Set());
    };

    const handleSelect = (index) => {
        const newSelected = new Set(selected);
        if (newSelected.has(index)) {
          newSelected.delete(index);
        } else {
          newSelected.add(index);
        }
        setSelected(newSelected);
      };

    const findBestLawyerBySelected = (selectedIndicesSet) => {
      if (selectedIndicesSet.size === 0) return [];
      
      const selectedIndices = Array.from(selectedIndicesSet);
      
      return lawyers
        .map(lawyer => {
          const sum = selectedIndices.reduce((acc, idx) => 
            (idx >= 0 && idx < lawyer.cases?.length) 
              ? acc + lawyer.cases[idx] 
              : acc, 0);
          return { ...lawyer, sum };
        })
        .sort((a, b) => b.sum - a.sum);
    };

  const sortedLawyers = findBestLawyerBySelected(selected);
  const currentLawyer = sortedLawyers[currentLawyerIndex] || null;

  const handleNext = () => {
    setCurrentLawyerIndex(prev => (prev + 1) % sortedLawyers.length);
  };

  const handlePrev = () => {
    setCurrentLawyerIndex(prev => (prev - 1 + sortedLawyers.length) % sortedLawyers.length);
  };

    return(
    <div>
        <div class="cards">
        {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          descriotion={card.descriotion} 
          img={card.img} 
          onChange={() => handleSelect(index)}
          checked={selected.has(index)}
        />
        ))}
        </div>
        <div class="recomindation-window">
        {currentLawyer && (
            <div class="lawyer-menu">
                <div class="best-lawyer">
                    <img 
                        src={currentLawyer.photo} 
                        alt={currentLawyer.name} 
                        class="lawyer-image"
                    />
                    <div class="info-lawyer">
                        <div class="lawyer-data">
                          <strong>{currentLawyer.name}</strong>
                          <div class="position">{currentLawyer.position}</div>
                          <span>Стоимость: {currentLawyer.price}</span><br />
                        </div>
                        <div class="lawyer-links">
                          <a href={`tel:+${currentLawyer.tel}`}>Тел: {currentLawyer.tel}</a><br />
                          <a href={`mailto:${currentLawyer.mail}`}>Email: {currentLawyer.mail}</a>
                        </div>
                    </div>
                </div>
                <div class="toolbar">
                  <div class="case-tools">
                    <div class="toolbar-title">Взаимодесвие с сфорой услуг</div>
                    <div class="botton-menu">
                      <button onClick={selectAll}>Выбрать все</button>
                      <button onClick={deselectAll}>Снять всe</button>
                    </div>
                  </div>
                  <div class="lawyers-tools">
                    <div class="toolbar-title">Взаимодесвие со специалистом</div>
                    <div>
                      <button onClick={handleNext}>Следующий специалист</button>
                      <button onClick={handlePrev}>Вернуться к предыдущему</button>
                    </div>
                  </div>
                </div>
          </div>
        )}
        </div>
    </div>
    )
}

export default CardToolBarMenu;