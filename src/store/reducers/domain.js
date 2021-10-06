import {
    ADD_PROGRAM,
    GET_PROGRAMS_ERROR,
    GET_PROGRAMS_START,
    GET_PROGRAMS_SUCCESS,
    REMOVE_PROGRAM_ERROR,
    REMOVE_PROGRAM_SUCCESS
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
           // console.log(action.payload);
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
       case ADD_PROGRAM:
           // console.log(state.data.items);
           return {
               loading: false,
               data: state.data.items,
               error: null
           }
       default:
           return state;
   }
}