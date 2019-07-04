import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import {Grid} from 'semantic-ui-react'

const Table1 = (props) => {
    return (
        <React.Fragment>
            {JSON.stringify(props.data)}
        </React.Fragment>
    )
} 

export default Table1