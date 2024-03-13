import React from 'react';

import { useGetVacanciesQuery } from '../../redux/api';

import WorkingAtCygenic from '../../components/VacanciesPage/WorkingAtCygenic';
import FormVacancies from '../../components/VacanciesPage/FormVacancies/FormVacancies';
import VideoBigContent from '../../assets/video/video-big.mp4'

import './VacanciesPage.css';

function VacanciesPage(props) {

  const { data: vacancies, error: errorVacancies, isLoading: isLoadingVacancies } = useGetVacanciesQuery();

  if (errorVacancies) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingVacancies) {
    return <h1>'...Loading'</h1>;
  }

  
  return (
    <div className='vacancies__container'>
      
      <video className='bigVideo' width="100%" loop autoPlay muted>
        <source src={VideoBigContent} type="video/mp4" />
      </video>

      <section className='vacancies'>
        <div className='container'>
          <WorkingAtCygenic vacancies={vacancies.vacancies}/>
        </div>
      </section>

      <section className='formVacancies'>
        <div className='container'>
          <FormVacancies />
        </div>
      </section>

    </div>
  );
}

export default VacanciesPage;