import {
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FALIURE
} from './AdmissionFormConstants'

const intialstate = {
  add_student_loading : false,
  add_student : [],
  add_student_error : '',
  add_student_success : false
}

const AdmissionFormReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_STUDENT_REQUEST : return{
      ...state,
      add_student_loading:true
    }
    case ADD_STUDENT_SUCCESS : return{
      ...state,
      add_student_loading:false,
      add_student_success:true,
      add_student:action.payload
    }
    case ADD_STUDENT_FALIURE : return{
      ...state,
      add_student_error:action.payload
    }
    default: return state
  }

}

export default AdmissionFormReducers
