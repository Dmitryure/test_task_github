import React from 'react'
import MainPageButton from './MainPageButton';

const NotFound = (props) => {
    return (
        <React.Fragment>
            <MainPageButton />
            <div className={'error'}>
                <p>Ошибка 404</p>
                <p>Страница не найдена</p>
            </div>
        </React.Fragment>
    )
}

export default NotFound