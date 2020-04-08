import {
  FETCH_ALLNOTICE_REQUEST,
  FETCH_ALLNOTICE_SUCCESS,
  FETCH_ALLNOTICE_FALIURE
} from './AllNoticeConstants'
import {config} from '../config'

export const fetchAllNoticeRequest = () =>{
  return{
    type : FETCH_ALLNOTICE_REQUEST
  }
}

export const fetchAllNoticeSuccess = (all_notices_success) =>{
  return{
    type : FETCH_ALLNOTICE_SUCCESS,
    payload : all_notices_success
  }
}

export const fetchAllNoticeFaliure = (error) =>{
  return{
    type : FETCH_ALLNOTICE_FALIURE,
    payload : error
  }
}

export const fetchAllNotices = () =>{
    return(dispatch) => {
      dispatch(fetchAllNoticeRequest())
      const url =`${config.api_root}/get_all_notice`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_notices_res =>{
      const all_notices_success = all_notices_res
      dispatch(fetchAllNoticeSuccess(all_notices_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllNoticeFaliure(errorMsg))
    })
    }
}
