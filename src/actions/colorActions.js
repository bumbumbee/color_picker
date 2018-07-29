import * as types from './types'

export function setActive(color) {
   // console.log(color);
    return{
        type:types.SET_ACTIVE,
        payload:color
    }
}

export function setBestLevel(title, level) {
    return {
        type:types.SET_BEST_LEVEL,
        payload: {title, level}
    }

}