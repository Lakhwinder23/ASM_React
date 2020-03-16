import {
  FETCH_ALLSUBJECT_REQUEST,
  FETCH_ALLSUBJECT_SUCCESS,
  FETCH_ALLSUBJECT_FALIURE
} from './AllSubjectsConstants'

const intialstate = {
  all_subjects_loading : false,
  all_subjects : [],
  all_subjects_error : ''
}

const AllSubjectsReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLSUBJECT_REQUEST : return{
      ...state,
      all_subjects_loading:true
    }
    case FETCH_ALLSUBJECT_SUCCESS : return{
      ...state,
      all_subjects_loading:false,
      all_subjects:action.payload
    }
    case FETCH_ALLSUBJECT_FALIURE : return{
      ...state,
      all_subjects_error:action.payload
    }
    default: return state
  }

}

export default AllSubjectsReducers
