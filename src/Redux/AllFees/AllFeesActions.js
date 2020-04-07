import {
  FETCH_ALLFEES_REQUEST,
  FETCH_ALLFEES_SUCCESS,
  FETCH_ALLFEES_FALIURE
} from './AllFeesConstants'
import {config} from '../config'

export const fetchAllFeesRequest = (fees_info) =>{
  return{
    type : FETCH_ALLFEES_REQUEST,
    payload:fees_info
  }
}

export const fetchAllFeesSuccess = (all_fees_success) =>{
  return{
    type : FETCH_ALLFEES_SUCCESS,
    payload : all_fees_success
  }
}

export const fetchAllFeesFaliure = (error) =>{
  return{
    type : FETCH_ALLFEES_FALIURE,
    payload : error
  }
}

export const fetchAllFees = (fees_info) =>{
    return(dispatch) => {
      dispatch(fetchAllFeesRequest(fees_info))
      const classid = fees_info != undefined ? fees_info.classId : undefined
      const url =`${config.api_root}/get_all_fees`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  ClassId : classid
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(fees_res =>{
      const all_fees_success = fees_res
      dispatch(fetchAllFeesSuccess(all_fees_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllFeesFaliure(errorMsg))
    })
    }
}
