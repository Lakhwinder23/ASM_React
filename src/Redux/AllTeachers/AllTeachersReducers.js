import {
  FETCH_ALLTEACHERS_REQUEST,
  FETCH_ALLTEACHERS_SUCCESS,
  FETCH_ALLTEACHERS_FALIURE
} from './AllTeachersConstants'

const intialstate = {
  all_teachers_loading : false,
  all_teachers : [],
  all_teachers_error : ''
}

const AllTeachersReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLTEACHERS_REQUEST : return{
      ...state,
      all_teachers_loading:true
    }
    case FETCH_ALLTEACHERS_SUCCESS : return{
      ...state,
      all_teachers_loading:false,
      all_teachers:action.payload
    }
    case FETCH_ALLTEACHERS_FALIURE : return{
      ...state,
      all_teachers_error:action.payload
    }
    default: return state
  }

}

export default AllTeachersReducers
