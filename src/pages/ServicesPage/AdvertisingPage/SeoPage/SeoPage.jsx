import React from 'react';

import { useGetadvantagesSeoQuery, useGetWorkProcessSeoQuery } from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import WorkProcess from '../../../../components/Advertising/WorkProcess/WorkProcess';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import OneIcon from '../../../../assets/icons/1.svg';
import TwoIcon from '../../../../assets/icons/2.svg'; 
import ThreeIcon from '../../../../assets/icons/3.svg'; 
import FourIcon from '../../../../assets/icons/4.svg';


import './SeoPage.css';

function SeoPage(props) {

  const { data: advantagesSeo, error: errorAdvantagesSeo, isLoading: isLoadingAdvantagesSeo } = useGetadvantagesSeoQuery();
  const { data: workProcessSeo, error: errorWorkProcessSeo, isLoading: isLoadingWorkProcessSeo } = useGetWorkProcessSeoQuery();

  

  if (errorAdvantagesSeo || errorWorkProcessSeo) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingAdvantagesSeo || isLoadingWorkProcessSeo) {
    return <h1>'...Loading'</h1>;
  }

  const arrImgWorkProcess = [OneIcon, TwoIcon, ThreeIcon, FourIcon] 

  return (
    <div className='seo__container'>
      <BreadCrumbs text={'SEO продвижение'} />

      <section className='developmentPage__box'>
        <div className='container'>
          <BannerVideo header={'SEO продвижение'} classHeaderBanner={'seoPage__header-banner'} />
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <WorkProcess title={'Процесс работы:'} workProcess={workProcessSeo.workProcessSeo} arrImgWorkProcess={arrImgWorkProcess}/>
        </div>
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <Advantages header={'Почему нужно выбрать нас?'} advantagesArr={advantagesSeo?.advantagesSeo} countItem={3} />
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

export default SeoPage;