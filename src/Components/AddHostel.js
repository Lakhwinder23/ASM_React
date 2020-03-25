import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { addHostel } from '../Redux/AddHostel/AddHostelActions';

function AddHostel(){
  // store data access start
  const addhostel = useSelector(state =>state.AddHostel)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [inputValues,setInputValues] = useState({hostelName:''
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start


  useMemo(()=>{
    if(addhostel && addhostel.add_hostel && addhostel.add_hostel.error){
      setError(addhostel.add_hostel.error)
    }

  },[addhostel.add_hostel])

  useMemo(()=>{
    if(addhostel && addhostel.add_hostel && addhostel.add_hostel.success){
      setSuccessStatus(addhostel.add_hostel.success)
    }

  },[addhostel.add_hostel])

  //hooks end

    const hostelHandler = (event) =>{
    event.preventDefault()
    const hostel_info = inputValues;
      dispatch(addHostel(hostel_info))
  }

  const resetHandler = (event) =>{
    event.preventDefault()
    window.location.reload(false);
  }
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                {addhostel && addhostel.add_hostel_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Hostel</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>hostelHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Hostel Name</label>
                          <input type="text" value={inputValues.hostelName} onChange={(e) =>setInputValues({...inputValues,hostelName:e.target.value})}  className="form-control" required/>
                          {error != null && error.HostelName ? (<h6 className="addStudent-error">*{JSON.stringify(error.HostelName).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Hostel Add Successfully!</h2>
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
              </div>
        );
}

export default AddHostel;
