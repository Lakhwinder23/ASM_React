import {
  FETCH_ALLPROFESSION_REQUEST,
  FETCH_ALLPROFESSION_SUCCESS,
  FETCH_ALLPROFESSION_FALIURE
} from './AllProfessionConstants'

const intialstate = {
  all_professions_loading : false,
  all_professions : [],
  all_professions_error : ''
}

const AllProfessionReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLPROFESSION_REQUEST : return{
      ...state,
      all_professions_loading:true
    }
    case FETCH_ALLPROFESSION_SUCCESS : return{
      ...state,
      all_professionss_loading:false,
      all_professions:action.payload
    }
    case FETCH_ALLPROFESSION_FALIURE : return{
      ...state,
      all_professions_error:action.payload
    }
    default: return state
  }

}

export default AllProfessionReducers
