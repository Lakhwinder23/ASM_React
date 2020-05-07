import React, {useState,useEffect,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { addExpense } from '../Redux/AddExpense/AddExpenseActions'
import {fetchAllTeachers} from '../Redux/AllTeachers/AllTeachersActions'
function AddExpense(){
  // store data access start
const addExpenseData = useSelector(state =>state.AddExpense)
const teachers = useSelector(state =>state.AllTeachers)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          name:"",
                                          amount:"",
                                          phone:"",
                                          email:"",
                                          date:"",
                                          status:"",
                                          expenseTypeId:"",
                                          userId:undefined
  })
  const [expenseType,setExpenseType] = useState(null)
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start
   //fetch teacher api ,hook start
   useEffect(() =>{
     dispatch(fetchAllTeachers())
   },[dispatch])
//fetch teacher api ,hook End

// add data of teacher api into constant,hook start
   useMemo(()=>{
     if(teachers && teachers.all_teachers && teachers.all_teachers.result){
       setTeacherResult(teachers.all_teachers.result)
     }
   },[teachers.all_teachers.result])
// add data of teacher api into constant,hook End

//when teacherResult change add data into constant,hook start
   useMemo(()=>{
     if(teacherResult && teacherResult.data){
           setTeachersInfo(teacherResult.data)
     }
   },[teacherResult])
//when teacherResult change add data into constant,hook End

//when inputValues change then add data into constant, hook start
   useMemo(() =>{
     if(inputValues && inputValues.expenseTypeId && inputValues.expenseTypeId == "2"){
       setExpenseType("salary")
     }
     else{
       setExpenseType(null)
     }
   },[inputValues.expenseTypeId])
//when inputValues change then add data into constant, hook end

// add data of addExpenseType api into constant,hook start
   useMemo(()=>{
     if(addExpenseData && addExpenseData.add_expense && addExpenseData.add_expense.error){
       setError(addExpenseData.add_expense.error)
     }
     else if(addExpenseData && addExpenseData.add_expense && addExpenseData.add_expense.success){
        setSuccessStatus(addExpenseData.add_expense.success)
     }
   },[addExpenseData])
// add data of addExpenseType api into constant,hook End

   //hooks end

// component function start

// examHandler function start
   const expenseTypeHandler = (event) =>{
   event.preventDefault()
   const expense_info = inputValues;
     dispatch(addExpense(expense_info))
 }
// examHandler function End

// resetHandler function start
   const resetHandler = (event) =>{
     event.preventDefault()
     window.location.reload(false);
   }
// resetHandler function start


  const callbackFunction = (childData) => {
    setActivestate(childData)
}

// component function end
        return (
            <div id="wrapper" className={activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
        {/* Header Menu Area Start Here */}
        <Header parentCallback = {() =>callbackFunction()}/>
        {/* Header Menu Area End Here */}
        {/* Page Area Start Here */}
        <div className="dashboard-page-one">
          {/* Sidebar Area Start Here */}
          <Sidebar />
          {/* Sidebar Area End Here */}
          <div className="dashboard-content-one">
            {/* Breadcubs Area Start Here */}
            <div className="breadcrumbs-area">
              <h3>Accounts</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Add New Expense</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
            {addExpenseData && addExpenseData.add_expense_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Expense</h3>
                  </div>
                  <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                    </div>
                  </div>
                </div>
                <form className="new-added-form" onSubmit={(e) =>expenseTypeHandler(e)}>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Name *</label>
                      <input type="text" value={inputValues.name} onChange={(e) =>setInputValues({...inputValues,name:e.target.value})}  className="form-control" required/>
                      {error != null && error.Name ? (<h6 className="addStudent-error">*{JSON.stringify(error.Name).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Expanse Type *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,expenseTypeId:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select Class *</option>
                        <option value={1}>Transport</option>
                        <option value={2}>Salary</option>
                        <option value={3}>Maintanance</option>
                        <option value={4}>Purchase</option>
                        <option value={5}>Utilities</option>
                        </FormControl>
                        {error != null && error.ExpenseTypeId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExpenseTypeId).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
                    </div>
                    {expenseType !=null ? (
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Teacher *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,userId:e.target.value})}
                              as="select"
                            >
                            <option value="undefined">Please Select Teacher *</option>
                            {allTeachersInfo && allTeachersInfo.length > 0 ? allTeachersInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.TeacherName}</option>
                            ) ): null}
                            </FormControl>
                            {error != null && error.UserId ? (<h6 className="addStudent-error">*{JSON.stringify(error.UserId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                      </div>
                    ) : null}
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Amount *</label>
                      <input type="text" value={inputValues.amount} onChange={(e) =>setInputValues({...inputValues,amount:e.target.value})}  className="form-control" required/>
                      {error != null && error.Amount ? (<h6 className="addStudent-error">*{JSON.stringify(error.Amount).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Phone *</label>
                      <input type="number" value={inputValues.phone} onChange={(e) =>setInputValues({...inputValues,phone:e.target.value})}  className="form-control" required/>
                      {error != null && error.Phone ? (<h6 className="addStudent-error">*{JSON.stringify(error.Phone).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>E-Mail Address</label>
                      <input type="email" value={inputValues.email} onChange={(e) =>setInputValues({...inputValues,email:e.target.value})}  className="form-control" required/>
                      {error != null && error.Email ? (<h6 className="addStudent-error">*{JSON.stringify(error.Email).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Status *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,status:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select Status *</option>
                        <option value={1}>Paid</option>
                        <option value={2}>Unpaid</option>
                        </FormControl>
                        {error != null && error.Status ? (<h6 className="addStudent-error">*{JSON.stringify(error.Status).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Date</label>
                      <input type="date" value={inputValues.date} onChange={(e) =>setInputValues({...inputValues,date:e.target.value})} placeholder="dd/mm/yy" className="form-control" data-position="bottom right" required/>
                      {error != null && error.Date ? (<h6 className="addStudent-error">*{JSON.stringify(error.Date).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-12 form-group mg-t-8">
                      <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                      <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={(e) =>resetHandler(e)}>Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (<div className="card-body">
                  <div className="success-greeting">
                  <h2>Thank You!</h2>
                  <h2>Expense is Added Successfully!</h2>
                  </div>
              </div>):(<div className="card-body">
                  <div className="Student-Loader">
                  <Loader
                  className = "student-detail-loader"
                type="MutatingDots"
                color="#fea801"
                height={150}
                width={150}

   />
                  </div>
                </div>)}
            </div>
            {/* Add Expense Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AddExpense;
