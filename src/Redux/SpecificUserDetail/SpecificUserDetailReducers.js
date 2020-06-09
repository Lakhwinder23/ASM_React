import {
  FETCH_SPECIFIC_USER_DETAIL_REQUEST,
  FETCH_SPECIFIC_USER_DETAIL_SUCCESS,
  FETCH_SPECIFIC_USER_DETAIL_FALIURE
} from './SpecificUserDetailConstants'

const intialstate = {
  specific_user_detail_loading : false,
  specific_user_detail : [],
  specific_user_detail_error : ''
}

const SpecificUserDetailReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_SPECIFIC_USER_DETAIL_REQUEST : return{
      ...state,
      specific_user_detail_loading:true
    }
    case FETCH_SPECIFIC_USER_DETAIL_SUCCESS : return{
      ...state,
      specific_user_detail_loading:false,
      specific_user_detail:action.payload
    }
    case FETCH_SPECIFIC_USER_DETAIL_FALIURE : return{
      ...state,
      specific_user_detail_error:action.payload
    }
    default: return state
  }

}

export default SpecificUserDetailReducers
