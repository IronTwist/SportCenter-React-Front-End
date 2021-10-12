import {
    ADD_PROGRAM_ERROR,
    ADD_PROGRAM_SUCCESS, GET_PROGRAMS_BY_ID_SUCCESS,
    GET_PROGRAMS_ERROR,
    GET_PROGRAMS_START,
    GET_PROGRAMS_SUCCESS,
    REMOVE_PROGRAM_ERROR,
    REMOVE_PROGRAM_SUCCESS, UPDATE_PROGRAM_ERROR, UPDATE_PROGRAM_SUCCESS
} from "../../modules/program/store/constants";

export const initialState = {
    loading: false,
    data: {
        list: {},
        items:  {}
    },
    error: null
}

export const domainReducer = (state = initialState,action) => {
   switch(action.type){
       case GET_PROGRAMS_START:
           return {
               loading: true,
               data:{
                   list: {},
                   items: state.data.items
               },
               error: null
           };
       case GET_PROGRAMS_SUCCESS:
           return {
               loading: false,
               data:{
                   list: action.payload,
                   items: state.data.items
               },
               error: null
           };
       case GET_PROGRAMS_BY_ID_SUCCESS:
           const newState = Object.assign({}, state);
           newState.data.items[action.payload.id] = action.payload;
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
               loading: false,
               data:{
                   list: {},
                   items: {}
               },
               error: action.payload
           };
       case REMOVE_PROGRAM_SUCCESS:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: null
           };
       case REMOVE_PROGRAM_ERROR:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: action.payload.error
           };
       case ADD_PROGRAM_SUCCESS:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: null
           }
       case ADD_PROGRAM_ERROR:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: action.payload.error
           }

       case UPDATE_PROGRAM_SUCCESS:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: null
           }
       case UPDATE_PROGRAM_ERROR:
           return {
               loading: false,
               data:{
                   list: state.data.items,
                   items: {}
               },
               error: null
           }

       default:
           return state;
   }
}