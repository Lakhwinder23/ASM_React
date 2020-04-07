import {
  FETCH_ALLGRADE_REQUEST,
  FETCH_ALLGRADE_SUCCESS,
  FETCH_ALLGRADE_FALIURE
} from './AllGradeConstants'

const intialstate = {
  all_grade_loading : false,
  all_grade : [],
  all_grade_error : ''
}

const AllGradeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLGRADE_REQUEST : return{
      ...state,
      all_grade_loading:true
    }
    case FETCH_ALLGRADE_SUCCESS : return{
      ...state,
      all_grade_loading:false,
      all_grade:action.payload
    }
    case FETCH_ALLGRADE_FALIURE : return{
      ...state,
      all_grade_error:action.payload
    }
    default: return state
  }

}

export default AllGradeReducers
