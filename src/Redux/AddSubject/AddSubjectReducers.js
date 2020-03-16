import {
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FALIURE
} from './AddSubjectConstants'

const intialstate = {
  add_subject_loading : false,
  add_subject : [],
  add_subject_error : '',
  add_subject_success : false
}

const AddSubjectReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_SUBJECT_REQUEST : return{
      ...state,
      add_subject_loading:true
    }
    case ADD_SUBJECT_SUCCESS : return{
      ...state,
      add_subject_loading:false,
      add_subject_success:true,
      add_subject:action.payload
    }
    case ADD_SUBJECT_FALIURE : return{
      ...state,
      add_subject_error:action.payload
    }
    default: return state
  }

}

export default AddSubjectReducers
