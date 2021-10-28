export const getListStart = (namespace) => ({
  type: `GET_${namespace}_START`,
});

export const getListSuccess = (namespace, payload) => ({
  type: `GET_${namespace}_SUCCESS`,
  payload,
});

export const getListError = (namespace, error) => ({
  type: `GET_${namespace}_ERROR`,
  payload: error,
});

export const removeItemSuccess = (namespace) => ({
  type: `REMOVE_${namespace}_SUCCESS`,
});

export const removeItemError = (namespace, error) => ({
  type: `REMOVE_${namespace}_ERROR`,
  payload: error,
});

export const addItemStart = (namespace) => ({
  type: `ADD_${namespace}_START`,
});

export const addItemSuccess = (namespace) => ({
  type: `ADD_${namespace}_SUCCESS`,
});

export const addItemError = (namespace, error) => ({
  type: `ADD_${namespace}_ERROR`,
  payload: error,
});

export const updateItemSuccess = (namespace) => ({
  type: `UPDATE_${namespace}_SUCCESS`,
});

export const updateItemError = (namespace, error) => ({
  type: `UPDATE_${namespace}_ERROR`,
  payload: error,
});

export const getItemSuccess = (namespace, payload) => ({
  type: `GET_${namespace}_BY_ID_SUCCESS`,
  payload,
});

export const getItemError = (namespace, error) => ({
  type: `GET_${namespace}_BY_ID_ERROR`,
  payload: error,
});
