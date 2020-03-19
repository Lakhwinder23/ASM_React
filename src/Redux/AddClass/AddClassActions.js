import {
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FALIURE
} from './AddClassConstants'
import {config} from '../config'

export const addClassRequest = (class_info) =>{
  return{
    type : ADD_CLASS_REQUEST,
    payload : class_info
  }
}

export const addClassSuccess = (add_class_success) =>{
  return{
    type : ADD_CLASS_SUCCESS,
    payload : add_class_success
  }
}

export const addClassFaliure = (error) =>{
  return{
    type : ADD_CLASS_FALIURE,
    payload : error
  }
}

export const addClass = (class_info) =>{
    return(dispatch) => {
      dispatch(addClassRequest(class_info))
      const url =`${config.api_root}/add_class`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassName : class_info.className,
        TotalSection : class_info.totalSection,
        StudentLimitInClass : class_info.studentLimitInClass,
        ClassMediumId : class_info.classMediumId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_class_res =>{
      const add_class_success = add_class_res
      dispatch(addClassSuccess(add_class_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addClassFaliure(errorMsg))
    })
    }
}
