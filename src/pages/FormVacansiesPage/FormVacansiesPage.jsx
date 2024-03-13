import React from 'react';

import FormVacancies from '../../components/VacanciesPage/FormVacancies/FormVacancies';
import './FormVacansiesPage.css';


function FormVacansiesPage(props) {
  return (

    <div className='formVacanciesPage__container'>
        <div className='container'>
          <FormVacancies/>
      </div>
    </div>
  );
}

export default FormVacansiesPage;