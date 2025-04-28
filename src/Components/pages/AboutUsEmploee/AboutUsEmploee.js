// components/MainPage.jsx
import React, { useState, useRef } from 'react';
import './AboutUsEmploee.css';

const teamMembersData = [
    {
      id: 'item1',
      name: 'Максим Забело',
      position: 'Помощник адвоката',
      experience: '13 лет',
      education: 'БГУ',
      awards: 'Премия имени Анатолия Лебедева',
      phone: '+375296438054',
      email: 'maks_zabelo@gmail.com',
      social: ['Facebook', 'LinkedIn', 'Twitter'],
      imgSrc: './assets/images/five_page/person_1.png',
    },
    {
      id: 'item2',
      name: 'Мария Петрова',
      position: 'Адвокат',
      experience: '17 лет',
      education: 'БГУ',
      awards: 'Премия имени Анатолия Лебедева',
      phone: '+375296458054',
      email: 'maria_petrova@gmail.com',
      social: ['Facebook', 'LinkedIn', 'Twitter'],
      imgSrc: './assets/images/five_page/person_2.png',
    },
    {
      id: 'item3',
      name: 'Сергей Петров',
      position: 'Адвокат',
      experience: '20 лет',
      education: 'БГУ',
      awards: 'Премия имени Анатолия Лебедева',
      phone: '+375296538054',
      email: 'advokat_sergo@gmail.com',
      social: ['Facebook', 'LinkedIn', 'Twitter'],
      imgSrc: './assets/images/five_page/person_3.png',
    },
  ];

