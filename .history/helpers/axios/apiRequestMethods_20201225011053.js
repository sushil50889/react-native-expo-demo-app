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