import React from 'react';

import { useGetRentSolutionsQuery } from '../../../../redux/api';

import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';

import BannerSolutions from '../../../../components/Solutions/BannerSolutions/BannerSolutions';
import DescriptionSolutuons from '../../../../components/Solutions/DescriptionSolutuons/DescriptionSolutuons';
import RentSolutions from '../../../../components/Solutions/RentSolutions/RentSolutions';
import InfoSolutions from '../../../../components/Solutions/InfoSolutions/InfoSolutions';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import './ServerStorage.css';

function ServerStorage(props) {

  const { data: rentSolutions, error: errorRentSolutions, isLoading: isLoadingRentSolutions } = useGetRentSolutionsQuery();


  return (
    
    <div className='developmentPage__container'>
      <BreadCrumbs text={'Серверное хранение и поддержка'} />

      <section className='developmentPage__box'>
          <BannerSolutions />
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <DescriptionSolutuons />
        </div>
      </section>


      <section className='developmentPage__box'>
        <div className='container'>
          <RentSolutions rentSolutions={rentSolutions?.rentSolutions} />
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <InfoSolutions />
        </div>
      </section>


      <section className='developmentPage__box'>
        <div className='container'>
          <FormComponent header={'Мы работаем - вы растете'} text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'} />        </div>
      </section>
      
    </div>

  );
}

export default ServerStorage;