import './ErrorPage.css'

export const ErrorPage = () => {
    const reloadPage = () => {
        location.reload()
    }
    return <div className={'error__container'}>
        <h2>Произошла непредвиденная ошибка</h2>
        <button className={'error__btn'} onClick={reloadPage}>Обновить страницу</button>
    </div>
}