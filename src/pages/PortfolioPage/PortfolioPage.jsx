import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';
import FormComponent from '../../components/FormComponent/FormComponent';
import VideoBigContent from '../../assets/video/video-big.mp4'

import './PortfolioPage.css';

function PortfolioPage(props) {
  return (
    <div className='portfolio__container'>
      <div className='container'>

        <video className='bigVideo' width="100%" loop autoPlay muted>
          <source src={VideoBigContent} type="video/mp4" />
        </video>
        
        <section className='portfolio'>
          <Portfolio />
        </section>

        <section className='portfolio__form'>
          <h2 className='portfolio__form-header'>Хотите реализовать подобный проект?</h2>
          <p className='portfolio__form-sub-header'>Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи</p>
          <FormComponent textHeader={''} />
        </section>


      </div>

    </div>
  );
}

export default PortfolioPage;