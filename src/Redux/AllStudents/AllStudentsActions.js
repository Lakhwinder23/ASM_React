import {
  FETCH_ALLSTUDENTS_REQUEST,
  FETCH_ALLSTUDENTS_SUCCESS,
  FETCH_ALLSTUDENTS_FALIURE
} from './AllStudentsConstants'
import {config} from '../config'

export const fetchAllStudentsRequest = (student_info) =>{
  return{
    type : FETCH_ALLSTUDENTS_REQUEST,
    payload:student_info
  }
}

export const fetchAllStudentsSuccess = (all_students_success) =>{
  return{
    type : FETCH_ALLSTUDENTS_SUCCESS,
    payload : all_students_success
  }
}

export const fetchAllStudentsFaliure = (error) =>{
  return{
    type : FETCH_ALLSTUDENTS_FALIURE,
    payload : error
  }
}

export const fetchAllStudents = (student_info) =>{
    return(dispatch) => {
      dispatch(fetchAllStudentsRequest(student_info))
      const classid = student_info != undefined ? student_info.classId : undefined
      const sectionid = student_info != undefined ? student_info.sectionId : undefined
      const studentid = student_info != undefined ? student_info.studentId : undefined
      const url =`${config.api_root}/get_all_student`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  ClassId : classid,
                  SectionId : sectionid,
                  StudentId: studentid
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(students_res =>{
      const all_students_success = students_res
      dispatch(fetchAllStudentsSuccess(all_students_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllStudentsFaliure(errorMsg))
    })
    }
}
