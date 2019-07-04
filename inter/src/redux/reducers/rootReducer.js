import * as actionTypes from '../actions/actionTypes.js'
import { combineReducers } from 'redux' 

const initialState = {
    loggedIn : false
}

const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
        return {
            loggedIn: true
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer