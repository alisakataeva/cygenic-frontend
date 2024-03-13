import React from 'react';
import './DescriptionSolutuons.css';

function DescriptionSolutuons(props) {
  return (
    <div className='descriptionSolutuons__box'>

      <div className='descriptionSolutuons__box-item'>
        <h2 className='descriptionSolutuons__title'>Что включает обслуживание ЦОД (SAN)</h2>

        <p className='descriptionSolutuons__text'>Cygenic обслуживает СХД на каждом этапе:</p>

        <p className='descriptionSolutuons__text'>Проектируем системы хранения данных, подбираем оборудование SAN, внедряем и подключаем все компоненты.</p>

        <p className='descriptionSolutuons__text'>Проводим комплексный аудит ИТ-систем и имеющихся СХД, находим проблемы и уязвимости.</p>

        <p className='descriptionSolutuons__text'>Следим за бесперебойной работой всех участков SAN, выявляем пиковые нагрузки и предупреждаем сбои.</p>

        <p className='descriptionSolutuons__text'>Выполняем замену неисправного оборудования, модернизацию и масштабирование под ваши потребности.</p>
      </div>

      <div className='descriptionSolutuons__box-item'>
        <h2 className='descriptionSolutuons__title'>Преимущества обслуживания в Cygenic</h2>

        <p className='descriptionSolutuons__text'>Мы поэтапно реализуем все преимущества ...</p>

        <p className='descriptionSolutuons__text'>Мы специализируемся на ИТ-решениях с применением собственных разработок в области ПО и хранения данных, осуществляем поддержку систем SAN в рамках собственного холдинга и других крупных ИТ-корпораций.</p>

        <p className='descriptionSolutuons__text'>Опираемся на обширную аналитическую базу и работаем по отлаженным схемам для компаний разного масштаба и сферы деятельности.</p>

        <p className='descriptionSolutuons__text'>Работаем с крупными поставщиками сетевого оборудования на выгодных условиях.</p>
      </div>
    </div>
  );
}

export default DescriptionSolutuons;