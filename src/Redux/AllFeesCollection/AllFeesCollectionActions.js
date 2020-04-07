import {
  FETCH_ALLFEES_COLLECTION_REQUEST,
  FETCH_ALLFEES_COLLECTION_SUCCESS,
  FETCH_ALLFEES_COLLECTION_FALIURE
} from './AllFeesCollectionConstants'
import {config} from '../config'

export const fetchAllFeesCollectionRequest = () =>{
  return{
    type : FETCH_ALLFEES_COLLECTION_REQUEST
  }
}

export const fetchAllFeesCollectionSuccess = (all_fees_collection_success) =>{
  return{
    type : FETCH_ALLFEES_COLLECTION_SUCCESS,
    payload : all_fees_collection_success
  }
}

export const fetchAllFeesCollectionFaliure = (error) =>{
  return{
    type : FETCH_ALLFEES_COLLECTION_FALIURE,
    payload : error
  }
}

export const fetchAllFeesCollection = () =>{
    return(dispatch) => {
      dispatch(fetchAllFeesCollectionRequest())
      const url =`${config.api_root}/all_fee_collection`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_fees_collection_res =>{
      const all_fees_collection_success = all_fees_collection_res
      dispatch(fetchAllFeesCollectionSuccess(all_fees_collection_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllFeesCollectionFaliure(errorMsg))
    })
    }
}
