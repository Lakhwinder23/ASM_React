import {
  FETCH_ALLSECTIONS_REQUEST,
  FETCH_ALLSECTIONS_SUCCESS,
  FETCH_ALLSECTIONS_FALIURE
} from './AllSectionsConstants'

const intialstate = {
  all_sections_loading : false,
  all_sections : [],
  all_sections_error : ''
}

const AllSectionsReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLSECTIONS_REQUEST : return{
      ...state,
      all_sections_loading:true
    }
    case FETCH_ALLSECTIONS_SUCCESS : return{
      ...state,
      all_sections_loading:false,
      all_sections:action.payload
    }
    case FETCH_ALLSECTIONS_FALIURE : return{
      ...state,
      all_sections_error:action.payload
    }
    default: return state
  }

}

export default AllSectionsReducers
