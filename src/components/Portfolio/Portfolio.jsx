import React, {useState} from 'react';
import PortfolioList from '../../components/Portfolio/PortfolioList/PortfolioList'
import './Portfolio.css'
import {CustomSelect} from "../CustomSelect/CustomSelect.jsx";
import {axiosInstance} from "../../utils/useFetchFromStrapi.js";
import {useQuery} from "@tanstack/react-query";

function Portfolio(props) {
    const [service, setService] = useState({value: 'develop', label: 'Разработка'})

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['projects', service.value],
        queryFn: () => axiosInstance('projects', `populate=*&[filters][services][slug]=${service.value}`)
    })

    const {data: services} = useQuery({
        queryKey: ['services'],
        queryFn: () => axiosInstance('services', 'populate=*')
    })

    const setSelectedOption = (e) => {
        setService(e)
    }

    const options = services?.data.map((item) => {
        return {value: item.attributes.slug, label: item.attributes.name}
    })

    return (
        <>
            <div className='portfolio__filter-btn'>
                <CustomSelect options={options} onChange={setSelectedOption} selectedOption={service}/>
            </div>

            <PortfolioList sort={true} portfolioList={portfolioList?.data} loading={isLoading}/>
        </>
    )
}

export default Portfolio
