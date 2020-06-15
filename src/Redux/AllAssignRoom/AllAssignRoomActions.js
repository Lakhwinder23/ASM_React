import {
  FETCH_ALLASSIGNROOM_REQUEST,
  FETCH_ALLASSIGNROOM_SUCCESS,
  FETCH_ALLASSIGNROOM_FALIURE
} from './AllAssignRoomConstants'
import {config} from '../config'

export const fetchAllAssignRoomRequest = () =>{
  return{
    type : FETCH_ALLASSIGNROOM_REQUEST
  }
}

export const fetchAllAssignRoomSuccess = (all_expense_success) =>{
  return{
    type : FETCH_ALLASSIGNROOM_SUCCESS,
    payload : all_expense_success
  }
}

export const fetchAllAssignRoomFaliure = (error) =>{
  return{
    type : FETCH_ALLASSIGNROOM_FALIURE,
    payload : error
  }
}

export const fetchAllAssignRoom = () =>{
    return(dispatch) => {
      dispatch(fetchAllAssignRoomRequest())
      const url =`${config.api_root}/get_all_assign_room`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_expense_res =>{
      const all_expense_success = all_expense_res
      dispatch(fetchAllAssignRoomSuccess(all_expense_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAssignRoomFaliure(errorMsg))
    })
    }
}
