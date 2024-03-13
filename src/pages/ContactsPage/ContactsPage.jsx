import React from 'react';
import Сontacts from '../../components/ContactsPage/Contacts/Contacts';
import FormComponent from '../../components/FormComponent/FormComponent';
import VideoBigContent from '../../assets/video/video-big.mp4' // вынесено

import './ContactsPage.css';

function ContactsPage(props) {



  return (
    <div className='сontacts__container'>
      
      <video className='bigVideo' width="100%" loop autoPlay muted>
        <source src={VideoBigContent} type="video/mp4" />
      </video>

      <section className='сontacts'>
        <div className='container'>
          <Сontacts />
        </div>
      </section>

      <section className='сontactsForm'>
        <div className='container'>
          <FormComponent header={'Мы работаем - вы растете'} text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'} />
        </div>
      </section>

    </div>
  );
}

export default ContactsPage;