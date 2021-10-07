import {GET_LOGIN_ERROR, GET_LOGIN_START, GET_LOGIN_SUCCESS} from "../../modules/login/store/constants";

export const initialState = {
    loading: false,
    data: {},
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_LOGIN_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case GET_LOGIN_START:
            return {
                loading: true,
                data: {},
                error: null
            };
        case GET_LOGIN_ERROR:
            return {
                loading: false,
                data: {},
                error: action.payload
            };
        default:
            return state;
    }
}

export default loginReducer;