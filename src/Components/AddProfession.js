import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux';
import { addProfession } from '../Redux/AddProfession/AddProfessionActions';


function AddProfession() {
  // store data access start
  const add_Profession = useSelector(state =>state.AddProfession)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({professionName:''
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start


  useMemo(()=>{
    if(add_Profession && add_Profession.add_profession && add_Profession.add_profession.error){
      setError(add_Profession.add_profession.error)
    }

  },[add_Profession.add_profession])

  useMemo(()=>{
    if(add_Profession && add_Profession.add_profession && add_Profession.add_profession.success){
      setSuccessStatus(add_Profession.add_profession.success)
    }

  },[add_Profession.add_profession])

  //hooks end

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
    const professionHandler = (event) =>{
    event.preventDefault()
    const profession_info = inputValues;
      dispatch(addProfession(profession_info))
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
              <h3>Profession</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Profession Admit Form</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Admit Form Area Start Here */}
            <div className="card height-auto">
              {add_Profession && add_Profession.add_profession_loading === false ? successStatus === false || successStatus === null  ? (
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>Add New Profession</h3>
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
                  <form className="new-added-form" onSubmit={(e) =>professionHandler(e)}>
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Name *</label>
                        <input type="text" value={inputValues.professionName} onChange={(e) =>setInputValues({...inputValues,professionName:e.target.value})}  className="form-control" required/>
                        {error != null && error.ProfessionName ? (<h6 className="addStudent-error">*{JSON.stringify(error.ProfessionName).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                    <h2>Profession Add Successfully!</h2>
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

export default AddProfession;
