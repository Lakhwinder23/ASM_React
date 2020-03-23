import {
  FETCH_ALLHOSTEL_REQUEST,
  FETCH_ALLHOSTEL_SUCCESS,
  FETCH_ALLHOSTEL_FALIURE
} from './AllHostelConstants'

const intialstate = {
  all_hostels_loading : false,
  all_hostels : [],
  all_hostels_error : ''
}

const AllHostelReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLHOSTEL_REQUEST : return{
      ...state,
      all_hostels_loading:true
    }
    case FETCH_ALLHOSTEL_SUCCESS : return{
      ...state,
      all_hostels_loading:false,
      all_hostels:action.payload
    }
    case FETCH_ALLHOSTEL_FALIURE : return{
      ...state,
      all_hostels_error:action.payload
    }
    default: return state
  }

}

export default AllHostelReducers
