import {
  ADD_FEES_COLLECTION_REQUEST,
  ADD_FEES_COLLECTION_SUCCESS,
  ADD_FEES_COLLECTION_FALIURE
} from './AddFeesCollectionConstants'
import {config} from '../config'

export const addFeesCollectionRequest = (fees_collection_info) =>{
  return{
    type : ADD_FEES_COLLECTION_REQUEST,
    payload : fees_collection_info
  }
}

export const addFeesCollectionSuccess = (add_fees_collection_success) =>{
  return{
    type : ADD_FEES_COLLECTION_SUCCESS,
    payload : add_fees_collection_success
  }
}

export const addFeesCollectionFaliure = (error) =>{
  return{
    type : ADD_FEES_COLLECTION_FALIURE,
    payload : error
  }
}

export const addFeesCollection = (fees_collection_info) =>{
    return(dispatch) => {
      dispatch(addFeesRequest(fees_collection_info))
      const url =`${config.api_root}/add_fee_collection`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        Date : fees_collection_info.date
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_fees_collection_res =>{
      const add_fees_collection_success = add_fees_collection_res
      dispatch(addFeesSuccess(add_fees_collection_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addFeesFaliure(errorMsg))
    })
    }
}
