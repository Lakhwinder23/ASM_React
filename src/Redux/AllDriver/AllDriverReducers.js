import {
  FETCH_ALLDRIVER_REQUEST,
  FETCH_ALLDRIVER_SUCCESS,
  FETCH_ALLDRIVER_FALIURE
} from './AllDriverConstants'

const intialstate = {
  all_driver_loading : false,
  all_driver : [],
  all_driver_error : ''
}

const AllDriverReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLDRIVER_REQUEST : return{
      ...state,
      all_driver_loading:true
    }
    case FETCH_ALLDRIVER_SUCCESS : return{
      ...state,
      all_driver_loading:false,
      all_driver:action.payload
    }
    case FETCH_ALLDRIVER_FALIURE : return{
      ...state,
      all_driver_error:action.payload
    }
    default: return state
  }

}

export default AllDriverReducers
