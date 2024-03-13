import React from 'react';

import {useGetMenuQuery, useGetClientsQuery, useGetAdvantagesHomeQuery, useGetVendorsQuery} from '../../redux/api';

import Banner from '../../components/Home/Banner/Banner';
import Advantages from '../../components/Home/Advantages/Advantages';
import Directions from '../../components/Home/Directions/Directions';
import Сlients from '../../components/Home/Сlients/Сlients';
import FormComponent from '../../components/FormComponent/FormComponent';
import Vendors from '../../components/Home/Vendors/Vendors';

import VideoBigContent from '../../assets/video/video-big.mp4' // вынесено
import './HomePage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../utils/useFetchFromStrapi.js";

function HomePage(props) {


    const {isLoading, error, data: homePage} = useQuery({
        queryKey: ['homePage'],
        queryFn: () => axiosInstance('pages/1', `populate=deep`)
    })

    const homePageData = homePage?.data.attributes

    const {data} = useGetMenuQuery();

    const {data: clients, error: errorClients, isLoading: isLoadingClients} = useGetClientsQuery();

    const {
        data: advantagesHome,
        error: advantagesHomeError,
        isLoading: advantagesHomeisLoading
    } = useGetAdvantagesHomeQuery();
    const {data: vendors, error: errorVendors, isLoading: isLoadingVendors} = useGetVendorsQuery();


    // if (isLoading || advantagesHomeisLoading || isLoadingClients) {
    //     return <h1>Loading...</h1>;
    // }


    return (
        <div className='home__container'>

            <video className='bigVideo' width="100%" loop autoPlay muted>
                <source src={VideoBigContent} type="video/mp4"/>
            </video>

            <section className='banner'>
                <div className='container'>
                    <Banner/>
                </div>
            </section>

            <section className='advantages'>
                <div className='container'>
                    <Advantages header={'Преимущества'} advantagesArr={advantagesHome?.advantagesHome} countItem={4}/>
                </div>
            </section>


            <section className='directions'>
                <div className='container'>
                    <Directions menu={data}/>
                </div>
            </section>

            <section className='clients'>
                <div className='container'>
                    <Сlients clients={clients?.clients}/>
                </div>
            </section>

            <section className='Form'>
                <div className='container'>
                    <FormComponent header={'Нужна консультация нашего менеджера?'}/>
                </div>
            </section>

            <section className='vendors'>
                <div className='container'>
                    <Vendors vendors={vendors?.vendors}/>
                </div>
            </section>

        </div>
    );
}

export default HomePage;
