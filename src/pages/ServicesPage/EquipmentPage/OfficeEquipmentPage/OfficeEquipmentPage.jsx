import React from 'react';

import {
    useGetAdvantagesOfficeQuery, useGetOfficeEquipmentPartnersQuery, useGetOfficeEquipmentQuery
} from '../../../../redux/api';

import Banner from '../../../../components/Equipment/Banner/Banner';
import List from '../../../../components/Equipment/List/List';
import Partners from '../../../../components/Equipment/Partners/Partners';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';

import BannerEquipmentImg from '/images/equipment/bannerEquipment.jpg';

import Advantages from '../../../../components/Home/Advantages/Advantages';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import './OfficeEquipmentPage.css';

function OfficeEquipmentPage(props) {

    const {
        data: advantagesOffice,
        error: errorAdvantagesOffice,
        isLoading: isLoadingAdvantagesOffice
    } = useGetAdvantagesOfficeQuery();

    const {
        data: officeEquipment,
        error: errorOfficeEquipment,
        isLoading: isLoadingOfficeEquipment
    } = useGetOfficeEquipmentQuery();

    const {
        data: officeEquipmentPartners,
        error: errorOfficeEquipmentPartners,
        isLoading: isLoadingOfficeEquipmentPartners
    } = useGetOfficeEquipmentPartnersQuery();


    return (
        <div className='developmentPage__container'>
            <BreadCrumbs text={'Офисная техника и комплектующие'}/>

            <section className='developmentPage__box'>
                <Banner BannerEquipmentImg={BannerEquipmentImg}
                        header={'Повысьте производительность персонала с помощью новой качественной техники'}/>
            </section>


            <section className='developmentPage__box'>
                <div className='container'>
                    <List arr={officeEquipment?.officeEquipment} header={'Офисная техника и комплектующие'}/>
                </div>
            </section>

            <section className='developmentPage__box'>
                <div className='container'>
                    <Partners arr={officeEquipmentPartners?.officeEquipmentPartners}/>
                </div>
            </section>


            <section className='developmentPage__box'>
                <div className='container'>
                    <Advantages header={'Почему стоит заказать у нас'}
                                advantagesArr={advantagesOffice?.advantagesOffice}
                                countItem={4}/>
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

export default OfficeEquipmentPage;