function AboutUsEmploee() {

  const [team, setTeam] = useState(teamMembersData);
  const [dropzoneMember, setDropzoneMember] = useState(null);

  // Для запоминания id перетаскиваемого элемента
  const draggedItemId = useRef(null);

  // Обработчик начала перетаскивания
  function handleDragStart(e, id) {
    draggedItemId.current = id;
    e.dataTransfer.effectAllowed = 'move';
    // Добавим класс для стилей (если нужно)
    e.currentTarget.classList.add('dragging');
  }

  // Обработчик окончания перетаскивания
  function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
  }

  // Обработчик dragover для dropzone - нужно отменить дефолтное поведение
  function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  }

  // Обработчик drop
  function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');

    const id = draggedItemId.current;
    if (!id) return;

    // Найдем перетаскиваемого участника
    const draggedMember = team.find(member => member.id === id);

    if (!draggedMember) return;

    if (dropzoneMember) {
      // Если в dropzone уже есть участник, меняем их местами
      setTeam(prevTeam => {
        // Удаляем draggedMember из team
        const newTeam = prevTeam.filter(member => member.id !== id);
        // Добавляем dropzoneMember обратно в команду
        newTeam.splice(
          prevTeam.findIndex(m => m.id === draggedMember.id),
          0,
          dropzoneMember
        );
        return newTeam;
      });
      setDropzoneMember(draggedMember);
    } else {
      // Если dropzone пустой, просто перемещаем draggedMember туда
      setTeam(prevTeam => prevTeam.filter(member => member.id !== id));
      setDropzoneMember(draggedMember);
    }
  }

  // Обработчик dragleave для dropzone - убираем подсветку
  function handleDragLeave(e) {
    e.currentTarget.classList.remove('dragover');
  }

  // Обработчик удаления из dropzone (например, по двойному клику)
  function handleRemoveFromDropzone() {
    if (dropzoneMember) {
      setTeam(prevTeam => [...prevTeam, dropzoneMember]);
      setDropzoneMember(null);
    }
  }

    return(
        <div>
            <div class="drag_and_drop_zone">
                <section class="team-section">
                    <h2>
                        Наши опытные юристы готовы ответить на любые вопросы
                        <p><img src=".\images\IMAGE(7).png" /></p>
                    </h2>
                    <div class="team">
                        <div class="draggable" draggable="true" id="item1">
                            <div class="team-member">
                                <img src=".\images\five_page\person_1.png" alt="John Turner" />
                                <div class="inf-member">
                                    <h3>Martha Black</h3>
                                    <div class="signature">
                                        Должность
                                    </div>
                                    <p><span class="yellow-text">Помощник адвоката</span></p>
                                    <div class="signature">
                                        Стаж работы по специальности
                                    </div>
                                    <div class="inf-drag-drop">
                                        13 лет
                                    </div>
                                    <div class="signature">
                                        Образование
                                    </div>
                                    <div class="inf-drag-drop">
                                        БГУ
                                    </div>
                                    <div class="signature">
                                        Награды, премии
                                    </div>
                                    <div class="inf-drag-drop">
                                        Премия имени Анатолия Лебедева
                                    </div>
                                </div>
                                <div class="social-icons">
                                    <div class="inf-drag-drop-title">Свяжись со мной</div>
                                    <div class="signature">Номер телефона</div>
                                    <div class="inf-drag-drop">+375296438054</div>
                                    <div class="signature">Электронная почта</div>
                                    <div class="inf-drag-drop">advokat_sergo@gmail.com</div>
                                    <div class="signature">Социальные сети</div>
                                    <a href="#">Facebook</a>
                                    <a href="#">LinkedIn</a>
                                    <a href="#">Twitter</a>
                                </div>
                            </div>
                        </div>
                        <div class="draggable" draggable="true" id="item2">
                            <div class="team-member">
                                <img src=".\images\five_page\person_2.png" alt="Martha Black" />
                                <div class="inf-member">
                                    <h3>Martha Black</h3>
                                    <div class="signature">
                                        Должность
                                    </div>
                                    <p><span class="yellow-text">Помощник адвоката</span></p>
                                    <div class="signature">
                                        Стаж работы по специальности
                                    </div>
                                    <div class="inf-drag-drop">
                                        13 лет
                                    </div>
                                    <div class="signature">
                                        Образование
                                    </div>
                                    <div class="inf-drag-drop">
                                        БГУ
                                    </div>
                                    <div class="signature">
                                        Награды, премии
                                    </div>
                                    <div class="inf-drag-drop">
                                        Премия имени Анатолия Лебедева
                                    </div>
                                </div>
                                <div class="social-icons">
                                    <div class="inf-drag-drop-title">Свяжись со мной</div>
                                    <div class="signature">Номер телефона</div>
                                    <div class="inf-drag-drop">+375296438054</div>
                                    <div class="signature">Электронная почта</div>
                                    <div class="inf-drag-drop">advokat_sergo@gmail.com</div>
                                    <div class="signature">Социальные сети</div>
                                    <a href="#">Facebook</a>
                                    <a href="#">LinkedIn</a>
                                    <a href="#">Twitter</a>
                                </div>
                            </div>
                        </div>
                        <div class="draggable" draggable="true" id="item3">
                            <div class="team-member">
                                <img src=".\images\five_page\person_3.png" alt="Brian Gomez" />
                                <div class="inf-member">
                                    <h3>Martha Black</h3>
                                    <div class="signature">
                                        Должность
                                    </div>
                                    <p><span class="yellow-text">Помощник адвоката</span></p>
                                    <div class="signature">
                                        Стаж работы по специальности
                                    </div>
                                    <div class="inf-drag-drop">
                                        13 лет
                                    </div>
                                    <div class="signature">
                                        Образование
                                    </div>
                                    <div class="inf-drag-drop">
                                        БГУ
                                    </div>
                                    <div class="signature">
                                        Награды, премии
                                    </div>
                                    <div class="inf-drag-drop">
                                        Премия имени Анатолия Лебедева
                                    </div>
                                </div>
                                <div class="social-icons">
                                    <div class="inf-drag-drop-title">Свяжись со мной</div>
                                    <div class="signature">Номер телефона</div>
                                    <div class="inf-drag-drop">+375296438054</div>
                                    <div class="signature">Электронная почта</div>
                                    <div class="inf-drag-drop">advokat_sergo@gmail.com</div>
                                    <div class="signature">Социальные сети</div>
                                    <a href="#">Facebook</a>
                                    <a href="#">LinkedIn</a>
                                    <a href="#">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="dropzone"></div>
            </div>
            <section class="articles-section">
                <div class="articles">
                    <div class="article-item">
                        <img src=".\images\five_page\news_1.png" alt="Article 1" />
                        <h3>Как определить, кто виноват в автомобильной аварии</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Воспользуйтесь преимуществами простых решений, чтобы определить примерную матрицу добавленной стоимости...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                    <div class="article-item">
                        <img src=".\images\five_page\news_2.png" alt="Article 2" />
                        <h3>Когда подавать иск за пределами компенсации работникам</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Стратегии, основанные на простых решениях, для определения приблизительной матрицы добавленной стоимости...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                    <div class="article-item">
                        <img src=".\images\five_page\news_3.png" alt="Article 3" />
                        <h3>Публикации в социальных сетях привели к вынесению вердикта защиты</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Совместные действия по поиску простых путей для приблизительного определения деятельности, создающей добавленную стоимость...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                    <div class="article-item">
                        <img src=".\images\five_page\news_4.png" alt="Article 4" />
                        <h3>В одиночку едет на помощь своим любимым некоммерческим организациям</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Подкастинг на тему «низко висящих фруктов» для определения приблизительной деятельности по созданию добавленной стоимости...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                    <div class="article-item">
                        <img src=".\images\five_page\news_5.png" alt="Article 5" />
                        <h3>Дело возбуждено в интересах пострадавшего работника буксира</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Эффективно, с минимальными затратами, определить примерную деятельность по созданию добавленной стоимости...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                    <div class="article-item">
                        <img src=".\images\five_page\news_6.png" alt="Article 6" />
                        <h3>Как компании выбирают юридическое представительство</h3>
                        <p class="date">Пятница, 4 февраля 2022 г.</p>
                        <p>Объективно, с минимальными затратами, определить примерную деятельность по созданию добавленной стоимости...</p>
                        <a href="#"><span class="yellow-text">Подробнее</span></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsEmploee;
