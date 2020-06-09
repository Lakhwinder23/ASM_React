import {
  FETCH_ALLASSIGNBOOK_REQUEST,
  FETCH_ALLASSIGNBOOK_SUCCESS,
  FETCH_ALLASSIGNBOOK_FALIURE
} from './AllAssignBookConstants'
import {config} from '../config'

export const fetchAllAssignBookRequest = () =>{
  return{
    type : FETCH_ALLASSIGNBOOK_REQUEST
  }
}

export const fetchAllAssignBookSuccess = (all_assign_book_success) =>{
  return{
    type : FETCH_ALLASSIGNBOOK_SUCCESS,
    payload : all_assign_book_success
  }
}

export const fetchAllAssignBookFaliure = (error) =>{
  return{
    type : FETCH_ALLASSIGNBOOK_FALIURE,
    payload : error
  }
}

export const fetchAllAssignBook = () =>{
    return(dispatch) => {
      dispatch(fetchAllAssignBookRequest())
      const url =`${config.api_root}/get_all_Assign_book`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_assign_book_res =>{
      const all_assign_book_success = all_assign_book_res
      dispatch(fetchAllAssignBookSuccess(all_assign_book_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAssignBookFaliure(errorMsg))
    })
    }
}
