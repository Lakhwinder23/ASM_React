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
import { fetchAllVehicle } from '../Redux/AllVehicle/AllVehicleActions'

function AllVehicles() {
  // store data access start
const allVehicleData = useSelector(state =>state.AllVehicle)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allVehicleInfo,setVehicleInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({vehicleNumber:'',
                                                  vehicleCode:'',
                                                  totalSeats:'',
                                                  busSize:''
                                                    })
  // component all states define End

   //hooks start
   // fetch allVehicle api hook start
   useEffect(() =>{
     dispatch(fetchAllVehicle())
   },[dispatch])
// fetch allVehicle api hook End

// add data of allVehicle api into constant,hook start
   useMemo(() =>{
     if(allVehicleData && allVehicleData.all_vehicle && allVehicleData.all_vehicle.result && allVehicleData.all_vehicle.success === true){
       setVehicleInfo(allVehicleData.all_vehicle.result)
     }
   },[allVehicleData])
// add data of allVehicle api into constant,hook End


   //hooks end

// component function start
//vehicleSearchHandler function start
const vehicleSearchHandler = (event) =>{
event.preventDefault()
const vehicle_info = inputValues;
  dispatch(fetchAllVehicle(vehicle_info))
}
//vehicleSearchHandler function End

//callbackFunction function start
  const callbackFunction = (childData) => {
    setActivestate(childData)
}
//callbackFunction function End
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
              <li>All Vehicle</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Vehicle Lists</h3>
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
                     <form className="mg-b-20" onSubmit = {(e) =>vehicleSearchHandler(e)}>
                       <div className="row gutters-8">
                         <div className="col-lg-3 col-12 form-group">
                          <input type="text" value={inputValues.vehicleNumber} onChange={(e) =>setInputValues({...inputValues,vehicleNumber:e.target.value})} placeholder="Search by vehicle Number ..." className="form-control" />
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                          <input type="text" value={inputValues.vehicleCode} onChange={(e) =>setInputValues({...inputValues,vehicleCode:e.target.value})} placeholder="Search by vehicle Code..." className="form-control" />
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                          <input type="text" value={inputValues.totalSeats} onChange={(e) =>setInputValues({...inputValues,totalSeats:e.target.value})} placeholder="Search by Total Seats..." className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group">
                          <input type="text" value={inputValues.busSize} onChange={(e) =>setInputValues({...inputValues,busSize:e.target.value})} placeholder="Search by Bus Size..." className="form-control" />
                         </div>
                         <div className="col-lg-1 col-12 form-group all-vehicle-search">
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
                             <th>Vehicle Number</th>
                             <th>Vehicle Code</th>
                             <th>Total Seats</th>
                             <th>Bus Size</th>
                             <th />
                           </tr>
                         </thead>
                         {allVehicleData.all_vehicle_loading === false ? allVehicleInfo && allVehicleInfo.length > 0 ? (
                         <tbody>
                         {allVehicleInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.id}</label>
                               </div>
                             </td>
                              <td>{item.VehicleNumber}</td>
                             <td>{item.VehicleCode}</td>
                             <td>{item.TotalSeats}</td>
                             <td>{item.BusSize}</td>
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
                       (<tr><td colspan="6"><h6 className="text-center">No data available in table</h6></td></tr>)
                     :(<tr>
                       <td colspan="6">
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

export default AllVehicles;
