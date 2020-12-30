import { combineReducers } from "redux";
import {setLoggedInStatus, setUserData} from '../actions/types';

const initialState = {
    userData: {},
    loggedInStatus: false,
}


const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserData:
            return {...state, userData: action.payload}
        case setLoggedInStatus:
            return {...state, loggedInStatus: action.payload}
        default:
            return state
    }
}


const allReducers = combineReducers({
    indexReducer
});

export default allReducers;