import { HIDEDETAIL, SHOWDETAIL, SHOW_FAVOURITES, HIDE_FAVOURITES } from "../actions"
const initialState = {
    showDetail: false,
    showFavourite: false,
}

export const helperReducer = (state=initialState, action) => {
    switch (action.type) {
        case HIDEDETAIL:
            return {
                ...state,
                showDetail: false,
            };
        case SHOWDETAIL:
            return {
                ...state,
                showDetail: true,

            };
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourite: true,
            }
        
        case HIDE_FAVOURITES:
            return {
                ...state,
                showFavourite: false,
            }
        default:
            return state;
    }
}
