import React from 'react'
import {Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logout} from './redux/actions/logout'
import GitLoader from './GitLoader'

class App extends React.Component {
    state = {
        
    }

    handleLogout = () => {
        this.props.logout()
        this.props.history.push('/login')
    }

    render(){
        return(
            <React.Fragment>
                <Button onClick = {this.handleLogout}>Logout</Button>
                <GitLoader/>
            </React.Fragment>
        )
    }
}



export default connect(null, {logout})(App)