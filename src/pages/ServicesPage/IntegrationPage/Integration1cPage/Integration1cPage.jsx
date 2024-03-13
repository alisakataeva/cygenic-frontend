import React from 'react';

import { useGetVersions1cQuery } from '../../../../redux/api';

import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo'; // вынесено
import Versions1c from '../../../../components/Integration/Versions1c/Versions1c';
import Description1c from '../../../../components/Integration/Description1c/Description1c';
import FormComponent from '../../../../components/FormComponent/FormComponent';


import './Integration1cPage.css';

function Integration1cPage(props) {

  const { data: versions1c, error: errorVersions1c, isLoading: isLoadingVersions1c } = useGetVersions1cQuery();

  if (errorVersions1c) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingVersions1c) {
    return <h1>'...Loading'</h1>;
  }


  return (
    <>

      <BreadCrumbs text={'1C'}/>

      <div className='developmentPage__container'>

        <section className='developmentPage__box'>
          <div className='container'>
            <BannerVideo header={'1C'} classHeaderBanner={'integration1cPage__header-banner'}/>
          </div>
        </section>

        <section className='developmentPage__box'>
          <div className='container'>
            <Versions1c versions1c={versions1c.versions1c} />
          </div>
        </section>

        <section className='developmentPage__box'>
          <div className='container'>
            <Description1c />
          </div>
        </section>

        <section className='developmentPage__box'>
          <div className='container'>
            <FormComponent header={'Мы работаем - вы растете'} text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'} />
          </div>
        </section>

      </div>
    </>
  );
}

export default Integration1cPage;