import {
  FETCH_ALLMESSAGE_REQUEST,
  FETCH_ALLMESSAGE_SUCCESS,
  FETCH_ALLMESSAGE_FALIURE
} from './AllMessageConstants'

const intialstate = {
  all_message_loading : false,
  all_message : [],
  all_message_error : ''
}

const AllMessageReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLMESSAGE_REQUEST : return{
      ...state,
      all_message_loading:true
    }
    case FETCH_ALLMESSAGE_SUCCESS : return{
      ...state,
      all_message_loading:false,
      all_message:action.payload
    }
    case FETCH_ALLMESSAGE_FALIURE : return{
      ...state,
      all_message_error:action.payload
    }
    default: return state
  }

}

export default AllMessageReducers
