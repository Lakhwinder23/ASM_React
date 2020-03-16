import {
  FETCH_STUDENTDETAIL_REQUEST,
  FETCH_STUDENTDETAIL_SUCCESS,
  FETCH_STUDENTDETAIL_FALIURE
} from './StudentDetailConstants'

const intialstate = {
  student_detail_loading : false,
  student_detail : [],
  student_detail_error : ''
}

const StudentDetailReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_STUDENTDETAIL_REQUEST : return{
      ...state,
      student_detail_loading:true
    }
    case FETCH_STUDENTDETAIL_SUCCESS : return{
      ...state,
      student_detail_loading:false,
      student_detail:action.payload
    }
    case FETCH_STUDENTDETAIL_FALIURE : return{
      ...state,
      student_detail_error:action.payload
    }
    default: return state
  }

}

export default StudentDetailReducers
