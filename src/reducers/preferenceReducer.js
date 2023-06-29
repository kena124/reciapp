import { ADD_PREFERENCE, REMOVE_PREFERENCE, SET_MAX_TIME, REMOVE_MAX_TIME } from '../actions'
const initialState = {
  type: [],
  diet: [],
  intolerance: [],
  maxTime: '',
};
export const preferencesReducer = (state=initialState, action) => {
    switch (action.type) {
      case ADD_PREFERENCE:
        return {
          ...state,
          [action.preferenceType]: [...state[action.preferenceType], action.preferenceValue],
        };
      case REMOVE_PREFERENCE:
        return {
          ...state,
          [action.preferenceType]: state[action.preferenceType].filter(
            value => value !== action.preferenceValue
          ),
        };
      case SET_MAX_TIME:
        return {
          ...state,
          maxTime: action.preferenceValue,
        };
      case REMOVE_MAX_TIME:
        return {
          ...state,
          maxTime: '',
        };
      default:
        return state;
    }
  };
  
