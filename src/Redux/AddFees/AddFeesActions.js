import {
  ADD_FEES_REQUEST,
  ADD_FEES_SUCCESS,
  ADD_FEES_FALIURE
} from './AddFeesConstants'
import {config} from '../config'

export const addFeesRequest = (fees_info) =>{
  return{
    type : ADD_FEES_REQUEST,
    payload : fees_info
  }
}

export const addFeesSuccess = (add_fees_success) =>{
  return{
    type : ADD_FEES_SUCCESS,
    payload : add_fees_success
  }
}

export const addFeesFaliure = (error) =>{
  return{
    type : ADD_FEES_FALIURE,
    payload : error
  }
}

export const addFees = (fees_info) =>{
    return(dispatch) => {
      dispatch(addFeesRequest(fees_info))
      const url =`${config.api_root}/add_fees`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : fees_info.classId,
        MonthlyFees : fees_info.monthlyFees,
        AdmissionFees : fees_info.admissionFee
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_fees_res =>{
      const add_fees_success = add_fees_res
      dispatch(addFeesSuccess(add_fees_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addFeesFaliure(errorMsg))
    })
    }
}
