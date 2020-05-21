import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FALIURE
} from './LoginConstants'


const intialstate = {
  login_loading : false,
  login : [],
  login_error : '',
  login_success : false
}

const LoginReducers = (state = intialstate,action) =>{
  switch(action.type){
    case LOGIN_REQUEST : return{
      ...state,
      login_loading:true
    }
    case LOGIN_SUCCESS : return{
      ...state,
      login_loading:false,
      login_success:true,
      login:action.payload
    }
    case LOGIN_FALIURE : return{
      ...state,
      login_error:action.payload
    }
    default: return state
  }

}

export default LoginReducers
