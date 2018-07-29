import * as types from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case types.SET_ACTIVE:
            // console.log(action.payload.title);
            // console.log(action.payload.description);
            return action.payload;
        default:
            return state
    }
}