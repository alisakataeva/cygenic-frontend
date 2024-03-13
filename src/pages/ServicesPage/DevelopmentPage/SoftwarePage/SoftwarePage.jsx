import React from 'react';

import {useGetAdvantagesSoftwareQuery, useGetPortfolioListQuery} from '../../../../redux/api';

import BannerVideo from '../../../../components/Integration/BannerVideo/bannerVideo';
import PortfolioList from '../../../../components/Portfolio/PortfolioList/PortfolioList';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import './SoftwarePage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../../../utils/useFetchFromStrapi.js";


function SoftwarePage(props) {

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['projects', 'design'],
        queryFn: () => axiosInstance('projects', `populate=*`)
    })

    const {
        data: advantagesSoftware,
        error: erroradvantagesSoftware,
        isLoading: isLoadingAadvantagesSoftware
    } = useGetAdvantagesSoftwareQuery();

    return (
        <div className='developmentPage__container'>

            <BreadCrumbs text={'Разработка ПО'}/>

            <section className='developmentPage__box'>
                <div className='container'>
                    <BannerVideo header={'Разработка ПО'} classHeaderBanner={'softwarePage__header-banner'}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <PortfolioList title={'Упростим и автоматизируем бизнес-процессы'}
                                   text={'Внедрив в работу системы управления, личные кабинеты и дашборды'}
                                   linkPortfolio={true}
                                   sort={true} portfolioList={portfolioList?.data} loading={isLoading}
                    />
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему нужно выбрать нас?'}
                                advantagesArr={advantagesSoftware?.advantagesSoftware} countItem={3}/>
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

export default SoftwarePage;