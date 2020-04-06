import {
  ADD_EXPENSE_REQUEST,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FALIURE
} from './AddExpenseConstants'

const intialstate = {
  add_expense_loading : false,
  add_expense : [],
  add_expense_error : '',
  add_expense_success : false
}

const AddExpenseReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_EXPENSE_REQUEST : return{
      ...state,
      add_expense_loading:true
    }
    case ADD_EXPENSE_SUCCESS : return{
      ...state,
      add_expense_loading:false,
      add_expense_success:true,
      add_expense:action.payload
    }
    case ADD_EXPENSE_FALIURE : return{
      ...state,
      add_expense_error:action.payload
    }
    default: return state
  }

}

export default AddExpenseReducers
