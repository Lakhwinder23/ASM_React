import {
  FETCH_ALLEXAMS_REQUEST,
  FETCH_ALLEXAMS_SUCCESS,
  FETCH_ALLEXAMS_FALIURE
} from './AllExamsConstants'
import {config} from '../config'

export const fetchAllExamsRequest = (exams_info) =>{
  return{
    type : FETCH_ALLEXAMS_REQUEST,
    payload:exams_info
  }
}

export const fetchAllExamsSuccess = (all_exams_success) =>{
  return{
    type : FETCH_ALLEXAMS_SUCCESS,
    payload:all_exams_success
  }
}

export const fetchAllExamsFaliure = (error) =>{
  return{
    type : FETCH_ALLEXAMS_FALIURE,
    payload:error
  }
}

export const fetchAllExams = (exams_info) =>{
    return(dispatch) => {
      dispatch(fetchAllExamsRequest(exams_info))
      const examDate = exams_info !== undefined ? exams_info.examDate : undefined
      const classid = exams_info !== undefined ? exams_info.classId : undefined
      const sectionid = exams_info !== undefined ? exams_info.sectionId : undefined
      const subjectid = exams_info !== undefined ? exams_info.subjectId : undefined
      const url =`${config.api_root}/get_all_exam`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  ExamDate:examDate,
                  ClassId : classid,
                  SectionId : sectionid,
                  SubjectId : subjectid
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(exams_res =>{
      const all_exams_success = exams_res
      // dispatch(fetchAllExamsSuccess(all_exams_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllExamsFaliure(errorMsg))
    })
    }
}
