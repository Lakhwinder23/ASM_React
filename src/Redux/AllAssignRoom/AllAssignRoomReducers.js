import {
  FETCH_ALLASSIGNROOM_REQUEST,
  FETCH_ALLASSIGNROOM_SUCCESS,
  FETCH_ALLASSIGNROOM_FALIURE
} from './AllAssignRoomConstants'

const intialstate = {
  all_assign_room_loading : false,
  all_assign_room : [],
  all_assign_room_error : ''
}

const AllAssignRoomReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLASSIGNROOM_REQUEST : return{
      ...state,
      all_assign_room_loading:true
    }
    case FETCH_ALLASSIGNROOM_SUCCESS : return{
      ...state,
      all_assign_room_loading:false,
      all_assign_room:action.payload
    }
    case FETCH_ALLASSIGNROOM_FALIURE : return{
      ...state,
      all_assign_room_error:action.payload
    }
    default: return state
  }

}

export default AllAssignRoomReducers
