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
import { addClass } from '../Redux/AddClass/AddClassActions';
import {
  fetchAllMediums
} from '../Redux/AllMediums/AllMediumActions'


function AddClass() {
  // store data access start
  const add_Class = useSelector(state =>state.AddClass)
  const mediums = useSelector(state =>state.AllMedium)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({className:'',
                                                totalSection:'',
                                                studentLimitInClass:'',
                                                classMediumId:''
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)
  const [allMediumsInfo,setAllMediumsInfo] = useState([])
   // component all states define End

   //hooks start

   useEffect(() =>{
     dispatch(fetchAllMediums())
   },[dispatch])

   useMemo(()=>{
     if(mediums && mediums.all_mediums && mediums.all_mediums.result){
       setAllMediumsInfo(mediums.all_mediums.result)
     }
   },[mediums.all_mediums.result])

  useMemo(()=>{
    if(add_Class && add_Class.add_class && add_Class.add_class.error){
      setError(add_Class.add_class.error)
    }

  },[add_Class.add_class])

  useMemo(()=>{
    if(add_Class && add_Class.add_class && add_Class.add_class.success){
      setSuccessStatus(add_Class.add_class.success)
    }

  },[add_Class.add_class])

  //hooks end

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

    const classHandler = (event) =>{
    event.preventDefault()
    const class_info = inputValues;
      dispatch(addClass(class_info))
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
              <h3>Class</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Class Admit Form</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Admit Form Area Start Here */}
            <div className="card height-auto">
              {add_Class && add_Class.add_class_loading === false ? successStatus === false || successStatus === null  ? (
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>Add New Class</h3>
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
                  <form className="new-added-form" onSubmit={(e) =>classHandler(e)}>
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Class Name *</label>
                        <input type="text" value={inputValues.className} onChange={(e) =>setInputValues({...inputValues,className:e.target.value})}  className="form-control" required/>
                        {error != null && error.ClassName ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassName).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Total Section *</label>
                        <input type="number" value={inputValues.totalSection} onChange={(e) =>setInputValues({...inputValues,totalSection:e.target.value})}  className="form-control" required/>
                          {error != null && error.TotalSection ? (<h6 className="addStudent-error">*{JSON.stringify(error.TotalSection).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Maximum Students *</label>
                        <input type="number" value={inputValues.studentLimitInClass} onChange={(e) =>setInputValues({...inputValues,studentLimitInClass:e.target.value})}  className="form-control" required/>
                          {error != null && error.StudentLimitInClass ? (<h6 className="addStudent-error">*{JSON.stringify(error.StudentLimitInClass).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <FormGroup>
                          <FormLabel>Medium *</FormLabel>
                          <FormControl
                            required
                            type="text"
                            onChange={(e) =>setInputValues({...inputValues,classMediumId:e.target.value})}
                            as="select"
                          >
                          <option value="">Please select class Medium *</option>
                          {allMediumsInfo ? allMediumsInfo.map((mediumItem,index) =>(
                            <option value={mediumItem.id}>{mediumItem.MediumName}</option>
                          )):null}
                          </FormControl>
                          {error != null && error.ClassMediumId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassMediumId).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                    <h2>Class Add Successfully!</h2>
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

export default AddClass;
