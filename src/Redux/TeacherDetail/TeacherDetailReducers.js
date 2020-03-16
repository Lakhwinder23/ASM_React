import {
  FETCH_TEACHERDETAIL_REQUEST,
  FETCH_TEACHERDETAIL_SUCCESS,
  FETCH_TEACHERDETAIL_FALIURE
} from './TeacherDetailConstants'

const intialstate = {
  teacher_detail_loading : false,
  teacher_detail : [],
  teacher_detail_error : ''
}

const TeacherDetailReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_TEACHERDETAIL_REQUEST : return{
      ...state,
      teacher_detail_loading:true
    }
    case FETCH_TEACHERDETAIL_SUCCESS : return{
      ...state,
      teacher_detail_loading:false,
      teacher_detail:action.payload
    }
    case FETCH_TEACHERDETAIL_FALIURE : return{
      ...state,
      teacher_detail_error:action.payload
    }
    default: return state
  }

}

export default TeacherDetailReducers
