import {
  FETCH_ALLMESSAGE_REQUEST,
  FETCH_ALLMESSAGE_SUCCESS,
  FETCH_ALLMESSAGE_FALIURE
} from './AllMessageConstants'
import {config} from '../config'

export const fetchAllMessageRequest = (message_info) =>{
  return{
    type : FETCH_ALLMESSAGE_REQUEST,
    payload:message_info
  }
}

export const fetchAllMessageSuccess = (all_message_success) =>{
  return{
    type : FETCH_ALLMESSAGE_SUCCESS,
    payload : all_message_success
  }
}

export const fetchAllMessageFaliure = (error) =>{
  return{
    type : FETCH_ALLMESSAGE_FALIURE,
    payload : error
  }
}

export const fetchAllBook = (message_info) =>{
    return(dispatch) => {
      dispatch(fetchAllMessageRequest(message_info))
      const userId = message_info != undefined && message_info.userId != undefined ? message_info.userId : undefined
      const createdById = message_info != undefined && message_info.createdById != undefined  ? message_info.createdById : undefined

      const url =`${config.api_root}/get_all_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  UserId:userId,
                  CreatedById : createdById
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(message_res =>{
      const all_message_success = message_res
      dispatch(fetchAllMessageSuccess(all_message_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllMessageFaliure(errorMsg))
    })
    }
}
