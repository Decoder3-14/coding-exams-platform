import axios from "axios";
import * as COMMON_TYPES from "../types/common";
import React from "react";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// login
export const login = data => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify(data);

    axios.post(`http://127.0.0.1:8000/api/users/login`, body, config)
        .then(res => {
            setAuthToken(res.data.token);
            dispatch({
                type: COMMON_TYPES.LOGIN,
                payload: res.data.user
            });
            localStorage.setItem('token', res.data.token);
        })
        .catch(error => {
            console.log(JSON.stringify(error))
        });
};


export const register = data => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify(data);

    await axios.post(`http://127.0.0.1:8000/api/users/register`, body, config)
        .then(async res => {
            if (res.data.type === 'Success') {
                await setAuthToken(res.data.token);
                localStorage.setItem('token', res.data.token);
                dispatch({
                    type: COMMON_TYPES.REGISTER,
                    payload: res.data.user
                });
            }
            else alert(JSON.stringify(res.data));
        })
        .catch(error => {
            console.log(JSON.stringify(error.response.data));
            // alert(error.response.data.message);
        });
};


// logout user
export const logout = () => dispatch => {
    dispatch({
        type: COMMON_TYPES.LOGOUT
    });
    setAuthToken(null);
};