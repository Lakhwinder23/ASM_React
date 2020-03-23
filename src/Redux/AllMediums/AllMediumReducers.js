import {
  FETCH_ALLMEDIUM_REQUEST,
  FETCH_ALLMEDIUM_SUCCESS,
  FETCH_ALLMEDIUM_FALIURE
} from './AllMediumConstants'

const intialstate = {
  all_mediums_loading : false,
  all_mediums : [],
  all_mediums_error : ''
}

const AllMediumReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLMEDIUM_REQUEST : return{
      ...state,
      all_mediums_loading:true
    }
    case FETCH_ALLMEDIUM_SUCCESS : return{
      ...state,
      all_mediums_loading:false,
      all_mediums:action.payload
    }
    case FETCH_ALLMEDIUM_FALIURE : return{
      ...state,
      all_mediums_error:action.payload
    }
    default: return state
  }

}

export default AllMediumReducers
