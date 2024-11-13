import {  applyMiddleware, legacy_createStore as createstore } from "redux";
import { allReducer } from ".";
import {thunk} from 'redux-thunk'
export const store=createstore(allReducer,applyMiddleware(thunk))