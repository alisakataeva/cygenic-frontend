
import React, { useRef, useEffect, useState } from 'react';

import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import IMask from 'imask';
import ModalForm from "../../components/ModalForm/ModalForm";

import './FormComponent.css';

function FormComponent({ header, text }) {

  const [chatId, setChatId] = useState('-1001820850326');
  const [modalOpen, setIsModalOpen] = useState(false);

  const sendMessage = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN
    let name = values.name;
    let phone = values.phone;
    const text = `Name: ${name}, Phone: ${phone}`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setIsModalOpen(true);
          resetForm();
        } else {
          console.error("Failed to send message", data);
        }
      });
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    phone: Yup.string()
      .matches(
        /^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
        'Формат телеофна +7 (xxx) xxx-xx-xx'
      )
      .required('Обязательное поле'),
  });


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    sendMessage(values, resetForm);
    setSubmitting(false);
    resetForm();
  };

  const MyInputField = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);
    const inputRef = useRef();

    useEffect(() => {
      const maskOptions = {
        mask: '+{7} (000) 000-00-00',
      };
      const mask = IMask(inputRef.current, maskOptions);
      mask.on('accept', () => helpers.setValue(mask.value));

      // Clean up
      return () => {
        mask.destroy();
      };
    }, [helpers]);

    return <input {...field} ref={inputRef} className="form__form-input" placeholder="Телефон" />
  };


  return (
    <div className='form__container'>
      {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}

      <p className='form__form-title'>{header}</p>
      <p className='form__form-text'>{text}</p>
      <div className='form__box'>

        <Formik
          initialValues={{ name: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='form__form'>
              <label className="form__form-label">
                <Field type="text" name="name" className="form__form-input" placeholder="Имя" />
                <ErrorMessage name="name" component="div" className="form__form-error" />
              </label>
              <label className="form__form-label">
                <MyInputField type="tel" name="phone" />
                <ErrorMessage name="phone" component="div" className="form__form-error" />
              </label>
              <button type="submit" disabled={isSubmitting} className="form__form-btn">
                Заказать звонок
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponent;