import {
  FETCH_ALLEXAMS_RESULT_STUDENT_REQUEST,
  FETCH_ALLEXAMS_RESULT_STUDENT_SUCCESS,
  FETCH_ALLEXAMS_RESULT_STUDENT_FALIURE
} from './AllExamsResultStudentConstants'
import {config} from '../config'

export const fetchAllExamsResultStudentRequest = (exams_result_student_info) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_STUDENT_REQUEST,
    payload:exams_result_student_info
  }
}

export const fetchAllExamsResultStudentSuccess = (all_exams_result_student_success) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_STUDENT_SUCCESS,
    payload : all_exams_result_student_success
  }
}

export const fetchAllExamsResultStudentFaliure = (error) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_STUDENT_FALIURE,
    payload : error
  }
}

export const fetchAllExamsResultStudent = (exams_result_student_info) =>{
    return(dispatch) => {
      dispatch(fetchAllExamsResultStudentRequest(exams_result_student_info))
      const studentName = exams_result_student_info != undefined && exams_result_student_info.studentName != undefined ? exams_result_student_info.studentName : undefined
      const studentid = exams_result_student_info != undefined && exams_result_student_info.studentId != undefined  ? exams_result_student_info.studentId : undefined
      const classid = exams_result_student_info != undefined && exams_result_student_info.classId != undefined ? exams_result_student_info.classId : undefined
      const sectionid = exams_result_student_info != undefined && exams_result_student_info.sectionId != undefined  ? exams_result_student_info.sectionId : undefined
      const examid = exams_result_student_info != undefined && exams_result_student_info.examId != undefined ? exams_result_student_info.examId : undefined
      const year = exams_result_student_info != undefined && exams_result_student_info.year != undefined ? exams_result_student_info.year : undefined
      const url =`${config.api_root}/get_all_exam`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  StudentName:studentName,
                  StudentId:studentid,
                  ClassId : classid,
                  SectionId : sectionid,
                  ExamId : examid,
                  Year:year,
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(exams_result_res =>{
      const all_exams_result_success = exams_result_res
      dispatch(fetchAllExamsResultStudentSuccess(all_exams_result_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllExamsResultStudentFaliure(errorMsg))
    })
    }
}
