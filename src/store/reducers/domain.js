import {
    ADD_PROGRAM_ERROR,
    ADD_PROGRAM_SUCCESS,
    GET_PROGRAMS_ERROR,
    GET_PROGRAMS_START,
    GET_PROGRAMS_SUCCESS,
    REMOVE_PROGRAM_ERROR,
    REMOVE_PROGRAM_SUCCESS, UPDATE_PROGRAM_ERROR, UPDATE_PROGRAM_SUCCESS
} from "../../modules/program/store/constants";

export const initialState = {
    loading: false,
    data: {},
    error: null
}

export const domainReducer = (state = initialState,action) => {
   switch(action.type){
       case GET_PROGRAMS_START:
           return {
               loading: true,
               data: {},
               error: null
           };
       case GET_PROGRAMS_SUCCESS:
           return {
               loading: false,
               data: action.payload,
               error: null
           };
       case GET_PROGRAMS_ERROR:
           return {
               loading: false,
               data: {},
               error: action.payload
           };
       case REMOVE_PROGRAM_SUCCESS:
           return {
               loading: false,
               data: state.data.items,
               error: null
           };
       case REMOVE_PROGRAM_ERROR:
           return {
               loading: false,
               data: state.data.items,
               error: action.payload.error
           };
       case ADD_PROGRAM_SUCCESS:
           return {
               loading: false,
               data: state.data.items,
               error: null
           }
       case ADD_PROGRAM_ERROR:
           return {
               loading: false,
               data: state.data.items,
               error: null
           }

       case UPDATE_PROGRAM_SUCCESS:
           return {
               loading: false,
               data: state.data.items,
               error: null
           }
       case UPDATE_PROGRAM_ERROR:
           return {
               loading: false,
               data: state.data.items,
               error: null
           }

       default:
           return state;
   }
}