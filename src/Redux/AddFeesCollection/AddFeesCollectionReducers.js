import {
  ADD_FEES_COLLECTION_REQUEST,
  ADD_FEES_COLLECTION_SUCCESS,
  ADD_FEES_COLLECTION_FALIURE
} from './AddFeesCollectionConstants'

const intialstate = {
  add_fees_collection_loading : false,
  add_fees_collection : [],
  add_fees_collection_error : '',
  add_fees_collection_success : false
}

const AddFeesCollectionReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_FEES_COLLECTION_REQUEST : return{
      ...state,
      add_fees_collection_loading:true
    }
    case ADD_FEES_COLLECTION_SUCCESS : return{
      ...state,
      add_fees_collection_loading:false,
      add_fees_collection_success:true,
      add_fees_collection:action.payload
    }
    case ADD_FEES_COLLECTION_FALIURE : return{
      ...state,
      add_fees_collection_error:action.payload
    }
    default: return state
  }

}

export default AddFeesCollectionReducers
