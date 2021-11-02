import {
  addItemError, addItemStart, addItemSuccess, getItemError, getItemSuccess,
  getListError, getListStart, getListSuccess,
  removeItemError, removeItemStart, removeItemSuccess, updateItemError, updateItemSuccess,
} from './actions';

export const getList = (namespace, fn) => (...params) => (dispatch) => {
  dispatch(getListStart(namespace));
  return fn(...params)
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(getListSuccess(namespace, responseJSON));
      return responseJSON;
    })
    .catch((error) => {
      dispatch(getListError(namespace, error.message));
      return Promise.reject(error);
    });
};

export const deleteItem = (namespace, fn) => (...params) => (dispatch) => {
  removeItemStart(namespace);
  return fn(...params)
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(removeItemSuccess(namespace, responseJSON));
      return responseJSON;
    })
    .catch((error) => {
      dispatch(removeItemError(namespace, error.message));
      return Promise.reject(error);
    });
};


export const postData = (namespace, fn) => (...params) => (dispatch) => {
  dispatch(addItemStart(namespace));
  return fn(...params)
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(addItemSuccess(namespace, responseJSON));
      return responseJSON;
    })
    .catch((error) => {
      dispatch(addItemError(namespace, error.message));
      return Promise.reject(error);
    });
};

export const updateData = (namespace, fn) => (...params) => (dispatch) => fn(...params)
  .then((response) => response.json())
  .then((responseJSON) => {
    dispatch(updateItemSuccess(namespace, responseJSON));
    return responseJSON;
  })
  .catch((error) => {
    dispatch(updateItemError(namespace, error.message));
    return Promise.reject(error);
  });

export const getItem = (namespace, fn) => (...params) => (dispatch) => fn(...params)
  .then((response) => response.json())
  .then((responseJSON) => {
    dispatch(getItemSuccess(namespace, responseJSON));
    return responseJSON;
  })
  .catch((error) => {
    dispatch(getItemError(namespace, error.message));
    return Promise.reject(error);
  });
