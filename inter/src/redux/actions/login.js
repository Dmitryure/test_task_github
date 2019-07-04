import * as actionTypes from './actionTypes'

export const login = (user) => {
    return {
        type: actionTypes.SET_USER,
    }
}