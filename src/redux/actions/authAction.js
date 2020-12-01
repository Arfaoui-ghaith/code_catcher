import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {type:actionTypes.AUTH_START}
}

export const authSuccess = (token) => {
    return {type:actionTypes.AUTH_SUCCESS, token};
}

export const authFAIL = (error) => {
    return {type:actionTypes.AUTH_FAIL, error};
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT,

    }
}

export const setAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime * 1000);
    }
}

const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
  };
  
  // type is 'success' or 'error'
  const showAlert = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    if(type === "error"){
        window.setTimeout(hideAlert, 10000);
    }
};

export const authLogin = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        axios.post('/auth/login',{
            email,
            password
        }).then(res => {
            const token = res.data.token;
            const user = res.data.user;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('user',user);
            localStorage.setItem('expirationDate',expirationDate);
            showAlert('success', `Login Successfully !`);
            dispatch(setAuthTimeout(3600));
            window.location.replace("/");
        }).catch(err => {
            dispatch(authFAIL(err));
            showAlert("error", err);

        });
    };
};


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token === undefined || token === null) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(authLogout());
            }else {
                dispatch(authSuccess(token));
                dispatch(setAuthTimeout(
                    (expirationDate.getTime() - new Date()) / 1000
                ))
            }
        }
    }
}
