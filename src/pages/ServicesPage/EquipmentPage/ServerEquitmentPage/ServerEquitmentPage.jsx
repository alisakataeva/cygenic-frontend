import React from 'react';

import {
    useGetAdvantagesServerQuery, useGetServerEquipmentPartnersQuery, useGetServerEquipmentQuery
} from '../../../../redux/api';

import Banner from '../../../../components/Equipment/Banner/Banner';
import List from '../../../../components/Equipment/List/List';
import Partners from '../../../../components/Equipment/Partners/Partners';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';

import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import BannerServerImg from '/images/server/bannerServer.jpg';
function ServerEquitmentPage(props) {

    const {
        data: advantagesServer,
        error: errorAdvantagesServer,
        isLoading: isLoadingAdvantagesServer
    } = useGetAdvantagesServerQuery();

    const {
        data: serverEquipment,
        error: errorServerEquipment,
        isLoading: isLoadingServerEquipment
    } = useGetServerEquipmentQuery();

    const {
        data: serverEquipmentPartners,
        error: errorserverEquipmentPartners,
        isLoading: isLoadingserverEquipmentPartners
    } = useGetServerEquipmentPartnersQuery();

    return (
        <div className='developmentPage__container'>

            <BreadCrumbs text={'Серверное и вычислительное оборудование'}/>

            <section className='developmentPage__box'>
                <Banner BannerEquipmentImg={BannerServerImg} header={'Закажите лучшее оборудование по цене от 2700 ₽'}/>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <List arr={serverEquipment?.serverEquipment} header={'Серверное и вычислительное оборудование'}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Partners arr={serverEquipmentPartners?.serverEquipmentPartners}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему стоит заказать у нас'}
                                advantagesArr={advantagesServer?.advantagesServer} countItem={4}/>
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

export default ServerEquitmentPage;
