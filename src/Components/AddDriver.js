import React, {useState,useMemo,useEffect}  from 'react';
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
import { useSelector,useDispatch } from 'react-redux';
import { addStudentHandler } from '../Redux/AdmissionForm/AdmissionFormActions';


function AddDriver() {
  // store data access start
  const add_Driver = useSelector(state =>state.AdmissionForm)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({fname:'',
                                                lname:'',
                                                email:'',
                                                password:'',
                                                c_password:'',
                                                mobile:'',
                                                role:'7',
                                                religion:'',
                                                gender:'',
                                                dateofBirth:'',
                                                address:'',
                                                professionId:undefined,
                                                fatherName:'',
                                                motherName:'',
                                                licenseNumber:'',
                                                fatherOccupation:undefined,
                                                classId:undefined,
                                                sectionId:undefined,
                                                selfOccupation:undefined,
                                                parentDetails:undefined,
                                                parentDateofBirth:undefined,
                                                parentMobile:undefined,
                                                parentEmail:undefined,
                                                parentExsits:undefined,
                                                parentId:undefined
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start


  useMemo(()=>{
    if(add_Driver && add_Driver.add_student && add_Driver.add_student.error){
      setError(add_Driver.add_student.error)
    }

  },[add_Driver])

  useMemo(()=>{
    if(add_Driver && add_Driver.add_student && add_Driver.add_student.success){
      setSuccessStatus(add_Driver.add_student.success)
    }

  },[add_Driver])

  //hooks end

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

    const driverHandler = (event) =>{
    event.preventDefault()
    const student_info = inputValues;
      dispatch(addStudentHandler(student_info))
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
              <h3>Drivers</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Driver Admit Form</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Admit Form Area Start Here */}
            <div className="card height-auto">
              {add_Driver && add_Driver.add_student_loading === false ? successStatus === false || successStatus === null  ? (
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>Add New Driver</h3>
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
                  <form className="new-added-form" onSubmit={(e) =>driverHandler(e)}>
                    <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>First Name *</label>
                      <input type="text" value={inputValues.fname} onChange={(e) =>setInputValues({...inputValues,fname:e.target.value})}  className="form-control" required/>
                      {error != null && error.Firstname ? (<h6 className="addStudent-error">*{JSON.stringify(error.Firstname).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Last Name *</label>
                      <input type="text" value={inputValues.lname} onChange={(e) =>setInputValues({...inputValues,lname:e.target.value})}  className="form-control" required/>
                      {error != null && error.Lastname ? (<h6 className="addStudent-error">*{JSON.stringify(error.Lastname).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Email *</label>
                        <input type="email" value={inputValues.email} onChange={(e) =>setInputValues({...inputValues,email:e.target.value})}  className="form-control" required/>
                          {error != null && error.email ? (<h6 className="addStudent-error">*{JSON.stringify(error.email).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Password *</label>
                        <input type="password" value={inputValues.password} onChange={(e) =>setInputValues({...inputValues,password:e.target.value})}  className="form-control" required/>
                          {error != null && error.password ? (<h6 className="addStudent-error">*{JSON.stringify(error.password).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Confirm Password *</label>
                        <input type="password" value={inputValues.c_password} onChange={(e) =>setInputValues({...inputValues,c_password:e.target.value})}  className="form-control" required/>
                        {error != null && error.c_password ? (<h6 className="addStudent-error">*{JSON.stringify(error.c_password).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Father Name *</label>
                        <input type="text" value={inputValues.fatherName} onChange={(e) =>setInputValues({...inputValues,fatherName:e.target.value})}  className="form-control" required/>
                        {error != null && error.FatherName ? (<h6 className="addStudent-error">*{JSON.stringify(error.FatherName).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Mother Name *</label>
                        <input type="text" value={inputValues.motherName} onChange={(e) =>setInputValues({...inputValues,motherName:e.target.value})}  className="form-control" required/>
                        {error != null && error.MotherName ? (<h6 className="addStudent-error">*{JSON.stringify(error.MotherName).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Religion</label>
                        <input type="text" value={inputValues.religion} onChange={(e) =>setInputValues({...inputValues,religion:e.target.value})}  className="form-control" required/>
                        {error != null && error.Religion ? (<h6 className="addStudent-error">*{JSON.stringify(error.Religion).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <FormGroup>
                          <FormLabel>Gender *</FormLabel>
                          <FormControl
                            required
                            type="text"
                            onChange={(e) =>setInputValues({...inputValues,gender:e.target.value})}
                            as="select"
                          >
                          <option value="">Please Select Gender *</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                          </FormControl>
                          {error != null && error.Gender ? (<h6 className="addStudent-error">*{JSON.stringify(error.Gender).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </FormGroup>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Date Of Birth *</label>
                        <input type="Date" value={inputValues.dateofBirth} onChange={(e) =>setInputValues({...inputValues,dateofBirth:e.target.value})}  className="form-control" data-position="bottom right" required/>
                        {error != null && error.DateofBirth ? (<h6 className="addStudent-error">*{JSON.stringify(error.DateofBirth).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Adress</label>
                        <textarea type="text" value={inputValues.address} onChange={(e) =>setInputValues({...inputValues,address:e.target.value})}  className="form-control" required></textarea>
                        {error != null && error.Address ? (<h6 className="addStudent-error">*{JSON.stringify(error.Address).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Mobile</label>
                        <input type="number" value={inputValues.mobile} onChange={(e) =>setInputValues({...inputValues,mobile:e.target.value})}  className="form-control" required/>
                        {error != null && error.Mobile ? (<h6 className="addStudent-error">*{JSON.stringify(error.Mobile).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>License Number</label>
                      <input type="number" value={inputValues.licenseNumber} onChange={(e) =>setInputValues({...inputValues,licenseNumber:e.target.value})}  className="form-control" required/>
                      {error != null && error.LicenseNumber ? (<h6 className="addStudent-error">*{JSON.stringify(error.LicenseNumber).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-lg-6 col-12 form-group mg-t-30">
                        <label className="text-dark-medium">Upload Driver Photo (150px X 150px)</label>
                        <input type="file" className="form-control-file" />
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
                    <h2>Driver Add Successfully!</h2>
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

export default AddDriver;
