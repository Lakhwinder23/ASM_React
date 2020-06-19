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
import { fetchAllDriver } from '../Redux/AllDriver/AllDriverActions'

function AllTransport() {
  // store data access start
const allAssignVehicleData = useSelector(state =>state.AllAssignVehicle)
const allDriverData = useSelector(state =>state.AllDriver)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allssignVehicleResult,setssignVehicleResult] = useState([])
  const [allssignVehicleInfo,setssignVehicleInfo] = useState([])
  const [driverResult,setDriverResult] = useState([])
  const [allDriverInfo,setDriverInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({
                                          driverId:undefined,
  })
  // component all states define End

   //hooks start
   // fetch allAssignVehicle and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllAssignVehicle())
     dispatch(fetchAllDriver())
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
   if(allDriverData && allDriverData.all_driver && allDriverData.all_driver.result && allDriverData.all_driver.success === true){
     setDriverResult(allDriverData.all_driver.result)
   }
 },[allDriverData])
// add data of classes api into constant,hook End

// when classesResult change add data into classInfo,hook start
 useMemo(()=>{
   if(driverResult && driverResult.data){
         setDriverInfo(driverResult.data)
   }
 },[driverResult])
// when classesResult change add data into classInfo,hook End


   //hooks end

// component function start
// examHandler function start
   const driverHandler = (event) =>{
   event.preventDefault()
   const all_assign_vehicle_info = inputValues;
     dispatch(fetchAllAssignVehicle(all_assign_vehicle_info))
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
                     <form className="mg-b-20" onSubmit={(e) =>driverHandler(e)}>
                       <div className="row gutters-8">
                         <div className="col-lg-3 col-12 form-group">
                           <FormGroup>
                               <FormControl
                                 required
                                 type="text"
                                 onChange={(e) =>setInputValues({...inputValues,driverId:e.target.value})}
                                 as="select"
                               >
                               <option value="undefined">Search by Driver Name ...</option>
                               {allDriverInfo ? allDriverInfo.map((item,index) =>(
                                 <option value={item.id} key={index}>{item.ParentName}</option>
                               )):null}
                               </FormControl>
                             </FormGroup>
                         </div>
                         <div className="col-lg-2 col-12 form-group">
                           <input type="text" placeholder="Search by Route ..." className="form-control" />
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                           <input type="text" placeholder="Search by Vehicle Number ..." className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group">
                           <input type="text" placeholder="Search by Phone ..." className="form-control" />
                         </div>
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
                             {allDriverInfo && allDriverInfo.length > 0 ? allDriverInfo.filter(filteritem =>filteritem.id === item.DriverId).
                               map((driverItem,index) =>(
                                 <>
                                 <td>{driverItem.ParentName}</td>
                                 <td>{driverItem.LicenseNumber}</td>
                                 <td>{driverItem.Mobile}</td>
                                 </>
                               )):null}

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

export default AllTransport;
