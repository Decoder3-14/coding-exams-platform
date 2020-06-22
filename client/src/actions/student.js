import axios from "axios";
import * as STUDENT_TYPES from "../types/student";


export const fetchEnrollments = () => dispatch => {

    axios.get(`http://127.0.0.1:8000/api/users/fetch-enrollments`)
        .then(res => {
            dispatch({
                type: STUDENT_TYPES.FETCH_ENROLLMENTS,
                payload: res.data.enrollments
            });
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};

export const setCurrentEnrollment = enrollment => dispatch => {
    dispatch({
        type: STUDENT_TYPES.CURRENT_ENROLLMENT,
        payload: enrollment
    })
};

export const setCurrentSession = session => dispatch => {
    dispatch({
        type: STUDENT_TYPES.CURRENT_SESSION,
        payload: session
    })
};

export const startSession = (data) => dispatch => {

};
