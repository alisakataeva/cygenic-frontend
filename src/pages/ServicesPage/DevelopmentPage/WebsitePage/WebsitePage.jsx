import React from 'react';

import {useGetAdvantagesDevelopWebsiteQuery, useGetPortfolioListQuery} from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import PortfolioList from '../../../../components/Portfolio/PortfolioList/PortfolioList';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';


import './WebsitePage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../../../utils/useFetchFromStrapi.js";

function WebsitePage(props) {

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['projects', 'design'],
        queryFn: () => axiosInstance('projects', `populate=*`)
    })

    const {
        data: advantagesDevelopWebsite,
        error: errorAdvantagesDevelopWebsite,
        isLoading: isLoadingAdvantagesDevelopWebsite
    } = useGetAdvantagesDevelopWebsiteQuery();

    return (
        <div className='developmentPage__container'>

            <BreadCrumbs text={'Разработка сайтов'}/>

            <section className='developmentPage__box'>
                <div className='container'>
                    <BannerVideo header={'Разработка сайтов'} classHeaderBanner={'websitePage__header-banner'}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <PortfolioList
                        title={'Разработаем дизайн и функционал с нуля или усовершенствуем ваш существующий'}
                        text={'Клиенты будут находить вас быстрее, а коммуникация с ними станет надежной и продуктивной'}
                        linkPortfolio={true}
                        sort={true} portfolioList={portfolioList?.data} loading={isLoading}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему нужно выбрать нас?'}
                                advantagesArr={advantagesDevelopWebsite?.advantagesDevelopWebsite} countItem={3}/>
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

export default WebsitePage;