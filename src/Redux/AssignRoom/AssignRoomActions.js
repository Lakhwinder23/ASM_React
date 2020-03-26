import {
  ASSIGN_ROOM_REQUEST,
  ASSIGN_ROOM_SUCCESS,
  ASSIGN_ROOM_FALIURE
} from './AssignRoomConstants'
import {config} from '../config'

export const assignRoomRequest = (assign_room_info) =>{
  return{
    type : ASSIGN_ROOM_REQUEST,
    payload : assign_room_info
  }
}

export const assignRoomSuccess = (assign_room_success) =>{
  return{
    type : ASSIGN_ROOM_SUCCESS,
    payload : assign_room_success
  }
}

export const assignRoomFaliure = (error) =>{
  return{
    type : ASSIGN_ROOM_FALIURE,
    payload : error
  }
}

export const assignRoom = (assign_room_info) =>{
    return(dispatch) => {
      dispatch(assignRoomRequest(assign_room_info))
      const url =`${config.api_root}/assign_room`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        HostelId : assign_room_info.hostelId,
        RoomId : assign_room_info.roomId,
        StudentId : assign_room_info.studentId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(assign_room_res =>{
      const assign_room_success = assign_room_res
      dispatch(assignRoomSuccess(assign_room_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(assignRoomFaliure(errorMsg))
    })
    }
}
