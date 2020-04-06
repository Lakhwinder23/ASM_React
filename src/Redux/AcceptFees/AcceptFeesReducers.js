import {
  ACCEPT_FEES_REQUEST,
  ACCEPT_FEES_SUCCESS,
  ACCEPT_FEES_FALIURE
} from './AcceptFeesConstants'


const intialstate = {
  accept_fees_loading : false,
  accept_fees : [],
  accept_fees_error : '',
  accept_fees_success : false
}

const AcceptFeesReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ACCEPT_FEES_REQUEST : return{
      ...state,
      accept_fees_loading:true
    }
    case ACCEPT_FEES_SUCCESS : return{
      ...state,
      accept_fees_loading:false,
      accept_fees_success:true,
      accept_fees:action.payload
    }
    case ACCEPT_FEES_FALIURE : return{
      ...state,
      accept_fees_error:action.payload
    }
    default: return state
  }

}

export default AcceptFeesReducers
