import {apiEndPoints} from "../config/config";
import {
    getListError,
    getListStart,
    getListSuccess,
    getLoginError,
    getLoginStart,
    getLoginSuccess, removeItemError, removeItemSuccess,
} from "./actions";


export function getLoginResponseAsync(email,password){

    return async function getData(dispatch, getState) {
        dispatch(getLoginStart());

        try {
            const response = await fetch(apiEndPoints.login, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept": "*/*",
                },
                body: new URLSearchParams({
                    'email': email,
                    'password': password,
                    'grant_type': 'password'
                })
            });

            const user = await response.json();

            dispatch(getLoginSuccess(user));
        }catch (error){
            dispatch(getLoginError(error.message));
        }
    }
}

export const getList = (namespace, fn) =>
    (...params) =>
        (dispatch) => {
            dispatch(getListStart(namespace));

            return fn(...params)
                .then((response) => response.json())
                .then((responseJSON) => {
                    dispatch(getListSuccess(namespace,responseJSON));
                    return responseJSON;
                })
                .catch((error) => {
                    dispatch(getListError(namespace, error.message));
                    return Promise.reject(error);
                });
        };

export const deleteItem = (namespace, fn) =>
    (...params) =>
        (dispatch) => {
            return fn(...params)
                .then((response) => response.json())
                .then((responseJSON) => {
                    dispatch(removeItemSuccess(namespace, responseJSON));
                    return responseJSON;
                })
                .catch((error) => {
                    dispatch(removeItemError(namespace, error.message));
                })
        }