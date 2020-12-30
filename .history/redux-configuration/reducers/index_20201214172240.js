import { combineReducers } from "redux";
import {setLoggedInStatus, setUserData, setPushToken, setDestinationLocation, setOriginLocation} from '../actions/types';

const initialState = {
    userData: {},
    loggedInStatus: false,
    pushtoken: null,
    destLocation: null,
    originLocation: null,
}


const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserData:
            return {...state, userData: action.payload}
        case setLoggedInStatus:
            return {...state, loggedInStatus: action.payload}
        case setPushToken:
            return {...state, pushtoken: action.payload}
        case setDestinationLocation:
            return {...state, destLocation: action.payload}
        case setOriginLocation:
            return {...state, originLocation: action.payload}
        default:
            return state
    }
}


const allReducers = combineReducers({
    indexReducer
});

export default allReducers;