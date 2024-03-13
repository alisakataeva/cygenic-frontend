import React, {useState, useEffect} from 'react';

import MoreIcon from '../../../assets/icons/more.svg';
import {Link} from 'react-router-dom';

import './PortfolioList.css';

function PortfolioList({title, text, linkPortfolio, portfolioList, loading}) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 660);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='portfolio__nav'>
                <div className='portfolio__nav-box'>
                    {title && <h2 className='portfolio__nav-title'>{title}</h2>}

                    {isMobile && portfolioList &&
                        <Link to={'/portfolio'} className='portfolio__nav-link'>
                            <span className='portfolio__nav-icon-text'>Посмотреть портфолио</span>
                            <img className='portfolio__nav-icon' src={MoreIcon} alt=""/>
                        </Link>
                    }

                    {text && <h3 className='portfolio__nav-text'>{text}</h3>}
                </div>

                {!isMobile && linkPortfolio &&
                    <Link to={'/portfolio'} className='portfolio__nav-link'>
                        <span className='portfolio__nav-icon-text'>Посмотреть портфолио</span>
                        <img className='portfolio__nav-icon' src={MoreIcon} alt=""/>
                    </Link>
                }
            </div>

            <ul className='portfolio__list'>
                {loading
                    ? <>
                        <div className={'portfolio__skeleton'}></div>
                        <div className={'portfolio__skeleton'}></div>
                    </>
                    : <>
                        {portfolioList?.map((item, index) => (

                                <li
                                    key={index} className='portfolio__item'
                                    style={{
                                        backgroundImage: `url(${item.attributes.img.data.attributes.url})`,
                                        backgroundSize: 'cover'
                                    }}
                                >
                                    <Link to={`/portfolio/${item.attributes.slug}`} className='portfolio__item-link'>
                                        <div className='portfolio__item-logo-box'>
                                            <img className='portfolio__item-logo'
                                                 src={item.attributes.logo.data.attributes.url}
                                                 alt={`логотип ${item.attributes.title}`}/>
                                        </div>
                                        <div className='portfolio__item-list-service'>
                                            {item.attributes.services.data.map((item) => {
                                                return <div className='portfolio__item-service'
                                                            key={item.attributes.slug}>
                                                    {item.attributes.name}
                                                </div>
                                            })}</div>
                                    </Link>
                                </li>
                        ))}
                    </>
                }
            </ul>
        </>
    );
}

export default PortfolioList;
