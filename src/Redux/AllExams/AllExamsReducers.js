import {
  FETCH_ALLEXAMS_REQUEST,
  FETCH_ALLEXAMS_SUCCESS,
  FETCH_ALLEXAMS_FALIURE
} from './AllExamsConstants'

const intialstate = {
  all_exams_loading : false,
  all_exams : [],
  all_exams_error : ''
}

const AllExamsReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLEXAMS_REQUEST : return{
      ...state,
      all_exams_loading:true
    }
    case FETCH_ALLEXAMS_SUCCESS : return{
      ...state,
      all_exams_loading:false,
      all_exams:action.payload
    }
    case FETCH_ALLEXAMS_FALIURE : return{
      ...state,
      all_exams_error:action.payload
    }
    default: return state
  }

}

export default AllExamsReducers
