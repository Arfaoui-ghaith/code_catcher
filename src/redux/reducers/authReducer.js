import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from '../utils';

const initialState = {
    loading: false,
    error: null,
    token: null,
    user: null
}

export const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,

    });
};


export const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        token: action.token,
        user: action.user
    });
};


export const authFail = (state, action) => {
    return updateObject(state, {
        
        error: action.error
    });
};

export const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
    });
};


const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTH_START: return authStart(state, action);
        case actionsTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionsTypes.AUTH_FAIL: return authFail(state, action);
        case actionsTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return initialState;
    }
};

export default reducer;