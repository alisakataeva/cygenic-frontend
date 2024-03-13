import React from 'react';

import './Banner.css';
import {Link} from "react-router-dom";

function Banner({ BannerEquipmentImg, header }) {
  return (
    <div className='bannerEquipment__box'>
      <img className='bannerEquipment__img-banner' src={BannerEquipmentImg} alt="" />
      <div className='bannerEquipment__content'>
        <div className='container'>
          <h1 className='bannerEquipment__header'>{header}</h1>
            <Link to="/form" className='bannerEquipment__btn'>Оставить заявку</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
