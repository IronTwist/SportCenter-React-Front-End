import {apiEndPoints} from "../../../config/config";
import {LOGIN} from "../data/constants";
import {loginResponse} from "../../../store/asyncActions";

export function getLoginData(email, password){

    const headRequest = {
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
    }

    return fetch(apiEndPoints.login, headRequest);
}

export const getLoginResponseAction = loginResponse(LOGIN, getLoginData);

