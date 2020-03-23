import {
  FETCH_ALLASSIGNCLASS_REQUEST,
  FETCH_ALLASSIGNCLASS_SUCCESS,
  FETCH_ALLASSIGNCLASS_FALIURE
} from './AllAssignClassConstants'

const intialstate = {
  all_assign_classes_loading : false,
  all_assign_classes : [],
  all_assign_classes_error : ''
}

const AllAssignClassReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLASSIGNCLASS_REQUEST : return{
      ...state,
      all_assign_classes_loading:true
    }
    case FETCH_ALLASSIGNCLASS_SUCCESS : return{
      ...state,
      all_assign_classes_loading:false,
      all_assign_classes:action.payload
    }
    case FETCH_ALLASSIGNCLASS_FALIURE : return{
      ...state,
      all_assign_classes_error:action.payload
    }
    default: return state
  }

}

export default AllAssignClassReducers
