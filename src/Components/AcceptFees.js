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
import { addFees } from '../Redux/AddFees/AddFeesActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
function AcceptFees(){
  // store data access start
const addFeesData = useSelector(state =>state.AddFees)
const classes = useSelector(state =>state.AllClasses)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          classId:"",
                                          monthlyFees:"",
                                          admissionFee:""
  })
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start
   // fetch classes and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllClasses())
   },[dispatch])
// fetch classes and teachers api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(classes && classes.all_classes && classes.all_classes.result && classes.all_classes.success === true){
       setClassesResult(classes.all_classes.result)
     }
   },[classes])
// add data of classes api into constant,hook End

// when classesResult change add data into classInfo,hook start
   useMemo(()=>{
     if(classesResult && classesResult.data){
           setClassesInfo(classesResult.data)
     }
   },[classesResult])
// when classesResult change add data into classInfo,hook End


// add data of addFees api into constant,hook start
   useMemo(()=>{
     if(addFeesData && addFeesData.add_fees && addFeesData.add_fees.error){
       setError(addFeesData.add_fees.error)
     }
     else if(addFeesData && addFeesData.add_fees && addFeesData.add_fees.success){
        setSuccessStatus(addFeesData.add_fees.success)
     }
   },[addFeesData])
// add data of addFees api into constant,hook End

   //hooks end

// component function start

// examHandler function start
   const feesHandler = (event) =>{
   event.preventDefault()
   const fees_info = inputValues;
     dispatch(addFees(fees_info))
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
                <li>Accept Fees</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
            {addFeesData && addFeesData.add_fees_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Accept Fees</h3>
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
                <form className="new-added-form" onSubmit={(e) =>feesHandler(e)}>
                  <div className="row">
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Class *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,classId:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select Class *</option>
                        {allClassesInfo ? allClassesInfo.map((item,index) =>(
                          <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                        )):null}
                        </FormControl>
                        {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Monthly Fees *</label>
                      <input type="number" value={inputValues.monthlyFees} onChange={(e) =>setInputValues({...inputValues,monthlyFees:e.target.value})}  className="form-control" required/>
                      {error != null && error.MonthlyFees ? (<h6 className="addStudent-error">*{JSON.stringify(error.MonthlyFees).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Admission Fees *</label>
                      <input type="number" value={inputValues.admissionFee} onChange={(e) =>setInputValues({...inputValues,admissionFee:e.target.value})}  className="form-control" required/>
                      {error != null && error.AdmissionFees ? (<h6 className="addStudent-error">*{JSON.stringify(error.AdmissionFees).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                  <h2>Fees is Added Successfully!</h2>
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

export default AcceptFees;
