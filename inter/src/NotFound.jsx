import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NotFound = (props) => {
    return (

        <React.Fragment>
            <Link to={'/'}>
                <Button>
                <Icon name={'backward'} ></Icon> Вернуться на главную страницу 
                </Button>
            </Link>
            <div>Not found</div>
        </React.Fragment>
    )
}

export default NotFound