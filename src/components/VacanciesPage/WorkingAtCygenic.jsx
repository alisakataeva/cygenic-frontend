import React from 'react';
import {Link} from 'react-router-dom';
import './WorkingAtCygenic.css';

function WorkingAtCygenic({vacancies}) {


    return (
        <div className='workingAtCygenic__box'>
            <div className='workingAtCygenic__container'>

                <h1 className='workingAtCygenic__header'>Работа в Cygenic - это…</h1>

                <h2 className='workingAtCygenic__title'>Большой и дружный коллектив</h2>

                <p className='workingAtCygenic__text'>Мы работаем командно, помогая достигать целей. Мы общаемся на Ты и
                    стираем рамки бюрократии. Для нас не существует проблем, только решение задач</p>

                <h2 className='workingAtCygenic__title'>Инфраструктура для работы</h2>

                <p className='workingAtCygenic__text'>У нас есть тестовые и боевые серверы для разделения dev и prod,
                    что позволяет оптимизировать разработку. Также для удобства работы мы создали свой бэклог для задач
                    и чат для общения с клиентами</p>

                <h2 className='workingAtCygenic__title'>Понятные и осязаемые задачи</h2>

                <p className='workingAtCygenic__text'>Не просим “идти туда, не знаю куда”, чтобы “найти то, не знаю
                    что”, описывая поручения и чек - листы максимально подробно</p>

                <h2 className='workingAtCygenic__title'>Доход и рост в компании</h2>

                <p className='workingAtCygenic__text'>Как правило мы начинаем работать на сдельной оплате, далее -
                    договор ГПХ, а далее - договор ТК РФ.Рост оклада, ответственности и опыта - шикарный бонус</p>


                <div>
                    {
                        vacancies.length < 0 ? (
                            <div>
                                <h2 className='workingAtCygenic__title'>Открытые вакансии</h2>
                                <p className='workingAtCygenic__text'>
                                    Открытых вакансий нет, но мы будем рады пообщаться с вами и договориться о работе в
                                    дальнейшем!
                                </p>
                            </div>
                        ) : (
                            <div>
                                <Link to="/vacancies/open-vacancies" className='workingAtCygenic__link'>
                                    Открытые вакансии
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div>
                </div>
            </div>

        </div>
    );
}

export default WorkingAtCygenic;
