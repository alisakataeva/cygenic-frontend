import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ArroDownIcon from '../../../assets/icons/arrow-down.svg';
import './WhatCanWeDo.css';

function WhatCanWeDo({menu}) {
    const [activeMenu, setActiveMenu] = useState(new Array(menu.length).fill(false));
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeItem, setActiveItem] = useState(null);

    const toggleList = (index) => {
        if (windowWidth <= 660) {
            setActiveMenu(activeMenus => activeMenus.map((active, i) => i === index ? !active : active));
        }
    };

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
        toggleList(index);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth <= 660) {
            setActiveMenu(new Array(menu.length).fill(false));
        } else {
            setActiveMenu(new Array(menu.length).fill(true));
        }
    }, [windowWidth, menu.length]);

    return (
        <>
            <h2 className='whatCanWeDo__header'>Что мы умеем</h2>
            <p className='whatCanWeDo__sub-header'>Начните работу с нами от написания технического задания до поддержки
                и развития вашего продукта. Например, создавая сайт мы можем дополнительно написать для него текст,
                создать дизайн упаковки продукции, интегрировать Битрикс 24.</p>

            <div className='whatCanWeDo__box'>
                {menu?.map((item, index) => {
                    return (
                        <div key={index} className="menu-modal__item-whatCanWeDo">
                            <div className='menu-modal__item-title-box' onClick={() => handleItemClick(index)}>
                                <p className={`menu-modal__item-title ${activeItem === index ? 'active' : ''}`}>{item.attributes.name}</p>
                                <img className={`menu-modal__item-title-icon ${activeItem === index ? 'rotated' : ''}`}
                                     src={ArroDownIcon} alt=""/>
                            </div>
                            {(windowWidth > 660 || activeMenu[index]) && (
                                <div className='menu-modal__item-box'>
                                    {item.attributes.serviceSub.map((subItem, j) => {
                                        return (
                                            <Link className='menu-modal__item-link' key={j}
                                                  to={subItem.link}>{subItem.title}</Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default WhatCanWeDo;
