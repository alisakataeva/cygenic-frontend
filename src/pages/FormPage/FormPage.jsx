import React from 'react';

import FormComponent from '../../components/FormComponent/FormComponent';
import './FormPage.css';

function FormPage(props) {
  return (

      <div className='writeToTheDirector__container'>
        <div className='container'>

          <div className='writeToTheDirector__form'>
            <FormComponent header='Оставьте заявку' />
          </div>
        </div>
      </div>
    );
  }


export default FormPage;