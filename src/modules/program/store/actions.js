import {PROGRAMS} from "../data/constants";
import {apiEndPoints} from "../../../config/config";
import {deleteItem, getList} from "../../../store/asyncActions";
import store from "../../../store";

export const DELETE_PROGRAM = 'DELETE_PROGRAM';
export const ADD_PROGRAM = 'ADD_PROGRAM';


//************************************************Programs

export function getPrograms(data){
    const headRequest = {
        method: 'GET',
        headers: {}
    }

    return fetch(apiEndPoints.getPrograms, headRequest);
}

export const getProgramsListAction = getList(PROGRAMS, getPrograms);


export function deleteProgramById(id){
    const url = apiEndPoints.deleteProgram + `${id}`;

    const {login} = store.getState();
    const token = 'Bearer '+ login.data.token;

    const headRequest = {
        method: 'DELETE',
        headers:{
            'Authorization': token,
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Expose-Headers': 'X-Custom-Header, Content-Encoding',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
        }
    }

    return fetch(url, headRequest);
}

export const deleteProgramAction = deleteItem(PROGRAMS, deleteProgramById)

export function addProgram(name, startsAt, endsAt, getState){
    const {login} = getState;
    const token = 'Bearer '+login.data['token'];

    const headRequest = {
        method: 'POST',
        headers: {
            'Authorization': token,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
        },
        body: new URLSearchParams({
            'name': name,
            'startsAt': startsAt,
            'endsAt': endsAt
        })
    }

    return fetch(apiEndPoints.addProgram, headRequest);
}

// export const addProgramAction = postData(PROGRAMS, addProgram);
