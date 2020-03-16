import {
  FETCH_ALLSTUDENTS_REQUEST,
  FETCH_ALLSTUDENTS_SUCCESS,
  FETCH_ALLSTUDENTS_FALIURE
} from './AllStudentsConstants'

const intialstate = {
  all_students_loading : false,
  all_students : [],
  all_students_error : ''
}

const AllStudentsReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLSTUDENTS_REQUEST : return{
      ...state,
      all_students_loading:true
    }
    case FETCH_ALLSTUDENTS_SUCCESS : return{
      ...state,
      all_students_loading:false,
      all_students:action.payload
    }
    case FETCH_ALLSTUDENTS_FALIURE : return{
      ...state,
      all_students_error:action.payload
    }
    default: return state
  }

}

export default AllStudentsReducers
