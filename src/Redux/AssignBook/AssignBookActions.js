import {
  ASSIGN_BOOK_REQUEST,
  ASSIGN_BOOK_SUCCESS,
  ASSIGN_BOOK_FALIURE
} from './AssignBookConstants'
import {config} from '../config'

export const assignBookRequest = (assign_book_info) =>{
  return{
    type : ASSIGN_BOOK_REQUEST,
    payload : assign_book_info
  }
}

export const assignBookSuccess = (assign_book_success) =>{
  return{
    type : ASSIGN_BOOK_SUCCESS,
    payload : assign_book_success
  }
}

export const assignBookFaliure = (error) =>{
  return{
    type : ASSIGN_BOOK_FALIURE,
    payload : error
  }
}

export const assignBook = (assign_book_info) =>{
    return(dispatch) => {
      dispatch(assignBookRequest(assign_book_info))
      const url =`${config.api_root}/assign_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        BookId : assign_book_info.bookId,
        UserId : assign_book_info.userId,
        UserRole : assign_book_info.userRole,
        BookAssignDate : assign_book_info.bookAssignDate,
        BookSubmitDate : assign_book_info.bookSubmitDate,
        BookCharges : assign_book_info.bookCharges
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(assign_book_res =>{
      const assign_book_success = assign_book_res
      dispatch(assignBookSuccess(assign_book_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(assignBookFaliure(errorMsg))
    })
    }
}
