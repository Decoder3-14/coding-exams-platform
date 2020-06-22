import axios from "axios";
import * as INSTRUCTOR_TYPES from "../types/instructor";


export const fetchCourses = () => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/courses/`)
        .then(res => {
            dispatch({
                type: INSTRUCTOR_TYPES.FETCH_COURSES,
                payload: res.data.results
            });
            console.log(res.data.results);
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};

export const enrollStudents = data => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/courses/enroll-students`, body, config)
        .then(res => {
            dispatch({
                type: INSTRUCTOR_TYPES.ENROL_STUDENTS,
                payload: res.data.course
            });
            alert('Successfully submitted.');
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};



export const addCourse = data => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/courses/courses/`, body, config)
        .then(res => {
            dispatch({
                type: INSTRUCTOR_TYPES.ADD_NEW_COURSE,
                payload: res.data
            });
            alert('Successfully added the courses');
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};


export const addSession = data => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/courses/sessions/`, body, config)
        .then(res => {
            dispatch({
                type: INSTRUCTOR_TYPES.ADD_NEW_SESSION,
                payload: res.data
            });
            dispatch(fetchCourses());
            alert('Successfully added the session');
        })
        .catch(error => {
            alert(error.response)
            console.log(error)
        });
};




export const addQuestion = data => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/courses/questions/`, body, config)
        .then(res => {
            dispatch({
                type: INSTRUCTOR_TYPES.ADD_NEW_QUESTION,
                payload: res.data
            });
            console.log('Successfully added the question ' + res.data);
            // alert('Successfully added the question ' + res.data);
        })
        .catch(error => {
            alert(error)
            console.log(error)
        });
};


export const setCurrentCourse = course => dispatch => {
    dispatch({
        type: INSTRUCTOR_TYPES.CURRENT_COURSE,
        payload: course
    })
};

export const setCurrentSession = session => dispatch => {
    dispatch({
        type: INSTRUCTOR_TYPES.CURRENT_SESSION,
        payload: session
    })
};