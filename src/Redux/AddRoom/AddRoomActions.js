import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FALIURE
} from './AddRoomConstants'
import {config} from '../config'

export const addRoomRequest = (room_info) =>{
  return{
    type : ADD_ROOM_REQUEST,
    payload : room_info
  }
}

export const addRoomSuccess = (add_room_success) =>{
  return{
    type : ADD_ROOM_SUCCESS,
    payload : add_room_success
  }
}

export const addRoomFaliure = (error) =>{
  return{
    type : ADD_ROOM_FALIURE,
    payload : error
  }
}

export const addRoom = (room_info) =>{
    return(dispatch) => {
      dispatch(addRoomRequest(room_info))
      const url =`${config.api_root}/add_room`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        HostelId : room_info.hostelId,
        RoomNumber : room_info.roomNumber,
        RoomType : room_info.roomType,
        TotalBeds : room_info.totalBeds,
        CostPerBeds : room_info.costPerBeds,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_room_res =>{
      const add_room_success = add_room_res
      dispatch(addRoomSuccess(add_room_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addRoomFaliure(errorMsg))
    })
    }
}
