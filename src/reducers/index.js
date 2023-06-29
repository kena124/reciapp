import { combineReducers } from "@reduxjs/toolkit";
import {preferencesReducer} from "./preferenceReducer";
import { authReducer } from "./authenticationReducer";
import { helperReducer } from "./helperReducer";
const allReducers =combineReducers({
    preferences: preferencesReducer,
    authentication: authReducer,
    helper: helperReducer,
});

export default allReducers;
