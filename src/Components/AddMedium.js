import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux';
import { addMidium } from '../Redux/AddMedium/AddMediumActions';


function AddMedium() {
  // store data access start
  const add_medium = useSelector(state =>state.AddMedium)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({mediumName:''
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start


  useMemo(()=>{
    if(add_medium && add_medium.add_medium && add_medium.add_medium.error){
      setError(add_medium.add_medium.error)
    }

  },[add_medium.add_medium])

  useMemo(()=>{
    if(add_medium && add_medium.add_medium && add_medium.add_medium.success){
      setSuccessStatus(add_medium.add_medium.success)
    }

  },[add_medium.add_medium])

  //hooks end

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
    const mediumHandler = (event) =>{
    event.preventDefault()
    const medium_info = inputValues;
      dispatch(addMidium(medium_info))
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
              <h3>Medium</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Medium Admit Form</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Admit Form Area Start Here */}
            <div className="card height-auto">
              {add_medium && add_medium.add_medium_loading === false ? successStatus === false || successStatus === null  ? (
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>Add New Medium</h3>
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
                  <form className="new-added-form" onSubmit={(e) =>mediumHandler(e)}>
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Medium Name *</label>
                        <input type="text" value={inputValues.mediumName} onChange={(e) =>setInputValues({...inputValues,mediumName:e.target.value})}  className="form-control" required/>
                        {error != null && error.MediumName ? (<h6 className="addStudent-error">*{JSON.stringify(error.MediumName).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                    <h2>Medium Add Successfully!</h2>
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

export default AddMedium;
