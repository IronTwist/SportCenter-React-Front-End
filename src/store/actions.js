export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_START = 'GET_LOGIN_START';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';

//************************************************Login
export const getLoginSuccess = (payload) => ({
    type: GET_LOGIN_SUCCESS,
    payload
});

export const getLoginStart = () => ({
    type: GET_LOGIN_START
});

export const getLoginError = (error) => ({
    type: GET_LOGIN_ERROR,
    payload: error
});

// *******************************************Programs

export const getListStart = (namespace) => ({
    type: `GET_${namespace}_START`
});

export const getListSuccess =(namespace, payload) => ({
    type: `GET_${namespace}_SUCCESS`,
    payload
});

export const getListError = (namespace, error) => ({
    type: `GET_${namespace}_ERROR`,
    payload: error
});

export const removeItemSuccess = (namespace) => ({
    type: `REMOVE_${namespace}_SUCCESS`,
});

export const removeItemError = (namespace, error) => ({
    type: `REMOVE_${namespace}_ERROR`,
    payload: error
});

export const addItemSuccess = (namespace) => ({
    type: `ADD_${namespace}_SUCCESS`
});

export const addItemError = (namespace, error) => ({
    type: `ADD_${namespace}_ERROR`,
    payload: error
});




