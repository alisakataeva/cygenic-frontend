import React from 'react';
import BannerSolutionsImg from '/images/solutions/bannerSolutions.jpg';
import './BannerSolutions.css';

function BannerSolutions(props) {
  return (
    <>
      <div className='banneSolutions__box'>
        <img className='banneSolutions__img-banner' src={BannerSolutionsImg} alt="" />
        <h1 className='banneSolutions__header'>Серверное хранение и поддержка</h1>
      </div>
    </>
  );
}

export default BannerSolutions;
