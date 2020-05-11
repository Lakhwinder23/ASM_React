import React, {useState,useMemo,useEffect}  from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { assignVehicle } from '../Redux/AssignVehicle/AssignVehicleActions';
import { fetchAllVehicle } from '../Redux/AllVehicle/AllVehicleActions'

function AddTransport() {
  // store data access start
const allVehicleData = useSelector(state =>state.AllVehicle)
const assignVehicleData = useSelector(state =>state.AssignVehicle)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allVehicleInfo,setVehicleInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({driverId:'',
                                                  vehicleId:'',
                                                  routeName:''
                                                  })
const [error,setError] = useState(null)
const [successStatus,setSuccessStatus] = useState(null)
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

// add data of addExam api into constant,hook start
   useMemo(()=>{
     if(assignVehicleData && assignVehicleData.assign_vehicle && assignVehicleData.assign_vehicle.error){
       setError(assignVehicleData.assign_vehicle.error)
     }
   },[assignVehicleData])
// add data of addExam api into constant,hook End

// add data of addExam api into constant,hook start
   useMemo(()=>{

 if(assignVehicleData && assignVehicleData.assign_vehicle && assignVehicleData.assign_vehicle.success){
        setSuccessStatus(assignVehicleData.assign_vehicle.success)
     }
   },[assignVehicleData])
// add data of addExam api into constant,hook End

   //hooks end

// component function start
//vehicleSearchHandler function start
const assignVehiclechHandler = (event) =>{
event.preventDefault()
const assign_vehicle_info = inputValues;
  dispatch(assignVehicle(assign_vehicle_info))
}
//vehicleSearchHandler function End


const resetHandler = (event) =>{
  event.preventDefault()
  window.location.reload(false);
}

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
              <li>Add Vehicle</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Add Transport Area Start Here */}
                <div className="card height-auto">
                {assignVehicleData && assignVehicleData.assign_vehicle_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Transport</h3>
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
                    <form className="new-added-form" onSubmit = {(e) =>assignVehiclechHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Route Name</label>
                          <input type="text" value={inputValues.routeName} onChange={(e) =>setInputValues({...inputValues,routeName:e.target.value})} className="form-control" required/>
                            {error != null && error.RouteName ? (<h6 className="addStudent-error">*{JSON.stringify(error.RouteName).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Vehicle Number</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,vehicleId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please Select Section *</option>
                            {allVehicleInfo ? allVehicleInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.VehicleNumber}</option>
                            ) ): null}
                            </FormControl>
                            {error != null && error.VehicleId ? (<h6 className="addStudent-error">*{JSON.stringify(error.VehicleId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Driver Name</label>
                          <input type="text"  value={inputValues.driverId} onChange={(e) =>setInputValues({...inputValues,driverId:e.target.value})} className="form-control" required/>
                          {error != null && error.DriverId ? (<h6 className="addStudent-error">*{JSON.stringify(error.DriverId).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                          <h2>Transport  Add Successfully!</h2>
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
                {/* Add Transport Area End Here */}
                <Footer />
                </div>
                </div>
                {/* Page Area End Here */}
                </div>
        );

}

export default AddTransport;
