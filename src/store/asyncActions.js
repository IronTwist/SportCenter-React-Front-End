import {
    addItemError, addItemSuccess,
    getListError, getListStart, getListSuccess,
    getLoginError, getLoginStart, getLoginSuccess,
    removeItemError, removeItemSuccess,
} from "./actions";

export const loginResponse = (namespace, fn) =>
    (...params) =>
        (dispatch) => {
            dispatch(getLoginStart(namespace));
            return fn(...params)
                .then((response) => response.json())
                .then((responseJSON) => {
                    dispatch(getLoginSuccess(namespace, responseJSON));
                    return responseJSON;
                })
                .catch((error) => {
                    dispatch(getLoginError(error.message));
                    return Promise.reject(error);
                })
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
                    return Promise.reject(error);
                })
        };

export const postData = (namespace,fn) =>
    (...params) =>
        (dispatch) => {
            return fn(...params)
                .then((response) => response.json())
                .then((responseJSON) => {
                    dispatch(addItemSuccess(namespace, responseJSON))
                    return responseJSON;
                })
                .catch((error) => {
                    dispatch(addItemError(namespace,error.message));
                    return Promise.reject(error);
                })

        }

