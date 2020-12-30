import { AXIOS_YELP, AXIOS_BACKEND_API} from './axios';

const HEADER = {
    'Authorization': 'token'
}

export const HTTP_POST_REQUEST_BACKEND_API = async ({URL, body, isTokenRequered})=> {
    try {
      if(!isTokenRequered){
        return  await AXIOS_BACKEND_API.post(URL, {data: body});
      }else if(isTokenRequered){
        return  await AXIOS_BACKEND_API.post(URL, {data: body}, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_GET_REQUEST_BACKEND_API = async ({URL, isTokenRequered})=> {
    try {
      if(!isTokenRequered){
        return  await AXIOS_BACKEND_API.get(URL);
      }else if(isTokenRequered){
        return  await AXIOS_BACKEND_API.get(URL, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_PUT_REQUEST_BACKEND_API = async ({URL, body, isTokenRequered})=> {
    try {
      if(!isTokenRequered){
        return  await AXIOS_BACKEND_API.put(URL, {data: body});
      }else if(isTokenRequered){
        return  await AXIOS_BACKEND_API.put(URL, {data: body}, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}

export const HTTP_DELETE_REQUEST_BACKEND_API = async ({URL, body, isTokenRequired})=> {
    try {
      if(!isTokenRequired){
        return  await AXIOS_BACKEND_API.delete(URL, {data: body});
      }else if(isTokenRequired){
        return  await AXIOS_BACKEND_API.delete(URL, {data: body}, {headers: HEADER});
      }      
    } catch (err) {
      console.log(err);
    }  
}