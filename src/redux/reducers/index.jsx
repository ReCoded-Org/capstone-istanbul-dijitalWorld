import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from "../action/types"
import { combineReducers } from "redux";

const currentUserDataReducer = (state = [], action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.payload;
        case USER_LOGGED_OUT:
            return null;
        default:
            return state;
    }
}

const allReducers = combineReducers({
    currentUserDataReducer,
});

export default allReducers;