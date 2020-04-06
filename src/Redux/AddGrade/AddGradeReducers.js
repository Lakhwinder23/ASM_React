import {
  ADD_GRADE_REQUEST,
  ADD_GRADE_SUCCESS,
  ADD_GRADE_FALIURE
} from './AddGradeConstants'

const intialstate = {
  add_grade_loading : false,
  add_grade : [],
  add_grade_error : '',
  add_grade_success : false
}

const AddGradeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_GRADE_REQUEST : return{
      ...state,
      add_grade_loading:true
    }
    case ADD_GRADE_SUCCESS : return{
      ...state,
      add_grade_loading:false,
      add_grade_success:true,
      add_grade:action.payload
    }
    case ADD_GRADE_FALIURE : return{
      ...state,
      add_grade_error:action.payload
    }
    default: return state
  }

}

export default AddGradeReducers
