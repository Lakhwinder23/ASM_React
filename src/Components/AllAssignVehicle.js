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
import { fetchAllAssignVehicle } from '../Redux/AllAssignVehicle/AllAssignVehicleActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'

function AllAssignVehicle() {
  // store data access start
const allAssignVehicleData = useSelector(state =>state.AllAssignVehicle)
const classes = useSelector(state =>state.AllClasses)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allssignVehicleResult,setssignVehicleResult] = useState([])
  const [allssignVehicleInfo,setssignVehicleInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({
                                          classId:undefined,
  })
  // component all states define End

   //hooks start
   // fetch allAssignVehicle and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllAssignVehicle())
     dispatch(fetchAllClasses())
   },[dispatch])
// fetch allAssignVehicle and teachers api hook End

// add data of allAssignVehicle api into constant,hook start
   useMemo(() =>{
     if(allAssignVehicleData && allAssignVehicleData.all_assign_vehicle && allAssignVehicleData.all_assign_vehicle.result && allAssignVehicleData.all_assign_vehicle.success === true){
       setssignVehicleResult(allAssignVehicleData.all_assign_vehicle.result)
     }
   },[allAssignVehicleData])
// add data of allAssignVehicle api into constant,hook End

// when allssignVehicleResult change add data into allssignVehicleInfo,hook start
 useMemo(()=>{
   if(allssignVehicleResult && allssignVehicleResult.data){
         setssignVehicleInfo(allssignVehicleResult.data)
   }
 },[allssignVehicleResult])
// when allssignVehicleResult change add data into allssignVehicleInfo,hook End

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
     dispatch(fetchAllAssignVehicle(fees_info))
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
            <h3>Transport</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Transport</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Transport Lists</h3>
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
                                 <label className="form-check-label">Route Name</label>
                               </div>
                             </th>
                             <th>Vehicle No</th>
                             <th>Driver Name</th>
                             <th>Driver License</th>
                             <th>Contact Number</th>
                             <th />
                           </tr>
                         </thead>
                         {allAssignVehicleData.all_assign_vehicle_loading === false ? allssignVehicleInfo && allssignVehicleInfo.length > 0 ? (
                         <tbody>
                         {allssignVehicleInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.RouteName}</label>
                               </div>
                             </td>
                             <td>{item.VehicleNumber}</td>
                             {allClassesInfo && allClassesInfo.length > 0 ? allClassesInfo.filter(filteritem =>filteritem.id === item.ClassId).
                               map((classitem,index) =>(
                                 <td>{classitem.ClassName}</td>
                               )):null}
                             <td></td>
                             <td></td>
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

export default AllAssignVehicle;
