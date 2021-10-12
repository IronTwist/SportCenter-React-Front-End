import {
    ADD_PROGRAM_ERROR,
    ADD_PROGRAM_SUCCESS, GET_PROGRAMS_BY_ID_SUCCESS,
    GET_PROGRAMS_ERROR,
    GET_PROGRAMS_START,
    GET_PROGRAMS_SUCCESS,
    REMOVE_PROGRAM_ERROR,
    REMOVE_PROGRAM_SUCCESS, UPDATE_PROGRAM_ERROR, UPDATE_PROGRAM_SUCCESS
} from "../../modules/program/store/constants";
import {GET_USERS_ERROR, GET_USERS_START, GET_USERS_SUCCESS} from "../../modules/user/store/constants";

export const initialState = {
    programs: {
        loading: false,
        data: {
            list: {},
            items: {}
        },
        error: null
    },
    users: {
        loading:false,
        data: {
            list: {},
            items: {}
        },
        error: null
    }
}

export const domainReducer = (state = initialState,action) => {
   switch(action.type){
       case GET_PROGRAMS_START:
           return  {
               programs: {
                   loading: true,
                   data: {
                       list: {},
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case GET_PROGRAMS_SUCCESS:
           return {
           programs: {
               loading: false,
               data: {
                   list: action.payload,
                   items: state.programs.data.items
               },
               error: null
           },
           users: {
               loading:false,
               data: {
                   list: state.users.data.list,
                   items: state.users.data.items
               },
               error: null
           }
       };
       case GET_PROGRAMS_BY_ID_SUCCESS:
           const newState = Object.assign({}, state);
           newState.programs.data.items[action.payload.id] = action.payload;

           return newState;

           // return {
           //     ...state,
           //     data: {
           //              ...state.data,
           //              items: {
           //                  ...state.data.items,
           //                  [action.payload.id]: action.payload,
           //              }
           //         },
           //     error: null
           // };

       case GET_PROGRAMS_ERROR:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: {},
                       items: state.programs.data.items
                   },
                   error: action.payload
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case REMOVE_PROGRAM_SUCCESS:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case REMOVE_PROGRAM_ERROR:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: action.payload.error
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case ADD_PROGRAM_SUCCESS:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case ADD_PROGRAM_ERROR:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: action.payload.error
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case UPDATE_PROGRAM_SUCCESS:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case UPDATE_PROGRAM_ERROR:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.items,
                       items: state.programs.data.items
                   },
                   error: action.payload.error
               },
               users: {
                   loading:false,
                   data: {
                       list: state.users.data.list,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case GET_USERS_START:
           return  {
               programs: {
                   loading: state.programs.loading,
                   data: {
                       list: state.programs.data.list,
                       items: state.programs.data.items
                   },
                   error: state.programs.error
               },
               users: {
                   loading: true,
                   data: {
                       list: {},
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case GET_USERS_SUCCESS:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.list,
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading:false,
                   data: {
                       list: action.payload,
                       items: state.users.data.items
                   },
                   error: null
               }
           };
       case GET_USERS_ERROR:
           return {
               programs: {
                   loading: false,
                   data: {
                       list: state.programs.data.list,
                       items: state.programs.data.items
                   },
                   error: null
               },
               users: {
                   loading: false,
                   data: {
                       list: {},
                       items: state.users.data.items
                   },
                   error: action.payload.error
               }
           };
       default:
           return state;
   }
}