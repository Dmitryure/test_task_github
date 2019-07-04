import * as actionTypes from '../actions/actionTypes.js'
import { combineReducers } from 'redux' 

const initialState = {
    loggedIn : false
}

const user_reducer = (state = initialState, action) => {
    console.log(action)
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

const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer