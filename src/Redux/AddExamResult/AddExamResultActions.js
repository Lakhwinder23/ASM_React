import {
  ADD_EXAM_RESULT_REQUEST,
  ADD_EXAM_RESULT_SUCCESS,
  ADD_EXAM_RESULT_FALIURE
} from './AddExamResultConstants'
import {config} from '../config'

export const addExamResultRequest = (exam_result_info) =>{
  return{
    type : ADD_EXAM_RESULT_REQUEST,
    payload : exam_result_info
  }
}

export const addExamResultSuccess = (exam_result_success) =>{
  return{
    type : ADD_EXAM_RESULT_SUCCESS,
    payload : exam_result_success
  }
}

export const addExamResultFaliure = (error) =>{
  return{
    type : ADD_EXAM_RESULT_FALIURE,
    payload : error
  }
}

export const addExam = (exam_result_info) =>{
    return(dispatch) => {
      dispatch(addExamResultRequest(exam_result_info))
      const url =`${config.api_root}/add_exam_result`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : exam_result_info.classId,
        SectionId : exam_result_info.sectionId,
        ExamId  : exam_result_info.examId ,
        StudentResult  : exam_result_info.studentResult
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_exam_result_res =>{
      const add_exam_result_success = add_exam_result_res
      dispatch(addExamResultSuccess(add_exam_result_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addExamResultFaliure(errorMsg))
    })
    }
}
