import axios from "axios";
import {parseCookies} from 'nookies'
export const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  },
})


api.interceptors.request.use(response => {
  const cookieToken = parseCookies()
  api.defaults.headers.common["Authorization"] = 'Bearer ' + cookieToken.user_token

  return response
})



