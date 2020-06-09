import {
  FETCH_ALLEXPENSETYPE_REQUEST,
  FETCH_ALLEXPENSETYPE_SUCCESS,
  FETCH_ALLEXPENSETYPE_FALIURE
} from './AllExpenseTypeConstants'
import {config} from '../config'

export const fetchAllExpenseTypeRequest = () =>{
  return{
    type : FETCH_ALLEXPENSETYPE_REQUEST
  }
}

export const fetchAllExpenseTypeSuccess = (all_expense_type_success) =>{
  return{
    type : FETCH_ALLEXPENSETYPE_SUCCESS,
    payload : all_expense_type_success
  }
}

export const fetchAllExpenseTypeFaliure = (error) =>{
  return{
    type : FETCH_ALLEXPENSETYPE_FALIURE,
    payload : error
  }
}

export const fetchAllExpenseType = () =>{
    return(dispatch) => {
      dispatch(fetchAllExpenseTypeRequest())
      const url =`${config.api_root}/get_all_expense_Type`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_expense_type_res =>{
      const all_expense_type_success = all_expense_type_res
      dispatch(fetchAllExpenseTypeSuccess(all_expense_type_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllExpenseTypeFaliure(errorMsg))
    })
    }
}
