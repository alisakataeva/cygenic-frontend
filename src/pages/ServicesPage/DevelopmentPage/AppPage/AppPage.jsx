import React from 'react';

import {useGetAdvantagesWebsiteQuery, useGetPortfolioListQuery} from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import PortfolioList from '../../../../components/Portfolio/PortfolioList/PortfolioList';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import './AppPage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../../../utils/useFetchFromStrapi.js";

function AppPage(props) {

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['projects', 'design'],
        queryFn: () => axiosInstance('projects', `populate=*`)
    })
    const {
        data: advantagesWebsite,
        error: errorAdvantagesWebsite,
        isLoading: isLoadingAdvantagesWebsite
    } = useGetAdvantagesWebsiteQuery();

    return (
        <div className='developmentPage__container'>

            <BreadCrumbs text={'Разработка приложений'}/>

            <section className='developmentPage__box'>
                <div className='container'>
                    <BannerVideo header={'Разработка приложений'} classHeaderBanner={'appPage__header-banner'}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <PortfolioList
                        title={'Разработаем десктопное или мобильное приложение'}
                        text={'Ускорив и упростив коммуникацию и формирование заказов'}
                        linkPortfolio={true}
                        sort={true} portfolioList={portfolioList?.data} loading={isLoading}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему нужно выбрать нас?'}
                                advantagesArr={advantagesWebsite?.advantagesWebsite} countItem={3}/>
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

export default AppPage;