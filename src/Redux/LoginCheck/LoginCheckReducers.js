import {
  LOGIN_CHECK
} from './LoginCheckConstants'


const intialstate = {
  is_Login:false
}

const LoginCheckReducers = (state = intialstate,action) =>{
  switch(action.type){
    case LOGIN_CHECK : return{
      is_Login:action.payload
    }
    default: return state
  }

}

export default LoginCheckReducers
