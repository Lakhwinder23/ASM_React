import {
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FALIURE
} from './AddMessageConstants'
import {config} from '../config'

export const addMessageRequest = (message_info) =>{
  return{
    type : ADD_MESSAGE_REQUEST,
    payload : message_info
  }
}

export const addMessageSuccess = (message_success) =>{
  return{
    type : ADD_MESSAGE_SUCCESS,
    payload : message_success
  }
}

export const addMessageFaliure = (error) =>{
  return{
    type : ADD_MESSAGE_FALIURE,
    payload : error
  }
}

export const addMessage = (message_info) =>{
    return(dispatch) => {
      dispatch(addMessageRequest(message_info))
      const url =`${config.api_root}/add_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        UserId : message_info.userId,
        CreatedById : message_info.createdById,
        title  : message_info.title ,
        message  : message_info.message
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_message_res =>{
      const add_message_success = add_message_res
      dispatch(addMessageSuccess(add_message_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addMessageFaliure(errorMsg))
    })
    }
}
