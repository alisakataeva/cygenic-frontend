import React from 'react';

import './InfoSolutions.css';

function InfoSolutions(props) {
  return (
    <div className='infoSolutions__box'>
      <div className='infoSolutions__box-item'>
        <h3 className='infoSolutions__title'>Бонусы для вас:</h3>

        <p className='infoSolutions__text'>Непотраченные часы переносятся на следующий месяц</p>

        <p className='infoSolutions__text'>Дополнительные часы в месяц обсуждаются в каждой отдельной задаче исходя из расчёта 1690 руб./час</p>
      </div>

      <div className='infoSolutions__box-item'>
        <h3 className='infoSolutions__title'>Важно:</h3>
        <p className='infoSolutions__text'>В техническую поддержку включено реагирование на экстренные ситуации в течение 2 часов, но не более 2 часов в месяц</p >

        <p className='infoSolutions__text'>В администрирование включено: мониторинг работоспособности сервера, еженедельная проверка на вирусы(1 раз в неделю), еженедельное создание бэкапа.</p>

        <p className='infoSolutions__text'>Указанная стоимость не является окончательной, расчет предоставлен исходя из следующих параметров: 6 - Core, 64 Гб - RAM, 1010 Гб - NVMe. </p>
      </div>

    </div>
  );
}

export default InfoSolutions;