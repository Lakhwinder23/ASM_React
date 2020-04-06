import {
  ADD_EXAM_REQUEST,
  ADD_EXAM_SUCCESS,
  ADD_EXAM_FALIURE
} from './AddExamConstants'
import {config} from '../config'

export const addExamRequest = (exam_info) =>{
  return{
    type : ADD_EXAM_REQUEST,
    payload : exam_info
  }
}

export const addExamSuccess = (exam_success) =>{
  return{
    type : ADD_EXAM_SUCCESS,
    payload : exam_success
  }
}

export const addExamFaliure = (error) =>{
  return{
    type : ADD_EXAM_FALIURE,
    payload : error
  }
}

export const addExam = (exam_info) =>{
    return(dispatch) => {
      dispatch(addFeesRequest(exam_info))
      const url =`${config.api_root}/add_exam`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : exam_info.classId,
        SectionId : exam_info.sectionId,
        SubjectId : exam_info.subjectId,
        TeacherId : exam_info.teacherId,
        MaxNumber : exam_info.maxNumber,
        ExamDate : exam_info.examDate,
        ExamName : exam_info.examName,
        ExamTime : exam_info.examTime,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_exam_res =>{
      const add_exam_success = add_exam_res
      dispatch(addFeesSuccess(add_exam_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addFeesFaliure(errorMsg))
    })
    }
}
