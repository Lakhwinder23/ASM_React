import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FALIURE
} from './LoginConstants'
import {config} from '../config'

export const loginRequest = (login_info) =>{
  return{
    type : LOGIN_REQUEST,
    payload : login_info
  }
}

export const loginSuccess = (login_success) =>{
  return{
    type : LOGIN_SUCCESS,
    payload : login_success
  }
}

export const loginFaliure = (error) =>{
  return{
    type : LOGIN_FALIURE,
    payload : error
  }
}

export const login = (login_info) =>{
    return(dispatch) => {
      dispatch(loginRequest(login_info))
      const url =`${config.api_root}/login`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        email  : login_info.email,
        password : login_info.password
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(login_res =>{
      const login_success = login_res
      dispatch(loginSuccess(login_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(loginFaliure(errorMsg))
    })
    }
}
