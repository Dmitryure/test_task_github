import React from 'react'
import {Link} from 'react-router-dom'
import {Icon, Button} from 'semantic-ui-react'

const MainPageButton = (props) => {
    return (
        <React.Fragment>
            <Link to={'/'}>
                <Button className={'mainPageButton'}>
                    <Icon name={'backward'} ></Icon> Вернуться на главную страницу
                </Button>
            </Link>
        </React.Fragment>
    )
}

export default MainPageButton