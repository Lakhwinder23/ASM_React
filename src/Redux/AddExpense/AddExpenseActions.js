import {
  ADD_EXPENSE_REQUEST,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FALIURE
} from './AddExpenseConstants'
import {config} from '../config'

export const addExpenseRequest = (expense_info) =>{
  return{
    type : ADD_EXPENSE_REQUEST,
    payload : expense_info
  }
}

export const addExpenseSuccess = (add_expense_success) =>{
  return{
    type : ADD_EXPENSE_SUCCESS,
    payload : add_expense_success
  }
}

export const addExpenseFaliure = (error) =>{
  return{
    type : ADD_EXPENSE_FALIURE,
    payload : error
  }
}

export const addExpense = (expense_info) =>{
    return(dispatch) => {
      dispatch(addExpenseRequest(expense_info))
      const url =`${config.api_root}/add_expenses`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ExpenseTypeId : expense_info.expenseTypeId,
        Name : expense_info.name,
        Amount : expense_info.amount,
        Phone : expense_info.phone,
        Email : expense_info.email,
        Date : expense_info.date,
        Status : expense_info.status,
        UserId : expense_info.userId == undefined ? undefined : expense_info.userId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_expense_res =>{
      const add_expense_success = add_expense_res
      dispatch(addExpenseSuccess(add_expense_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addExpenseFaliure(errorMsg))
    })
    }
}
