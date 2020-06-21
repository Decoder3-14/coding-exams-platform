import * as COMMON_TYPES from "../types/common"

const initialState = {
    isAuthenticated: false,
    profile: null,
    isInstructor: false,
}

const defaultState = {...initialState}; // to refer to after logging out

export default function (state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case COMMON_TYPES.LOGIN:
            console.log(payload)
            return {...state, isAuthenticated: true, profile: payload, isInstructor: payload.is_instructor}
        case COMMON_TYPES.REGISTER:
            return {...state, isAuthenticated: true, profile: payload, isInstructor: payload.is_instructor}
        case COMMON_TYPES.LOGOUT:
            return defaultState;
        default: return state;
    }

}