import React from 'react'
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import Login from './Login'

const store = createStore(rootReducer, composeWithDevTools())


class Root extends React.Component {
    state = {
        
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

const RootWithRouter = withRouter(connect(null, null)(Root))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithRouter />
        </Router>
    </Provider>
    , document.getElementById('root'));
