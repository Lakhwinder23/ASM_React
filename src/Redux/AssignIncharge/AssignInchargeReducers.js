import {
  ASSIGN_INCHARGE_REQUEST,
  ASSIGN_INCHARGE_SUCCESS,
  ASSIGN_INCHARGE_FALIURE
} from './AssignInchargeConstants'

const intialstate = {
  assign_incharge_loading : false,
  assign_incharge : [],
  assign_incharge_error : '',
  assign_incharge_success : false
}

const AssignInchargeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ASSIGN_INCHARGE_REQUEST : return{
      ...state,
      assign_incharge_loading:true
    }
    case ASSIGN_INCHARGE_SUCCESS : return{
      ...state,
      assign_incharge_loading:false,
      assign_incharge_success:true,
      assign_incharge:action.payload
    }
    case ASSIGN_INCHARGE_FALIURE : return{
      ...state,
      assign_incharge_error:action.payload
    }
    default: return state
  }

}

export default AssignInchargeReducers
