import React from 'react';
import {Link} from 'react-router-dom';
import './WriteToTheDirector.css';

function WriteToTheDirector(props) {
    return (
        <div className='writeToTheDirector'>
            <div className='container'>
                <div className='writeToTheDirector__box'>

                    <Link to="/director" className='writeToTheDirector__link'>
                        Написать директору
                    </Link>
                    <button className='writeToTheDirector__btn'>
                        RU
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WriteToTheDirector;