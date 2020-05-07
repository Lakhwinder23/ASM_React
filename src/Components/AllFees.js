import React, {useState,useEffect,useMemo} from 'react';
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
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllFees } from '../Redux/AllFees/AllFeesActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'

function AllFees() {
  // store data access start
const allFeesData = useSelector(state =>state.AllFees)
const classes = useSelector(state =>state.AllClasses)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allFeesInfo,setFeesInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({
                                          classId:undefined,
  })
  // component all states define End

   //hooks start
   // fetch allFees and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllFees())
     dispatch(fetchAllClasses())
   },[dispatch])
// fetch allFees and teachers api hook End

// add data of allFees api into constant,hook start
   useMemo(() =>{
     if(allFeesData && allFeesData.all_fees && allFeesData.all_fees.result && allFeesData.all_fees.success === true){
       setFeesInfo(allFeesData.all_fees.result)
     }
   },[allFeesData])
// add data of allFees api into constant,hook End

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


   //hooks end

// component function start
// examHandler function start
   const feesHandler = (event) =>{
   event.preventDefault()
   const fees_info = inputValues;
     dispatch(fetchAllFees(fees_info))
 }
// examHandler function End

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
            <h3>Account</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Fees</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Fees Lists</h3>
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
                     <form className="mg-b-20" onSubmit={(e) =>feesHandler(e)}>
                       <div className="row gutters-8">
                         <div className="col-lg-4 col-12 form-group">
                           <FormGroup>
                               <FormControl
                                 required
                                 type="text"
                                 onChange={(e) =>setInputValues({...inputValues,classId:e.target.value})}
                                 as="select"
                               >
                               <option value="undefined">Search by class ...</option>
                               {allClassesInfo ? allClassesInfo.map((item,index) =>(
                                 <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                               )):null}
                               </FormControl>
                             </FormGroup>
                         </div>
                         <div className="col-lg-6 col-12 form-group"></div>
                         <div className="col-lg-2 col-12 form-group">
                           <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                         </div>
                       </div>
                     </form>
                     <div className="table-responsive">
                       <table className="table display data-table text-nowrap">
                         <thead>
                           <tr>
                             <th>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input checkAll" />
                                 <label className="form-check-label">ID</label>
                               </div>
                             </th>
                             <th>Class Name</th>
                             <th>Monthly Fees</th>
                             <th>Admission Fees</th>
                             <th>Session</th>
                             <th />
                           </tr>
                         </thead>
                         {allFeesData.all_fees_loading === false ? allFeesInfo && allFeesInfo.length > 0 ? (
                         <tbody>
                         {allFeesInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.id}</label>
                               </div>
                             </td>
                             {allClassesInfo && allClassesInfo.length > 0 ? allClassesInfo.filter(filteritem =>filteritem.id === item.ClassId).
                               map((classitem,index) =>(
                                 <td>{classitem.ClassName}</td>
                               )):null}
                             <td>${item.MonthlyFees}</td>
                             <td>${item.AdmissionFees}</td>
                             <td>{item.Session}</td>
                             <td>
                               <div className="dropdown">
                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                   <span className="flaticon-more-button-of-three-dots" />
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                         ))}
                         </tbody>
                       ):
                       (<tr><td colspan="7"><h6 className="text-center">No data available in table</h6></td></tr>)
                     :(<tr>
                       <td colspan="7">
                     <Loader
                     className = "student-detail-loader"
                   type="MutatingDots"
                   color="#fea801"
                   height={100}
                   width={100}

                     />
                     </td>
                     </tr>)}
                       </table>
                     </div>
                   </div>
                 </div>
          {/* Class Table Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AllFees;
