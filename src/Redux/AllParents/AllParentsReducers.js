import {
  FETCH_ALLPARENTS_REQUEST,
  FETCH_ALLPARENTS_SUCCESS,
  FETCH_ALLPARENTS_FALIURE
} from './AllParentsConstants'

const intialstate = {
  all_parents_loading : false,
  all_parents : [],
  all_parents_error : ''
}

const AllParentsReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLPARENTS_REQUEST : return{
      ...state,
      all_parents_loading:true
    }
    case FETCH_ALLPARENTS_SUCCESS : return{
      ...state,
      all_parents_loading:false,
      all_parents:action.payload
    }
    case FETCH_ALLPARENTS_FALIURE : return{
      ...state,
      all_parents_error:action.payload
    }
    default: return state
  }

}

export default AllParentsReducers
