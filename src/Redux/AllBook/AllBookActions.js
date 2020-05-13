import {
  FETCH_ALLBOOK_REQUEST,
  FETCH_ALLBOOK_SUCCESS,
  FETCH_ALLBOOK_FALIURE
} from './AllBookConstants'
import {config} from '../config'

export const fetchAllBookRequest = (book_info) =>{
  return{
    type : FETCH_ALLBOOK_REQUEST,
    payload:book_info
  }
}

export const fetchAllBookSuccess = (all_book_success) =>{
  return{
    type : FETCH_ALLBOOK_SUCCESS,
    payload : all_book_success
  }
}

export const fetchAllBookFaliure = (error) =>{
  return{
    type : FETCH_ALLBOOK_FALIURE,
    payload : error
  }
}

export const fetchAllBook = (book_info) =>{
    return(dispatch) => {
      dispatch(fetchAllBookRequest(book_info))
      const writter = book_info != undefined && book_info.writter != undefined ? book_info.writter : undefined
      const classId = book_info != undefined && book_info.classId != undefined  ? book_info.classId : undefined
      const published = book_info != undefined && book_info.published != undefined ? book_info.published : undefined
      const subjectId = book_info != undefined && book_info.subjectId != undefined  ? book_info.subjectId : undefined
      const bookType = book_info != undefined && book_info.bookType != undefined  ? book_info.bookType : undefined

      const url =`${config.api_root}/get_all_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  Writter:writter,
                  ClassId:classId,
                  Published : published,
                  SubjectId : subjectId,
                  BookType : bookType
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(book_res =>{
      const all_book_success = book_res
      dispatch(fetchAllBookSuccess(all_book_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllBookFaliure(errorMsg))
    })
    }
}
