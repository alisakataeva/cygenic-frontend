import React from 'react';
import Bitrix24 from '/images/bitrix24/bitrix24.png';

import './Partner24.css';

function Partner24(props) {
  return (
    <>
      <div className='partner24__box'>

        <div className='partner24__box-item'>
          <div className='partner24__mini-box'>
            <p className='partner24__header'> Мы официальный партнер Bitrix24</p>
            <p className='partner24__text'>Разместите Битрикс24 на сервере компании или в датацентре, и управляйте скоростью и надежностью его работы. Вы можете использовать несколько серверов, тем самым обеспечив высокую доступность портала и его масштабирование.</p>
          </div>
        </div>

        <div className='partner24__box-item'>
          <img className='partner24__img' src={Bitrix24} alt="" width='301' height='306'/>
        </div>

      </div>
  </>

  );
}

export default Partner24;
