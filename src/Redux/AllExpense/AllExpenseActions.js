import {
  FETCH_ALLEXPENSE_REQUEST,
  FETCH_ALLEXPENSE_SUCCESS,
  FETCH_ALLEXPENSE_FALIURE
} from './AllExpenseConstants'
import {config} from '../config'

export const fetchAllExpenseRequest = () =>{
  return{
    type : FETCH_ALLEXPENSE_REQUEST
  }
}

export const fetchAllExpenseSuccess = (all_expense_success) =>{
  return{
    type : FETCH_ALLEXPENSE_SUCCESS,
    payload : all_expense_success
  }
}

export const fetchAllExpenseFaliure = (error) =>{
  return{
    type : FETCH_ALLEXPENSE_FALIURE,
    payload : error
  }
}

export const fetchAllExpense = () =>{
    return(dispatch) => {
      dispatch(fetchAllExpenseRequest())
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
    .then(all_expense_res =>{
      const all_expense_success = all_expense_res
      dispatch(fetchAllExpenseSuccess(all_expense_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllExpenseFaliure(errorMsg))
    })
    }
}
