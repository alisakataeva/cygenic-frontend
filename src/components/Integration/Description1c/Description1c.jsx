import React from 'react';
import './Description1c.css';

function Description1c() {
  return (
    <div className='description1c'>
        <div className='description1c__box'>
          <div className='description1c__mini-box'>
            <p className='description1c__title'> Мы официальный партнер Bitrix24</p>
            <p className='description1c__text'>Разместите Битрикс24 на сервере компании или в датацентре, и управляйте скоростью и надежностью его работы. Вы можете использовать несколько серверов, тем самым обеспечив высокую доступность портала и его масштабирование.</p>
          </div>
        </div>

        <div className='description1c__box'>
          <div className='description1c__mini-box'>
            <p className='description1c__sub-title'>Интеграция с другими системами</p>
            <p className='description1c__text'>Настройка системы на различные виды учета и реализация любой методологии учета</p>
          </div>
          <div className='description1c__mini-box'>
            <p className='description1c__sub-title'>Масштабируемость</p>
            <p className='description1c__text'>Однопользовательский - для небольших учреждений или персонального использования</p>
          </div>
        </div>


    </div>
  );
}

export default Description1c;