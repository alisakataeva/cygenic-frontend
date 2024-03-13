import React from 'react';
import ProjectComponent from '../../components/Portfolio/Projects/Project';
import './ProjectPage.css';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {axiosInstance} from "../../utils/useFetchFromStrapi.js";

function ProjectPage(props) {
    let {slug} = useParams();

    const {isLoading, error, data: portfolioList} = useQuery({
        queryKey: ['project', slug],
        queryFn: () => axiosInstance('projects', `populate=deep&[filters][slug]=${slug}`)
    })

    return (
        <>
            {isLoading
                ? <div className={'projectPage__skeleton'}></div>
                : <ProjectComponent project={portfolioList?.data[0].attributes}/>}
        </>
    );
}

export default ProjectPage;