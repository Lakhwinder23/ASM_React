import {
  FETCH_ALLFEES_REQUEST,
  FETCH_ALLFEES_SUCCESS,
  FETCH_ALLFEES_FALIURE
} from './AllFeesConstants'

const intialstate = {
  all_fees_loading : false,
  all_fees : [],
  all_fees_error : ''
}

const AllFeesReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLFEES_REQUEST : return{
      ...state,
      all_fees_loading:true
    }
    case FETCH_ALLFEES_SUCCESS : return{
      ...state,
      all_fees_loading:false,
      all_fees:action.payload
    }
    case FETCH_ALLFEES_FALIURE : return{
      ...state,
      all_fees_error:action.payload
    }
    default: return state
  }

}

export default AllFeesReducers
