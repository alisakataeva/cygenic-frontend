import React from 'react';
import Employees from '../../components/AboutPage/Employees/Employees';
import Sistems from '../../components/AboutPage/Sistems/Sistems';
import Geography from '../../components/AboutPage/Geography/Geography';
import WhatCanWeDo from '../../components/AboutPage/WhatCanWeDo/WhatCanWeDo';
import FormComponent from '../../components/FormComponent/FormComponent';

import VideoBigContent from '../../assets/video/video-big.mp4'

import './AboutPage.css';
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../../utils/useFetchFromStrapi.js";

function AboutPage(props) {

    const {isLoading, error, data: aboutPage} = useQuery({
        queryKey: ['aboutPage'],
        queryFn: () => axiosInstance('pages/2', `populate=deep`)
    })

    const aboutPageData = aboutPage?.data.attributes

    console.log('aboutPageData', aboutPageData)

    const {data: serviceMenu} = useQuery({
        queryKey: ['serviceMenu'],
        queryFn: () => axiosInstance('services', 'populate=*')
    })

    const serviceMenuData = serviceMenu?.data
    let numberCircles

    if (window.innerWidth <= 440) {
        numberCircles = 1
    }
    if (440 < window.innerWidth <= 660) {
        numberCircles = 2
    }
    if (window.innerWidth > 660) {
        numberCircles = 4
    }
    if (window.innerWidth >= 960) {
        numberCircles = 5
    }
    if (window.innerWidth >= 1200) {
        numberCircles = 7
    }

    const numberCirclesArr = Array.from(Array(numberCircles).keys())

    return (
        <> {
            isLoading
                ? <>
                    <video className='bigVideo' width="100%" loop autoPlay muted>
                        <source src={VideoBigContent} type="video/mp4"/>
                    </video>
                    <div className={'about__skeleton'}>
                        <div className={'about__skeleton-title'}/>
                        <div className={'about__skeleton-subtitle'}/>
                        <div className={'about__skeleton-circle-wrapper'}>
                            {numberCirclesArr.map((item) => {
                                return <div key={item} className={'about__skeleton-circle'}/>
                            })}
                        </div>

                    </div>
                </>
                : <div className='about__container'>

                    <video className='bigVideo' width="100%" loop autoPlay muted>
                        <source src={VideoBigContent} type="video/mp4"/>
                    </video>

                    {aboutPageData?.contentSections[0].enabled && <section className='employees'>
                        <div className='container'>
                            <Employees employees={aboutPageData.contentSections[0]}/>
                        </div>
                    </section>}

                    {aboutPageData?.contentSections[1].enabled && <section className='sistems'>
                        <div className='container'>
                            <Sistems data={aboutPageData.contentSections[1]}/>
                        </div>
                    </section>}

                    {aboutPageData?.contentSections[2].enabled && <section className='geography'>
                        <div className='container'>
                            <Geography data={aboutPageData.contentSections[2]}/>
                        </div>
                    </section>}

                    <section className='whatCanWeDo'>
                        <div className='container'>
                            <WhatCanWeDo menu={serviceMenuData}/>
                        </div>
                    </section>

                    <section className='formAboutPage'>
                        <div className='container'>
                            <FormComponent header={'Мы работаем - вы растете'}
                                           text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'}/>
                        </div>
                    </section>
                </div>
        }
        </>
    );
}

export default AboutPage;
