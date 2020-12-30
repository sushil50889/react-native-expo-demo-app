import {setLoggedInStatus, setUserData} from './types';

// export const increment = (payload) => {
//     return {
//         type: 'increment',
//         payload,
//     }
// }

// export const decrement = (payload) => {
//     return {
//         type: 'decrement',
//         payload,
//     }
// }

export const setLoginStatus = (payload) => {
    return {
        type: setLoggedInStatus,
        payload,
    }
}

export const setUserLoginData = (payload) => {
    return {
        type: setUserData,
        payload,
    }
}