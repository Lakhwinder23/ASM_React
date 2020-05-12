import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FALIURE
} from './AddBookConstants'
import {config} from '../config'

export const addBookRequest = (book_info) =>{
  return{
    type : ADD_BOOK_REQUEST,
    payload : book_info
  }
}

export const addBookSuccess = (book_success) =>{
  return{
    type : ADD_BOOK_SUCCESS,
    payload : book_success
  }
}

export const addBookFaliure = (error) =>{
  return{
    type : ADD_BOOK_FALIURE,
    payload : error
  }
}

export const addBook = (book_info) =>{
    return(dispatch) => {
      dispatch(addBookRequest(book_info))
      const url =`${config.api_root}/add_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        BookName : book_info.bookName,
        TotalBook : book_info.totalBook,
        Writter  : book_info.writter ,
        Published  : book_info.published,
        Creatingdate  : book_info.creatingdate,
        BookType  : book_info.bookType,
        Language  : book_info.language,
        ClassId  : book_info.classId == undefined ? undefined : book_info.classId,
        SubjectId  : book_info.subjectId == undefined ? undefined : book_info.subjectId


      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_book_res =>{
      const add_book_success = add_book_res
      dispatch(addBookSuccess(add_book_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addBookFaliure(errorMsg))
    })
    }
}
