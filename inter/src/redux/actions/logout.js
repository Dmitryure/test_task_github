import * as actionTypes from './actionTypes'

export const logout = () => {
    return {
        type: actionTypes.LOGOUT_USER,
    }
}