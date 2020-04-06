import {
  ADD_EXAM_RESULT_REQUEST,
  ADD_EXAM_RESULT_SUCCESS,
  ADD_EXAM_RESULT_FALIURE
} from './AddExamResultConstants'

const intialstate = {
  add_exam_result_loading : false,
  add_exam_result : [],
  add_exam_result_error : '',
  add_exam_result_success : false
}

const AddExamResultReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_EXAM_RESULT_REQUEST : return{
      ...state,
      add_exam_result_loading:true
    }
    case ADD_EXAM_RESULT_SUCCESS : return{
      ...state,
      add_exam_result_loading:false,
      add_exam_result_success:true,
      add_exam_result:action.payload
    }
    case ADD_EXAM_RESULT_FALIURE : return{
      ...state,
      add_exam_result_error:action.payload
    }
    default: return state
  }

}

export default AddExamResultReducers
