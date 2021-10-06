import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import { loginReducer } from './reducers/login'
import thunk from "redux-thunk";
import {domainReducer} from "./reducers/domain";

const reducer = combineReducers({
    login: loginReducer,
    domain: domainReducer,
})

const enhancerDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeMiddleware = compose(applyMiddleware(thunk), enhancerDev);

export const store = composeMiddleware(createStore)(reducer);

export default store;