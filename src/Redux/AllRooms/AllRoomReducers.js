import {
  FETCH_ALLROOM_REQUEST,
  FETCH_ALLROOM_SUCCESS,
  FETCH_ALLROOM_FALIURE
} from './AllRoomConstants'

const intialstate = {
  all_rooms_loading : false,
  all_rooms : [],
  all_rooms_error : ''
}

const AllRoomReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLROOM_REQUEST : return{
      ...state,
      all_rooms_loading:true
    }
    case FETCH_ALLROOM_SUCCESS : return{
      ...state,
      all_rooms_loading:false,
      all_rooms:action.payload
    }
    case FETCH_ALLROOM_FALIURE : return{
      ...state,
      all_rooms_error:action.payload
    }
    default: return state
  }

}

export default AllRoomReducers
