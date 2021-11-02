import {
  ADD_PROGRAM_ERROR, ADD_PROGRAM_START,
  ADD_PROGRAM_SUCCESS, GET_PROGRAMS_BY_ID_ERROR, GET_PROGRAMS_BY_ID_SUCCESS,
  GET_PROGRAMS_ERROR,
  GET_PROGRAMS_START,
  GET_PROGRAMS_SUCCESS,
  REMOVE_PROGRAM_ERROR,
  REMOVE_PROGRAM_SUCCESS, UPDATE_PROGRAM_ERROR, UPDATE_PROGRAM_SUCCESS,
} from '../../modules/program/store/constants';
import {
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  REMOVE_USERS_ERROR, REMOVE_USERS_START, REMOVE_USERS_SUCCESS,
} from '../../modules/user/store/constants';

export const initialState = {
  programs: {
    loading: false,
    data: {
      list: {},
      items: {},
    },
    error: null,
  },
  users: {
    loading: false,
    data: {
      list: {},
      items: {},
    },
    error: null,
  },
};

export const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRAMS_START:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: true,
          data: {
            ...state.programs.data,
            list: {},
          },
        },
      };
    case GET_PROGRAMS_SUCCESS:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
          data: {
            ...state.programs.data,
            list: action.payload,
          },
        },
      };
    case GET_PROGRAMS_BY_ID_SUCCESS:
      return {
        ...state,
        programs: {
          ...state.programs,
          data: {
            ...state.programs.data,
            items: {
              ...state.programs.data.items,
              [action.payload.id]: action.payload,
            },
          },
        },
        error: null,
      };

    case GET_PROGRAMS_BY_ID_ERROR:
      return {
        ...state,
        programs: {
          ...state.programs,
          error: action.payload,
        },
        error: null,
      };

    case GET_PROGRAMS_ERROR:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
          data: {
            ...state.programs.data,
            list: {},
          },
          error: action.payload,
        },
      };
    case REMOVE_PROGRAM_SUCCESS:
      return {
        ...state,
      };
    case REMOVE_PROGRAM_ERROR:
      return {
        ...state,
        programs: {
          ...state.programs,
          error: action.payload,
        },
      };
    case ADD_PROGRAM_START:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: true,
        },
      };
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
        },
      };
    case ADD_PROGRAM_ERROR:
      return {
        ...state,
        programs: {
          ...state.programs,
          loading: false,
          error: action.payload,
        },
      };
    case UPDATE_PROGRAM_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_PROGRAM_ERROR:
      return {
        ...state,
        programs: {
          ...state.programs,
          error: action.payload,
        },
      };
    case GET_USERS_START:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
          data: {
            ...state.users.data,
            list: {},
          },
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          data: {
            ...state.users.data,
            list: action.payload,
          },
        },
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          data: {
            ...state.users.data,
            list: {},
          },
          error: action.payload,
        },
      };
    case REMOVE_USERS_START:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    case REMOVE_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
        },
      };
    case REMOVE_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
