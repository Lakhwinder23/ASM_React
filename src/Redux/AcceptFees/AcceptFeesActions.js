import {
  ACCEPT_FEES_REQUEST,
  ACCEPT_FEES_SUCCESS,
  ACCEPT_FEES_FALIURE
} from './AcceptFeesConstants'
import {config} from '../config'

export const acceptFeesRequest = (accept_fees_info) =>{
  return{
    type : ACCEPT_FEES_REQUEST,
    payload : accept_fees_info
  }
}

export const acceptFeesSuccess = (accept_fees_success) =>{
  return{
    type : ACCEPT_FEES_SUCCESS,
    payload : accept_fees_success
  }
}

export const acceptFeesFaliure = (error) =>{
  return{
    type : ACCEPT_FEES_FALIURE,
    payload : error
  }
}

export const acceptFees = (accept_fees_info) =>{
    return(dispatch) => {
      dispatch(acceptFeesRequest(accept_fees_info))
      const url =`${config.api_root}/add_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        payid : accept_fees_info.payid,
        paymode : accept_fees_info.paymode
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(accept_fees_res =>{
      const accept_fees_success = accept_fees_res
      dispatch(acceptFeesSuccess(accept_fees_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(acceptFeesFaliure(errorMsg))
    })
    }
}
