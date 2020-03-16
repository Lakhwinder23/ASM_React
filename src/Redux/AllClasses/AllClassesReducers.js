import {
  FETCH_ALLCLASSES_REQUEST,
  FETCH_ALLCLASSES_SUCCESS,
  FETCH_ALLCLASSES_FALIURE
} from './AllClassesConstants'

const intialstate = {
  all_classes_loading : false,
  all_classes : [],
  all_classes_error : ''
}

const AllClassesReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLCLASSES_REQUEST : return{
      ...state,
      all_classes_loading:true
    }
    case FETCH_ALLCLASSES_SUCCESS : return{
      ...state,
      all_classes_loading:false,
      all_classes:action.payload
    }
    case FETCH_ALLCLASSES_FALIURE : return{
      ...state,
      all_classes_error:action.payload
    }
    default: return state
  }

}

export default AllClassesReducers
