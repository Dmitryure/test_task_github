import * as actionTypes from './actionTypes'

export const oneRepo = (repos) => {
    return {
        type: actionTypes.ONE_REPO,
        payload: {
            repos
        }
    }
}