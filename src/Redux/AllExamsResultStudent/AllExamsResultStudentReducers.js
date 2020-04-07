import {
  FETCH_ALLEXAMS_RESULT_STUDENT_REQUEST,
  FETCH_ALLEXAMS_RESULT_STUDENT_SUCCESS,
  FETCH_ALLEXAMS_RESULT_STUDENT_FALIURE
} from './AllExamsResultStudentConstants'

const intialstate = {
  all_exams_result_student_loading : false,
  all_exams_result_student : [],
  all_exams_result_student_error : ''
}

const AllExamsResultStudentReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLEXAMS_RESULT_STUDENT_REQUEST : return{
      ...state,
      all_exams_result_student_loading:true
    }
    case FETCH_ALLEXAMS_RESULT_STUDENT_SUCCESS : return{
      ...state,
      all_exams_result_student_loading:false,
      all_exams_result_student:action.payload
    }
    case FETCH_ALLEXAMS_RESULT_STUDENT_FALIURE : return{
      ...state,
      all_exams_result_student_error:action.payload
    }
    default: return state
  }

}

export default AllExamsResultStudentReducers
