import * as STUDENT_TYPES from "../types/student"
import * as COMMON_TYPES from "../types/common";

const initialState = {
    enrollments: [],
    submissions: [],
    currentEnrollment: null,
    currentSession: null,
    currentSessionSubmitted: false
}
const defaultState = {...initialState}; // to refer to after logging out


export default function (state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case STUDENT_TYPES.FETCH_ENROLLMENTS:
            return {...state, enrollments: payload}
        case STUDENT_TYPES.FETCH_SUBMISSIONS:
            return {...state, submissions: payload}
        case STUDENT_TYPES.CURRENT_ENROLLMENT:
            return {...state, currentEnrollment: payload}
         case STUDENT_TYPES.CURRENT_SESSION:
            return {...state, currentSession: payload}
        case STUDENT_TYPES.SUBMIT_SESSION:
            return {...state, currentSessionSubmitted: payload}
        case COMMON_TYPES.LOGOUT:
            return defaultState;
        default: return state;
    }

}