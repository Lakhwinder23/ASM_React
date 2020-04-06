import {
  ADD_EXPENSE_TYPE_REQUEST,
  ADD_EXPENSE_TYPE_SUCCESS,
  ADD_EXPENSE_TYPE_FALIURE
} from './AddExpenseTypeConstants'
import {config} from '../config'

export const addExpenseTypeRequest = (expenseType_info) =>{
  return{
    type : ADD_EXPENSE_TYPE_REQUEST,
    payload : expenseType_info
  }
}

export const addExpenseTypeSuccess = (add_expenseType_success) =>{
  return{
    type : ADD_EXPENSE_TYPE_SUCCESS,
    payload : add_expenseType_success
  }
}

export const addExpenseTypeFaliure = (error) =>{
  return{
    type : ADD_EXPENSE_TYPE_FALIURE,
    payload : error
  }
}

export const addExpenseType = (expenseType_info) =>{
    return(dispatch) => {
      dispatch(addExpenseRequest(expenseType_info))
      const url =`${config.api_root}/add_expense_type`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ExpenseType : expenseType.expenseType
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_expenseType_res =>{
      const add_expenseType_success = add_expenseType_res
      dispatch(addExpenseSuccess(add_expenseType_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addExpenseFaliure(errorMsg))
    })
    }
}
