import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useGetMenuQuery } from '../../redux/api';

import ModalServices from '../ModalServices/ModalServices';

import logo from '../../assets/icons/logo-desktop.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsup from '../../assets/icons/whatsup.svg';
import youtube from '../../assets/icons/youtube.svg';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import cIcon from '../../assets/icons/c.svg';

import './Header.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../utils/useFetchFromStrapi.js";

const Header = ({data1}) => {

  const { data: serviceMenu} = useQuery({
    queryKey: ['serviceMenu'],
    queryFn: () => axiosInstance('services', 'populate=*')
  })
  const serviceMenuData = serviceMenu?.data

  // console.log('headerdata', data);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(widthScreen > 660);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [activeMenuLink, setActiveMenuLink] = useState('');


  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
      if (window.innerWidth > 660) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (widthScreen <= 660) {
      setIsMenuOpen(!isMenuOpen);
    }
  }

  const handleModalClose = () => {
    setIsHoveringServices(false);
  }

  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo-box">
            <Link to="/" className="logo">
              <img src={data1?.logo.img.data.attributes.url} alt="logo icon" className="logo__image" />
            </Link>
            {isMenuOpen ? (
              <button className="btn_close" onClick={handleMenuToggle}>
                  <img src={closeIcon} alt="close icon" className="menu-btn__image" />
              </button>
            ) : (
              <button className="btn_burger" onClick={handleMenuToggle}>
                    <img src={menuIcon} alt="menu icon" className="menu-btn__image" />
              </button>
            )}
          </div>
          {isMenuOpen && (
            <nav className="menu">
              <ul className="menu__list">
                  <li className={`menu__item ${activeMenu === 'services' ? 'active' : ''}`}>
                    <Link
                      className="menu__link"
                      onClick={(e) => {
                          setIsHoveringServices(true);
                          // setActiveMenu('services');
                          setActiveMenuLink('/services');
                      }}
                    >
                      Услуги
                    </Link>
                  {isHoveringServices && (
                      <ModalServices show={isHoveringServices} onClose={handleModalClose} setIsHoveringServices={setIsHoveringServices} activeMenuLink={activeMenuLink} activeMenu={activeMenu} handleMenuToggle={handleMenuToggle} >

                        <div className='menu__modal-container'>
                          <div className="menu-modal__content-box ">
                            {serviceMenuData?.map((item, i) => {
                              return (
                                <div key={i} className="menu-modal__item" onClick={handleModalClose}>
                                  <a className='menu-modal__item-title'>{item.attributes.name}</a>
                                  <div className='menu-modal__item-box'>
                                    {item?.attributes.serviceSub.map((subItem, j) => {
                                      return (
                                        <Link className='menu-modal__item-link' key={j} to={subItem.link}>{subItem.title}</Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          </div>

                    </ModalServices>
                  )}
                </li>
                <li className={`menu__item ${activeMenu === 'portfolio' ? 'active' : ''}`}>
                    <Link
                      onClick={(e) => {
                        setActiveMenu('portfolio');
                        setActiveMenuLink('/portfolio');

                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to="/portfolio"
                      className="menu__link"
                    >
                      Портфолио
                    </Link>
                </li>
                <li className={`menu__item ${activeMenu === 'catalog' ? 'active' : ''}`}>
                    <Link
                      onClick={(e) => {
                        setActiveMenu('catalog');
                        setActiveMenuLink('/catalog');

                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to="/catalog"
                      className="menu__link"
                    >
                      Каталог
                    </Link>
                </li>
                <li className={`menu__item ${activeMenu === 'about' ? 'active' : ''}`}>
                  <Link
                    onClick={(e) => {
                      setActiveMenu('about');
                      setActiveMenuLink('/about');
                      if (widthScreen <= 660) {
                        setIsMenuOpen(false);
                      }
                    }}
                    to="about"
                    className="menu__link"
                  >
                    О компании
                  </Link>
                </li>
                <li className={`menu__item ${activeMenu === 'vacancies' ? 'active' : ''}`}>
                  <Link
                    onClick={(e) => {
                      setActiveMenu('vacancies');
                      setActiveMenuLink('/vacancies');
                      if (widthScreen <= 660) {
                        setIsMenuOpen(false);
                      }
                    }}
                    to="/vacancies"
                    className="menu__link"
                  >
                    Вакансии
                  </Link>
                </li>
                <li className={`menu__item ${activeMenu === 'contacts' ? 'active' : ''}`}>
                  <Link
                    onClick={(e) => {
                      setActiveMenu('contacts');
                      setActiveMenuLink('/contacts');

                      if (widthScreen <= 660) {
                        setIsMenuOpen(false);
                      }
                    }}
                    to="/contacts"
                    className="menu__link"
                    >
                    Контакты
                  </Link>
                </li>
                <li className="menu__item">
                  <div className="menu__item-container">
                    <div className="menu__item-box">
                      <img src={phone} alt="phone icon" className="menu__icon" />
                      <Link className="menu__item-box--text" to="tel:+73242332834">+7 (324) 23-32-834</Link>
                    </div>
                    <div className="menu__item-box">
                      <img src={email} alt="email icon" className="menu__icon" />
                      <Link className="menu__item-box--text" to="mailto:info@info@mail.ru">info@info@mail.ru</Link>
                    </div>
                  </div>
                </li>
                <li className="menu__item">
                  <div className="menu__item-container-social">
                    <Link href="https://t.me/YourUsername">
                      <img src={telegram} alt="social logo telegram" className="menu__social-icon" />
                    </Link>
                    <Link href="https://wa.me/YourPhoneNumber">
                      <img src={whatsup} alt="social logo whatsup" className="menu__social-icon" />
                    </Link>
                    <Link href="https://youtube.com/YourChannelName">
                      <img src={youtube} alt="social logo youtube" className="menu__social-icon" />
                    </Link>
                  </div>
                </li>
                <li className="menu__item">
                  <div className="menu__item-box">
                      <img src={cIcon} alt="icon c" className="menu-c__image" />
                    <span>Cygenic 2023 г.</span>
                  </div>
                </li>
                <li className="menu__item">
                  <Link to="/form" className="menu__link menu__link--cta">
                    Оставить заявку
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className='header__line'></div>
        </div>
      </header>
    </>
  );
};

export default Header;
