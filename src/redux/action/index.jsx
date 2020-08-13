import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types';

export const userLoggedInAction = (data) => {
    return {
        type: USER_LOGGED_IN,
        payload: data,
    };
};

export const userLoggedOutAction = (data) => {
    return {
        type: USER_LOGGED_OUT,
        payload: data,
    };
};

