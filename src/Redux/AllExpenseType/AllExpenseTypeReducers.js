import {
  FETCH_ALLEXPENSETYPE_REQUEST,
  FETCH_ALLEXPENSETYPE_SUCCESS,
  FETCH_ALLEXPENSETYPE_FALIURE
} from './AllExpenseTypeConstants'

const intialstate = {
  all_expense_type_loading : false,
  all_expense_type : [],
  all_expense_type_error : ''
}

const AllExpenseTypeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLEXPENSETYPE_REQUEST : return{
      ...state,
      all_expense_type_loading:true
    }
    case FETCH_ALLEXPENSETYPE_SUCCESS : return{
      ...state,
      all_expense_type_loading:false,
      all_expense_type:action.payload
    }
    case FETCH_ALLEXPENSETYPE_FALIURE : return{
      ...state,
      all_expense_type_error:action.payload
    }
    default: return state
  }

}

export default AllExpenseTypeReducers
