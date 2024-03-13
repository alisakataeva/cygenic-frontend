import React from 'react';
import './Result.css';

function Result({ project }) {
  return (
    <>
      <div className='solution__container'>

        <div className='container'>
          <div className='solution__box'>

            <div className='project__header-box'>
              <h1 className='project__header'>Результат</h1>

              {/* <div>{project.name}</div> */}
              <p className='project__text'>{project.result}</p>
            </div>

            <div className='result__img-box'>
              <div className='result__img-container-2-row'>
                {project?.galleryResult.data && project?.galleryResult.data.map((item, index) => (
                  <div className='project__img-box' key={index}>
                    <img className='project__img' src={item.attributes.url} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Result;