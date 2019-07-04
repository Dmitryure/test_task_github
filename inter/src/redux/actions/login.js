import * as actionTypes from './actionTypes'

export const login = (e) => {
    console.log('123')
    return {
        type: actionTypes.SET_USER,
    }
}