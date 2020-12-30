import axios from 'axios';

export const AXIOS_YELP = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
  }
});


export const AXIOS_BACKEND_API = axios.create({
    baseURL: 'https://jonnysoft.tech/nodejs/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});