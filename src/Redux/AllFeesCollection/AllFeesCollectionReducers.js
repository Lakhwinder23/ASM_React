import {
  FETCH_ALLFEES_COLLECTION_REQUEST,
  FETCH_ALLFEES_COLLECTION_SUCCESS,
  FETCH_ALLFEES_COLLECTION_FALIURE
} from './AllFeesCollectionConstants'

const intialstate = {
  all_fees_collection_loading : false,
  all_fees_collection : [],
  all_fees_collection_error : ''
}

const AllFeesCollectionReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLFEES_COLLECTION_REQUEST : return{
      ...state,
      all_fees_collection_loading:true
    }
    case FETCH_ALLFEES_COLLECTION_SUCCESS : return{
      ...state,
      all_fees_collection_loading:false,
      all_fees_collection:action.payload
    }
    case FETCH_ALLFEES_COLLECTION_FALIURE : return{
      ...state,
      all_fees_collection_error:action.payload
    }
    default: return state
  }

}

export default AllFeesCollectionReducers
