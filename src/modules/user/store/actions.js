import { apiEndPoints } from '../../../config/apiEndPoints';
import { USERS } from '../data/constants';
import { deleteItem, getList } from '../../../store/asyncActions';
import myStore from '../../../store';

export function getUsersList(data) {
  const url = `${apiEndPoints.users}?page=${data.page}&perPage=${data.perPage}`;

  const headRequest = {
    method: 'GET',
    headers: {},
  };

  return fetch(url, headRequest);
}

export const getUsersListAction = getList(USERS, getUsersList);

export function deleteUser(id) {
  const url = `${apiEndPoints.users}/${id}/admin-delete-account`;
  const { login } = myStore.getState();
  const token = `Bearer ${login.data.token}`;

  const headRequest = {
    method: 'DELETE',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
    },
  };

  return fetch(url, headRequest);
}

export const deleteUserByAdminAction = deleteItem(USERS, deleteUser);
