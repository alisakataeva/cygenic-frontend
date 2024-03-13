import React from 'react';

import { useGetTarrifsQuery } from '../../../../redux/api';


import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import Tarrifs24 from '../../../../components/IntegrationBitrix24Page/Tarrifs24/Tarrifs24';
import Partner24 from '../../../../components/IntegrationBitrix24Page/Partner24/Partner24';

import './IntegrationBitrix24Page.css';

function IntegrationBitrix24Page(props) {

  const { data: tarrifs, error: errorTarrifs, isLoading: isLoadingTarrifs } = useGetTarrifsQuery();

  if (errorTarrifs) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingTarrifs) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <>
      <BreadCrumbs text={'Bitrix24'} />

      <div className='developmentPage__container'>


        <section className='developmentPage__box'>
          <div className='container'>
            <BannerVideo header={'Bitrix24'} classHeaderBanner={'integrationBitrix24Page__header-banner'} />
          </div>
        </section>


        <section className='developmentPage__box'>
          <div className='container'>
            <Tarrifs24 tarrifs={tarrifs.tarrifs}/>
          </div>
        </section>

        <section className='developmentPage__box'>
          <div className='container'>
            <Partner24 />
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

export default IntegrationBitrix24Page;