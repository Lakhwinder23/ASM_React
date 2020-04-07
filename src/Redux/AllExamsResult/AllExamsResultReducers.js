import {
  FETCH_ALLEXAMS_RESULT_REQUEST,
  FETCH_ALLEXAMS_RESULT_SUCCESS,
  FETCH_ALLEXAMS_RESULT_FALIURE
} from './AllExamsResultConstants'

const intialstate = {
  all_exams_result_loading : false,
  all_exams_result : [],
  all_exams_result_error : ''
}

const AllExamsResultReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLEXAMS_RESULT_REQUEST : return{
      ...state,
      all_exams_result_loading:true
    }
    case FETCH_ALLEXAMS_RESULT_SUCCESS : return{
      ...state,
      all_exams_result_loading:false,
      all_exams_result:action.payload
    }
    case FETCH_ALLEXAMS_RESULT_FALIURE : return{
      ...state,
      all_exams_result_error:action.payload
    }
    default: return state
  }

}

export default AllExamsResultReducers
