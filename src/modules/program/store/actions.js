import { PROGRAMS } from '../data/constants';
import { apiEndPoints } from '../../../config/apiEndPoints';
import { deleteItem, getItem, getList, postData, updateData } from '../../../store/asyncActions';
import myStore from '../../../store';

//* *********************************************** Programs

export function getPrograms(data) {
  const url = `${apiEndPoints.getPrograms}?page=${data.page}&perPage=${data.perPage}`;

  const headRequest = {
    method: 'GET',
    headers: {},
  };

  return fetch(url, headRequest);
}

export const getProgramsListAction = getList(PROGRAMS, getPrograms);

export function deleteProgramById(id) {
  const url = `${apiEndPoints.deleteProgram}${id}`;

  const { login } = myStore.getState();
  const token = `Bearer ${login.data.token}`;

  const headRequest = {
    method: 'DELETE',
    headers: {
      Authorization: token,
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': 'X-Custom-Header, Content-Encoding',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
    },
  };

  return fetch(url, headRequest);
}

export const deleteProgramAction = deleteItem(PROGRAMS, deleteProgramById);

export function addProgram(name, startsAt, endsAt) {
  const { login } = myStore.getState();
  const token = `Bearer ${login.data.token}`;

  const headRequest = {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
    },
    body: new URLSearchParams({
      name,
      startsAt,
      endsAt,
    }),
  };

  return fetch(apiEndPoints.addProgram, headRequest);
}

export const addProgramAction = postData(PROGRAMS, addProgram);

export function updateProgram(id, name, startsAt, endsAt) {
  const url = `${apiEndPoints.deleteProgram}${id}`;
  const { login } = myStore.getState();
  const token = `Bearer ${login.data.token}`;

  const headRequest = {
    method: 'PUT',
    headers: {
      Authorization: token,
    },
    body: new URLSearchParams({
      name,
      startsAt,
      endsAt,
    }),
  };

  return fetch(url, headRequest);
}

export const updateProgramAction = updateData(PROGRAMS, updateProgram);

export function getProgram(id) {
  const url = `${apiEndPoints.getProgram}${id}`;
  const headRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, headRequest);
}

export const getProgramAction = getItem(PROGRAMS, getProgram);
