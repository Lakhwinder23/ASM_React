import {
  FETCH_ALLEXAMS_RESULT_REQUEST,
  FETCH_ALLEXAMS_RESULT_SUCCESS,
  FETCH_ALLEXAMS_RESULT_FALIURE
} from './AllExamsResultConstants'
import {config} from '../config'

export const fetchAllExamsResultRequest = (exams_result_info) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_REQUEST,
    payload:exams_result_info
  }
}

export const fetchAllExamsResultSuccess = (all_exams_result_success) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_SUCCESS,
    payload : all_exams_result_success
  }
}

export const fetchAllExamsResultFaliure = (error) =>{
  return{
    type : FETCH_ALLEXAMS_RESULT_FALIURE,
    payload : error
  }
}

export const fetchAllExamsResult = (exams_result_info) =>{
    return(dispatch) => {
      dispatch(fetchAllExamsResultRequest(exams_result_info))
      const classid = exams_result_info != undefined && exams_result_info.classId != undefined ? exams_result_info.classId : undefined
      const sectionid = exams_result_info != undefined && exams_result_info.sectionId != undefined  ? exams_result_info.sectionId : undefined
      const examid = exams_result_info != undefined && exams_result_info.examId != undefined ? exams_result_info.examId : undefined
      const year = exams_result_info != undefined && exams_result_info.year != undefined ? exams_result_info.year : undefined
      const url =`${config.api_root}/get_all_exam_result`;
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
                  ExamId : examid,
                  Year:year,
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(exams_result_res =>{
      const all_exams_result_success = exams_result_res
      //dispatch(fetchAllExamsResultSuccess(all_exams_result_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllExamsResultFaliure(errorMsg))
    })
    }
}
