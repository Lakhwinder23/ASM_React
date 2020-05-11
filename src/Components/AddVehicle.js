import React, {useState,useMemo,useEffect}  from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { addVehicle } from '../Redux/AddVehicle/AddVehicleActions';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

function AddVehicle(){
  // store data access start
  const addVehicleData = useSelector(state =>state.AddVehicle)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
     const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({vehicleNumber:'',
                                                  totalSeats:'',
                                                  busSize:''
                                                    })

  const [error,setError] = useState(null)

  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start

   // add data of addExam api into constant,hook start
      useMemo(()=>{
        if(addVehicleData && addVehicleData.add_vehicle && addVehicleData.add_vehicle.error){
          setError(addVehicleData.add_vehicle.error)
        }
      },[addVehicleData])
   // add data of addExam api into constant,hook End

   // add data of addExam api into constant,hook start
      useMemo(()=>{

    if(addVehicleData && addVehicleData.add_vehicle && addVehicleData.add_vehicle.success){
           setSuccessStatus(addVehicleData.add_vehicle.success)
        }
      },[addVehicleData])
   // add data of addExam api into constant,hook End

  //hooks end
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
    const vehicleHandler = (event) =>{
    event.preventDefault()
    const vehicle_info = inputValues;
      dispatch(addVehicle(vehicle_info))
  }

  const resetHandler = (event) =>{
    event.preventDefault()
    window.location.reload(false);
  }
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
          {/* Admit Form Area Start Here */}
          <div className="card height-auto">
            {addVehicleData && addVehicleData.add_vehicle_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add vehicle</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>vehicleHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Vehicle Number</label>
                          <input type="text" value={inputValues.vehicleNumber} onChange={(e) =>setInputValues({...inputValues,vehicleNumber:e.target.value})}  className="form-control" required/>
                          {error != null && error.VehicleNumber ? (<h6 className="addStudent-error">*{JSON.stringify(error.VehicleNumber).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Total Seats</label>
                          <input type="number" value={inputValues.totalSeats} onChange={(e) =>setInputValues({...inputValues,totalSeats:e.target.value})}  className="form-control" required/>
                          {error != null && error.TotalSeats ? (<h6 className="addStudent-error">*{JSON.stringify(error.TotalSeats).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Vehicle size </FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setInputValues({...inputValues,busSize:e.target.value})}
                                as="select"
                              >
                              <option value="">Please Select Vehicle size </option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="big">Big</option>
                              </FormControl>
                              {error != null && error.BusSize ? (<h6 className="addStudent-error">*{JSON.stringify(error.BusSize).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
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
                      <h2>Vehicle Add Successfully!</h2>
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
          {/* Admit Form Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AddVehicle;
