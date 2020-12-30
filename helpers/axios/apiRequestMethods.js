import { AXIOS_YELP, AXIOS_BACKEND_API} from './axios';

const HEADER = {
    'Authorization': 'token'
}

export const HTTP_POST_REQUEST_BACKEND_API = async ({URL, bodydata, isTokenRequired})=> {
    try {
      if(!isTokenRequired){
        return AXIOS_BACKEND_API.post(URL, bodydata);
      }else if(isTokenRequired){
        return AXIOS_BACKEND_API.post(URL, bodydata, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_GET_REQUEST_BACKEND_API = async ({URL, isTokenRequired})=> {
    try {
      if(!isTokenRequired){
        return  await AXIOS_BACKEND_API.get(URL);
      }else if(isTokenRequired){
        return  await AXIOS_BACKEND_API.get(URL, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_PUT_REQUEST_BACKEND_API = async ({URL, body, isTokenRequired})=> {
    try {
      if(!isTokenRequired){
        return  await AXIOS_BACKEND_API.put(URL, body);
      }else if(isTokenRequired){
        return  await AXIOS_BACKEND_API.put(URL, body, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_DELETE_REQUEST_BACKEND_API = async ({URL, body, isTokenRequired})=> {
    try {
      if(!isTokenRequired){
        return  await AXIOS_BACKEND_API.delete(URL, body);
      }else if(isTokenRequired){
        return  await AXIOS_BACKEND_API.delete(URL, body, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}