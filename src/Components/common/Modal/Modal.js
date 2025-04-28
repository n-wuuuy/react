import React, { useState, useEffect } from 'react';
import './Modal.css'

function Modal() {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Функция показать модалку с плавным появлением
  const showModal = () => {
    setVisible(true);
    // Через небольшой таймаут меняем opacity для анимации
    setTimeout(() => setOpacity(1), 10);
  };

  // Функция скрыть модалку с плавным исчезновением
  const hideModal = () => {
    setOpacity(0);
    // Через 500мс скрываем полностью (время анимации)
    setTimeout(() => setVisible(false), 500);
  };

  // При монтировании компонента показываем модалку
  useEffect(() => {
    showModal();
  }, []);

  // Обработчик клика по кнопке закрытия
  const handleClose = () => {
    hideModal();
    // Через минуту показываем модалку снова
    setTimeout(() => {
      showModal();
    }, 60 * 1000);
  };

  if (!visible) return null; // Если не видим, ничего не рендерим

  return (
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close"
                  onClick={handleClose}>&times;</span>
            <p>Воспользуйтесь нашими услугами сейчас и получите скудку:</p>
            <h1>10%</h1>
        </div>
    </div>
  );
}

export default Modal;