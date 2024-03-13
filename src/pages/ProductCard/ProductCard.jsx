import React from 'react';
import { Link } from 'react-router-dom';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ShoppingCartIcon from '../../assets/icons/shopping-cart.svg';

import './ProductCard.css';

function ProductCard(props) {

    return (
        <div className="productPage__container">

            <BreadCrumbs text="ПК iMac 24’" />

            <section className="productCard productPage__box">
                <div className="container">
                    <div className="product__header">
                        ПК iMac 24’
                    </div>
                    <div className="productCard__container">

                        <div className="productPhoto__container">
                            <div className="productPreview__wrapper">
                                <div className="productPreview__list">
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                    <div className="productPreview__item">
                                        <img className='productPreview__item-img' src="/images/equipment/3.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="productPhoto">
                                <img className='productPhoto__img' src="/images/equipment/3.jpg" />
                            </div>
                        </div>

                        <div className="productInfo__container">

                            <div className="productLogo">
                                <img className='productLogo__img' src="/images/equipment/appleLogo.png" />
                            </div>

                            <div className="productFullName">
                                Apple M1, 4x2 ГГц, IPS, 4480х2520, 8 ГБ LPDDR4X, SSD 256 ГБ, macOS
                            </div>

                            <div className="productPayment__container">
                                    <div className="productPrice__container">
                                        <div className="productPrice__actual">17 699 ₽</div>
                                        <div className="productPrice__old">17 699 ₽</div>
                                    </div>
                                    <Link to="/" className="productPayment__action">
                                        Купить
                                    </Link>
                                <div className="productPayment__box">
                                    <div className="productQuantity__container">
                                        <button className="productQuantity__minus">-</button>
                                        <div className="productQuantity__value">1</div>
                                        <button className="productQuantity__plus">+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="productBasket__container">
                                <button className="productBasket__add">
                                    <img src={ShoppingCartIcon} alt="" />
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="productSpec productPage__box">
                <div className="container">
                    <div className="productSpec__container">
                        <div className="productSpec__header">
                            Характеристики 24" Моноблок Apple iMac [MJV83RU/A]
                        </div>
                        <div className="productSpec__list">
                            <div className="productSpec__item">
                                <div className="productSpec__name">Гарантия продавца / производителя</div>
                                <div className="productSpec__value">12 мес.</div>
                            </div>
                            <div className="productSpec__item">
                                <div className="productSpec__name">Страна-производитель</div>
                                <div className="productSpec__value">Китай</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductCard;