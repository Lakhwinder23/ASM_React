import {
  ADD_PROFESSION_REQUEST,
  ADD_PROFESSION_SUCCESS,
  ADD_PROFESSION_FALIURE
} from './AddProfessionConstants'

const intialstate = {
  add_profession_loading : false,
  add_profession : [],
  add_profession_error : '',
  add_profession_success : false
}

const AddProfessionReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_PROFESSION_REQUEST : return{
      ...state,
      add_profession_loading:true
    }
    case ADD_PROFESSION_SUCCESS : return{
      ...state,
      add_profession_loading:false,
      add_profession_success:true,
      add_profession:action.payload
    }
    case ADD_PROFESSION_FALIURE : return{
      ...state,
      add_profession_error:action.payload
    }
    default: return state
  }

}

export default AddProfessionReducers
