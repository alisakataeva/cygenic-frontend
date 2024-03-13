import React from 'react';
import { useGetadvantagesSmmQuery, useGetWorkProcessSmmQuery } from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import WorkProcess from '../../../../components/Advertising/WorkProcess/WorkProcess';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import OneIcon from '../../../../assets/icons/1.svg';
import TwoIcon from '../../../../assets/icons/2.svg'; 
import ThreeIcon from '../../../../assets/icons/3.svg'; 
import FourIcon from '../../../../assets/icons/4.svg';


import './SmmPage.css';

function SmmPage(props) {

  const { data: advantagesSmm, error: errorAdvantagesSmm, isLoading: isLoadingAdvantagesSmm } = useGetadvantagesSmmQuery();

  const { data: workProcessSmm, error: errorWorkProcessSmm, isLoading: isLoadingWorkProcessSmm } = useGetWorkProcessSmmQuery();

  

  if (errorAdvantagesSmm || errorWorkProcessSmm) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingAdvantagesSmm || isLoadingWorkProcessSmm) {
    return <h1>'...Loading'</h1>;
  }

  const arrImgWorkProcess = [OneIcon, TwoIcon, ThreeIcon, FourIcon] 


  return (
    <div className='developmentPage__container'>
      <BreadCrumbs text={'SMM продвижение'} />

      <section className='developmentPage__box'>
        <div className='container'>
          <BannerVideo header={'SMM продвижение'} classHeaderBanner={'smmPage__header-banner'} />
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <WorkProcess title={'Процесс работы:'} workProcess={workProcessSmm.workProcessSmm} arrImgWorkProcess={arrImgWorkProcess}/>
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <Advantages header={'Почему нужно выбрать нас?'} advantagesArr={advantagesSmm?.advantagesSmm} countItem={3} />
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <FormComponent header={'Оставить заявку на продвижение'} text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'} />
        </div>
      </section>


    </div>
  );
}

export default SmmPage;