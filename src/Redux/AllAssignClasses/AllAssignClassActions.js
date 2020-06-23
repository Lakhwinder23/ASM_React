import {
  FETCH_ALLASSIGNCLASS_REQUEST,
  FETCH_ALLASSIGNCLASS_SUCCESS,
  FETCH_ALLASSIGNCLASS_FALIURE
} from './AllAssignClassConstants'
import {config} from '../config'

export const fetchAllAssignClassRequest = (all_assign_class_info) =>{
  return{
    type : FETCH_ALLASSIGNCLASS_REQUEST,
    payload:all_assign_class_info
  }
}

export const fetchAllAssignClassSuccess = (all_assign_class_success) =>{
  return{
    type : FETCH_ALLASSIGNCLASS_SUCCESS,
    payload : all_assign_class_success
  }
}

export const fetchAllAssignClassFaliure = (error) =>{
  return{
    type : FETCH_ALLASSIGNCLASS_FALIURE,
    payload : error
  }
}

export const fetchAllAssignClasses = (all_assign_class_info) =>{
    return(dispatch) => {
      dispatch(fetchAllAssignClassRequest(all_assign_class_info))
      const url =`${config.api_root}/get_all_assign_class`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body:JSON.stringify({
        ClassId:all_assign_class_info != undefined ? all_assign_class_info.classId !="" ? all_assign_class_info.classId :undefined:undefined,
        SectionId:all_assign_class_info != undefined ? all_assign_class_info.sectionId !="" ? all_assign_class_info.sectionId :undefined:undefined,
        TeacherId:all_assign_class_info != undefined ? all_assign_class_info.teacherId !="" ? all_assign_class_info.teacherId :undefined:undefined,
        IsIncharge:all_assign_class_info != undefined ? all_assign_class_info.isIncharge !="" ? all_assign_class_info.isIncharge :undefined:undefined,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_assign_class_res =>{
      const all_assign_class_success = all_assign_class_res
      dispatch(fetchAllAssignClassSuccess(all_assign_class_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAssignClassFaliure(errorMsg))
    })
    }
}
