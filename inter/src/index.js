import React from 'react'
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import Login from './Login'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(rootReducer, persistedState, composeWithDevTools())


class Root extends React.Component {
    state = {
        
    }

    componentDidMount() {
        const {user} = this.props
        console.log(user)
        if(user.loggedIn === false){
            this.props.history.push('/login')
        }
    }

    render(){
        return(
            <Switch>
                <Route exact path = '/' component = {App}/>
                <Route path = '/login' component = {Login}/>
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })



const RootWithRouter = withRouter(connect(mapStateToProps, null)(Root))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithRouter />
        </Router>
    </Provider>
    , document.getElementById('root'));
