import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FALIURE
} from './AddRoomConstants'

const intialstate = {
  add_room_loading : false,
  add_room : [],
  add_room_error : '',
  add_room_success : false
}

const AddRoomReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_ROOM_REQUEST : return{
      ...state,
      add_room_loading:true
    }
    case ADD_ROOM_SUCCESS : return{
      ...state,
      add_room_loading:false,
      add_room_success:true,
      add_room:action.payload
    }
    case ADD_ROOM_FALIURE : return{
      ...state,
      add_room_error:action.payload
    }
    default: return state
  }

}

export default AddRoomReducers
