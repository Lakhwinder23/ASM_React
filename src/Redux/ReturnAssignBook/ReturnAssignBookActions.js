import {
  RETURN_ASSIGN_BOOK_REQUEST,
  RETURN_ASSIGN_BOOK_SUCCESS,
  RETURN_ASSIGN_BOOK_FALIURE
} from './ReturnAssignBookConstants'
import {config} from '../config'

export const returnAssignBookRequest = (return_assign_book_info) =>{
  return{
    type : RETURN_ASSIGN_BOOK_REQUEST,
    payload : return_assign_book_info
  }
}

export const returnAssignBookSuccess = (return_assign_book_success) =>{
  return{
    type : RETURN_ASSIGN_BOOK_SUCCESS,
    payload : return_assign_book_success
  }
}

export const returnAssignBookFaliure = (error) =>{
  return{
    type : RETURN_ASSIGN_BOOK_FALIURE,
    payload : error
  }
}

export const returnAssignBook = (return_assign_book_info) =>{
    return(dispatch) => {
      dispatch(returnAssignBookRequest(return_assign_book_info))
      const url =`${config.api_root}/return_assign_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        BookId : return_assign_book_info.bookId,
        UserId : return_assign_book_info.userId,
        UserRole : return_assign_book_info.userRole,
        BookAssignDate : return_assign_book_info.bookAssignDate
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(return_assign_book_res =>{
      const return_assign_book_success = return_assign_book_res
      dispatch(returnAssignBookSuccess(return_assign_book_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(returnAssignBookFaliure(errorMsg))
    })
    }
}
