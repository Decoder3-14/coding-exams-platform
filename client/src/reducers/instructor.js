import * as INSTRUCTOR_TYPES from "../types/instructor"
import * as COMMON_TYPES from "../types/common";

const initialState = {
    courses: [],
    currentCourse: null,
    currentSession: null

}

const defaultState = {...initialState}; // to refer to after logging out


export default function (state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case INSTRUCTOR_TYPES.ADD_NEW_COURSE:
            return {...state, courses: [...state.courses, payload]}
        case INSTRUCTOR_TYPES.CURRENT_COURSE:
            return {...state, currentCourse: payload}
        case INSTRUCTOR_TYPES.CURRENT_SESSION:
            return {...state, currentSession: payload}
        case INSTRUCTOR_TYPES.ENROL_STUDENTS:

        case INSTRUCTOR_TYPES.FETCH_COURSES:
            return {...state, courses: payload}

        case INSTRUCTOR_TYPES.ADD_NEW_QUESTION:
            console.log(payload);
            return {
                ...state, courses: state.courses.map(obj => {
                    if (obj.id === state.currentCourse.id) {
                        return {
                            ...obj, sessions: obj.sessions.map(obj2 => {
                                if (obj2.id === state.currentSession.id) {
                                    return {...obj2, questions: [...obj2.questions, payload]}
                                }
                                return obj2;
                            })
                        }
                    }
                    return obj;
                }), currentSession: {...state.currentSession, questions: [...state.currentSession.questions,
                        payload]}
            }

        case COMMON_TYPES.LOGOUT:
            return defaultState;
        default: return state;
    }

}