import React from 'react';
import './Task.css';

function Task({ project }) {
  console.log('project.gallery',project.galleryTask.data)
  return (
    <div className='task__container'>

      <div className='container'>
        <div className='task__box'>
          <div className='project__header-box'>
            <h1 className='project__header'>Задача</h1>
            <p className='project__text'>{project.task}</p>
          </div>

          {/*<div className='task__img-container-2'>*/}
          {/*  {arrImgPortfolioTask.map((item, index) => (*/}
          {/*    (index <= 1) &&*/}
          {/*    <div className='project__img-box' key={index}>*/}
          {/*        <img className='project__img' src={item} alt="" />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}

          {project?.galleryTask.data && <div className='task__img-container-4'>
            {project.galleryTask.data.map((item, index) => (
              <div className='project__img-box' key={index}>
                  <img className='project__img' src={item.attributes.url} alt="" />
              </div>
            ))}
          </div>}
        </div>
      </div>

    </div>
  );
}

export default Task;
