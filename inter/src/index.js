import React from 'react'
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import App from './App'
import ListOfCommits from './ListOfCommits'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import Login from './Login'
import { logout } from './redux/actions/logout'
import { Button } from 'semantic-ui-react'
import NotFound from './NotFound'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(rootReducer, persistedState, composeWithDevTools())


class Root extends React.Component {
    state = {

    }

    componentDidMount() {
        const { user } = this.props
        if (user.loggedIn === false) {
            this.props.history.push('/login')
        }
    }

    handleLogout = () => {
        this.props.logout()
        this.props.history.push('/login')
    }

    

    render() {
        return (
            <React.Fragment>
                    <Button onClick={this.handleLogout} className = {'logoutButton'}
                    style={{opacity: `${Number(this.props.user.loggedIn)}`}}>Logout</Button>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/repos/notfound' component={NotFound} />
                    <Route exact path='/:id' component={ListOfCommits} />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})



const RootWithRouter = withRouter(connect(mapStateToProps, { logout })(Root))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithRouter />
        </Router>
    </Provider>
    , document.getElementById('root'));
