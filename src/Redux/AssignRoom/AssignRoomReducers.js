import {
  ASSIGN_ROOM_REQUEST,
  ASSIGN_ROOM_SUCCESS,
  ASSIGN_ROOM_FALIURE
} from './AssignRoomConstants'

const intialstate = {
  assign_room_loading : false,
  assign_room : [],
  assign_room_error : '',
  assign_room_success : false
}

const AssignRoomReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ASSIGN_ROOM_REQUEST : return{
      ...state,
      assign_room_loading:true
    }
    case ASSIGN_ROOM_SUCCESS : return{
      ...state,
      assign_room_loading:false,
      assign_room_success:true,
      assign_room:action.payload
    }
    case ASSIGN_ROOM_FALIURE : return{
      ...state,
      assign_room_error:action.payload
    }
    default: return state
  }

}

export default AssignRoomReducers
