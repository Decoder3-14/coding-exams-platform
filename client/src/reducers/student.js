import * as STUDENT_TYPES from "../types/student"
import * as COMMON_TYPES from "../types/common";

const initialState = {
    enrollments: [],
    currentSession: null,
    currentSessionSubmitted: false
}
const defaultState = {...initialState}; // to refer to after logging out


export default function (state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case STUDENT_TYPES.FETCH_ENROLLMENTS:
            return {...state, enrollments: payload}
        case STUDENT_TYPES.START_SESSION:
            return {...state, currentSession: payload}
        case STUDENT_TYPES.SUBMIT_SESSION:
            return {...state, currentSessionSubmitted: payload}
        case COMMON_TYPES.LOGOUT:
            return defaultState;
        default: return state;
    }

}