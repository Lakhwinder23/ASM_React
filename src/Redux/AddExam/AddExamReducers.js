import {
  ADD_EXAM_REQUEST,
  ADD_EXAM_SUCCESS,
  ADD_EXAM_FALIURE
} from './AddExamConstants'

const intialstate = {
  add_exam_loading : false,
  add_exam : [],
  add_exam_error : '',
  add_exam_success : false
}

const AddExamReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_EXAM_REQUEST : return{
      ...state,
      add_exam_loading:true
    }
    case ADD_EXAM_SUCCESS : return{
      ...state,
      add_exam_loading:false,
      add_exam_success:true,
      add_exam:action.payload
    }
    case ADD_EXAM_FALIURE : return{
      ...state,
      add_exam_error:action.payload
    }
    default: return state
  }

}

export default AddExamReducers
