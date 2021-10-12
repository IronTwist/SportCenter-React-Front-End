import { apiEndPoints } from "../../../config/config";
import { USERS } from "../data/constants";
import { getList } from "../../../store/asyncActions";

export function getUsersList(data){
    const url = apiEndPoints.getUsers + "?page=" + data.page +"&perPage=" + data.perPage;

    const headRequest = {
        method: 'GET',
        headers: {}
    }

    return fetch(url, headRequest);
}

export const getUsersListAction = getList(USERS, getUsersList);