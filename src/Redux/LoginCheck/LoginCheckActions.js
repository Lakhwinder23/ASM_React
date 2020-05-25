import {
  LOGIN_CHECK
} from './LoginCheckConstants'

export const loginCheck = (login_check_info) =>{
  return{
    type : LOGIN_CHECK,
    payload : login_check_info
  }
}
