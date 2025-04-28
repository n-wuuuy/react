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
          {
            name: 'Иванов Петр Иванович',
            position: 'Юрист по уголовному праву',
            price: '700 BYN',
            tel: '3752915334567',
            mail: 'petr_шмфтщм@mail.com',
            photo: './images/five_page/person_3.png',
            cases: [100, 500, 200, 1710, 45, 1580]
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
        <div class="recomindation-title">Лучший специалист под ваш запрос:</div>
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
                          <div class="info"></div>
                          <div class="position">{currentLawyer.position}</div>
                          <div class="signature-info">Стоимость:</div>
                          <div class="info">{currentLawyer.price}</div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области торгового права:</div>
                            <div class="info">{currentLawyer.cases[0]}</div>
                          </div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области cтроительного права:</div>
                            <div class="info">{currentLawyer.cases[1]}</div>
                          </div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области семейного права:</div>
                            <div class="info">{currentLawyer.cases[2]}</div>
                          </div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области уголовного права:</div>
                            <div class="info">{currentLawyer.cases[3]}</div>
                          </div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области неправомерная смерть:</div>
                            <div class="info">{currentLawyer.cases[4]}</div>
                          </div>
                          <div class="info-data">
                            <div class="signature-info">Успешно закрытых дел в области автомобильных аварий:</div>
                            <div class="info">{currentLawyer.cases[5]}</div>
                          </div>
                        </div>
                        <div class="lawyer-links">
                          <div class="signature-info">Телефон:</div>
                          <div class="info">+{currentLawyer.tel}</div>
                          <div class="signature-info">Почта:</div>
                          <div class="info">{currentLawyer.mail}</div>
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