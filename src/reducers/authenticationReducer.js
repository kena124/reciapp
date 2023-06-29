import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT } from "../actions";

const initialState = {
    user: null,
    isLoggedIn: false,
    error: null,
  };
export const authReducer = (state=initialState, action) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          error: null,
        };
      case SIGNUP_ERROR:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
          error: action.payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          error: null,
        };
      case LOGIN_ERROR:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
          error: null,
        };
      default:
        return state;
    }
  }
