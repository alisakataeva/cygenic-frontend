import React from 'react';
import {useGetAdvantagesWebDesingQuery} from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import PortfolioList from '../../../../components/Portfolio/PortfolioList/PortfolioList';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';


import './WebDesignPage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../../../utils/useFetchFromStrapi.js";

function WebDesignPage(props) {

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['projects', 'design'],
        queryFn: () => axiosInstance('projects', `populate=*&[filters][services][slug]=design`)
    })

    const {
        data: advantagesWebDesing,
        error: errorAdvantagesWebDesing,
        isLoading: isLoadingAdvantagesWebDesing
    } = useGetAdvantagesWebDesingQuery();

    return (
        <div className='developmentPage__container'>
            <BreadCrumbs text={'Веб-дизайн'}/>

            <section className='developmentPage__box'>
                <div className='container'>
                    <BannerVideo header={'Веб-дизайн'} classHeaderBanner={'webDesignPage__header-banner'}/>
                </div>
            </section>


            <section className='developmentPage__box'>
                <div className='container'>
                    <PortfolioList
                        title={'Разработаем уникальный стиль, который продаёт'}
                        // text={'Клиенты будут находить вас быстрее, а коммуникация с ними станет надежной и продуктивной'}
                        linkPortfolio={true}
                        sort={true} portfolioList={portfolioList?.data} loading={isLoading}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему нужно выбрать нас?'}
                                advantagesArr={advantagesWebDesing?.advantagesWebDesing} countItem={4}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <FormComponent header={'Мы работаем - вы растете'}
                                   text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'}/>
                </div>
            </section>


        </div>
    );
}

export default WebDesignPage;