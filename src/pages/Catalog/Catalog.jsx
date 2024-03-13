import React from 'react';

import ShoppingCartIcon from '../../assets/icons/shopping-cart.svg';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

import './Catalog.css';

function Catalog(props) {
    const products = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="catalogPage__container">

            <BreadCrumbs text="Офисная техника и комплектующие" />

            <div className='catalogPage__box'>
                <div className="container">
                    <div className="catalog__list">

                    {products.map((no) => (
                        <div className="catalog__item" key={no}>
                            <div className="catalogProduct__container">
                                <div className="catalogProductPhoto__container">
                                    <div className="catalogProductPhoto">
                                        <img className='catalogProductPhoto__img' src="/images/equipment/3.jpg" />
                                    </div>
                                </div>
                                <div className="catalogProductFullName">
                                    Apple M1, 4x2 ГГц, IPS, 4480х2520, 8 ГБ LPDDR4X, SSD 256 ГБ, macOS
                                </div>
                                <div className="catalogProductPrice__container">
                                    <div className="catalogProductPrice__actual">17 699 ₽</div>
                                    <div className="catalogProductPrice__old">17 699 ₽</div>
                                </div>
                                <div className="catalogProductBasket__container">
                                    <button className="catalogProductBasket__add">
                                        <img src={ShoppingCartIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    </div>

                    <div className="catalog__action">
                        <button type="submit" className="catalog__action-btn">
                            Показать еще
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Catalog;