// preferenceActions.js

export const ADD_PREFERENCE = 'ADD_PREFERENCE';
export const REMOVE_PREFERENCE = 'REMOVE_PREFERENCE';
export const SET_MAX_TIME = 'SET_MAX_TIME';
export const REMOVE_MAX_TIME = 'REMOVE_MAX_TIME';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_SUCCESS= 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR= 'SIGNUP_ERROR';
export const LOGOUT= 'LOGOUT';
export const SHOWDETAIL = 'SHOWDETAIL';
export const HIDEDETAIL = 'HIDEDETAIL';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const HIDE_FAVOURITES = 'HIDE_FAVOURITES';


export function addPreference(preferenceType, preferenceValue) {
  return {
    type: ADD_PREFERENCE,
    preferenceType,
    preferenceValue,
  };
}

export function removePreference(preferenceType, preferenceValue) {
  return {
    type: REMOVE_PREFERENCE,
    preferenceType,
    preferenceValue,
  };
}

export function setMaxTime(preferenceValue) {
  return {
    type: SET_MAX_TIME,
    preferenceValue,
  };
}

export function removeMaxTime() {
    return {
      type: REMOVE_MAX_TIME,
    };
  }

export function loginUser(userData) {
  return {
    type: LOGIN_SUCCESS,
    payload: userData
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export function signupUser(userData) {
  return {
    type: SIGNUP_SUCCESS,
    payload: userData
  }
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    payload: error
  }
}

export function logoutUser() {
  return {
    type: LOGOUT,
  }
}
export function showDetails(recipeId) {
  return {
    type: SHOWDETAIL,
  }
}
export function hideDetails() {
  return {
    type: HIDEDETAIL,
  }
}

export function showFavourites(userId){
  return {
    type: SHOW_FAVOURITES,
    payload: userId,
  }
}

export function hideFavourites(){
  return {
    type: HIDE_FAVOURITES,
  }
}
