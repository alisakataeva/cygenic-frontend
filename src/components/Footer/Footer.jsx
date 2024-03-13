import React, {useState, useEffect} from 'react';

import {useGetMenuQuery} from '../../redux/api';
import LogoFooterIcon from '../../assets/icons/logo-footer.svg';
import {Link} from 'react-router-dom';
import ModalServices from '../ModalServices/ModalServices';

import cIcon from '../../assets/icons/c.svg';
import './Footer.css'

export const Footer = ({data1}) => {

    const {data, error, isLoading} = useGetMenuQuery();


    // console.log('footerdata', data);

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
        <div className='footer'>
            <div className='container'>

                <div className='footer__container'>

                    <ModalServices show={isHoveringServices} onClose={handleModalClose}
                                   setIsHoveringServices={setIsHoveringServices} activeMenuLink={activeMenuLink}
                                   activeMenu={activeMenu} handleMenuToggle={handleMenuToggle}>

                        <div className='menu__modal-container'>
                            <div className="menu-modal__content-box ">
                                {data && data.menu && Array.isArray(data.menu) && data.menu.map((item, i) => {
                                    return (
                                        <div key={i} className="menu-modal__item" onClick={handleModalClose}>
                                            <a className='menu-modal__item-title' to={item.link}>{item.title}</a>
                                            <div className='menu-modal__item-box'>
                                                {item.submenu.map((subItem, j) => {
                                                    return (
                                                        <Link className='menu-modal__item-link' key={j}
                                                              to={subItem.link}>{subItem.title}</Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </ModalServices>


                    <div className='footer__box' id='item1'>
                        <Link className='footer__link' to="/">
                            <img src={data1?.logo.img.data.attributes.url} alt='Логотип'/>
                        </Link>
                        <p className='footer__title'>{data1?.logo.title}</p>
                    </div>


                    <div className='footer__box' id='item2'>
                        <div className='footer__item'>
                            <Link
                                className='footer__link'
                                to="/services"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setIsHoveringServices(true);
                                }}
                            >
                                Услуги
                            </Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/portfolio">Портфолио</Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/about">О компании</Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/vacancies">Вакансии</Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/contacts">Контакты</Link>
                        </div>
                    </div>

                    <div className='footer__box' id='item3'>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/privacy">Политика конфиденциальности</Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/terms">Пользовательское соглашение</Link>
                        </div>
                        <div className='footer__item'>
                            <Link className='footer__link' to="/return">Условия возврата</Link>
                        </div>
                    </div>

                    <div className='footer__box' id='item4'>
                        <Link to='/form' className='footer__form-btn'>{data1?.button.text}</Link>
                    </div>

                </div>


                <div className='footer__container'>

                    <div className='footer__box-2'>
                        <p className='footer__text'>{data1?.info}</p>
                    </div>

                    <div className='footer__box-2'>
                        <img className='footer__icon' src={cIcon}/>
                        <span className='footer__text'>Cygenic 2023 г.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;

