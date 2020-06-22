import axios from "axios";
import * as STUDENT_TYPES from "../types/student";
import * as INSTRUCTOR_TYPES from "../types/instructor";


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

export const submitSession = data => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/users/submit-answers`, body, config)
        .then(res => {
            dispatch(fetchEnrollments());
            alert(res.data.message);
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};


export const fetchSubmissions = () => dispatch => {

    axios.get(`http://127.0.0.1:8000/api/users/fetch-submissions`)
        .then(res => {
            dispatch({
                type: STUDENT_TYPES.FETCH_SUBMISSIONS,
                payload: res.data.submissions
            })
            alert('Successfully fetched your submissions');
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};