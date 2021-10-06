export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_START = 'GET_LOGIN_START';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';

export const GET_PROGRAMS_SUCCESS = 'GET_PROGRAMS_SUCCESS';
export const GET_PROGRAMS_START = 'GET_PROGRAMS_START';
export const GET_PROGRAMS_ERROR = 'GET_PROGRAMS_ERROR';
export const DELETE_PROGRAM = 'DELETE_PROGRAM';
export const ADD_PROGRAM = 'ADD_PROGRAM';

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

//************************************************Programs
export const getProgramsStart = () => ({
    type: GET_PROGRAMS_START
});

export const getProgramsSuccess = (payload) => ({
    type: GET_PROGRAMS_SUCCESS,
    payload
});

export const getProgramsError = (error) => ({
    type: GET_PROGRAMS_ERROR,
        payload: error
});

export const deleteProgram = (payload) => ({
    type: DELETE_PROGRAM,
    payload
});

export const addNewProgram = (payload) => ({
   type: ADD_PROGRAM,
   payload
});
