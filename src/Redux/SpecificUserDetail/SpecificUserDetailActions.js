import {
  FETCH_SPECIFIC_USER_DETAIL_REQUEST,
  FETCH_SPECIFIC_USER_DETAIL_SUCCESS,
  FETCH_SPECIFIC_USER_DETAIL_FALIURE
} from './SpecificUserDetailConstants'
import {config} from '../config'

export const fetchSpecificUserDetailRequest = () =>{
  return{
    type : FETCH_SPECIFIC_USER_DETAIL_REQUEST
  }
}

export const fetchSpecificUserDetailSuccess = (specific_user_detail_success) =>{
  return{
    type : FETCH_SPECIFIC_USER_DETAIL_SUCCESS,
    payload : specific_user_detail_success
  }
}

export const fetchSpecificUserDetailFaliure = (error) =>{
  return{
    type : FETCH_SPECIFIC_USER_DETAIL_FALIURE,
    payload : error
  }
}

export const fetchSpecificUserDetail = () =>{
    return(dispatch) => {
      dispatch(fetchSpecificUserDetailRequest())
      const url =`${config.api_root}/details`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(specific_user_detail_res =>{
      const specific_user_detail_success = specific_user_detail_res
      dispatch(fetchSpecificUserDetailSuccess(specific_user_detail_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchSpecificUserDetailFaliure(errorMsg))
    })
    }
}
