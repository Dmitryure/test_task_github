import * as actionTypes from '../actions/actionTypes.js'
import { combineReducers } from 'redux' 

const initialUserState = {
    loggedIn : false
}

const user_reducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                loggedIn: true
            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                loggedIn:false
            }
        default:
            return state
    }
}

const initialReposState = null

const repos_reducer = (state = initialReposState, action) => {
    switch(action.type) {
        case actionTypes.ONE_REPO:
            return {
                ...state,
                repos: action.payload
            }
    default:
    return state
    }
   
}

const rootReducer = combineReducers({
    user: user_reducer,
    repos: repos_reducer
})

export default rootReducer