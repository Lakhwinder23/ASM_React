import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { addNotice } from '../Redux/AddNotice/AddNoticeActions';

function CreateNotice() {
  // store data access start
  const add_notice_data = useSelector(state =>state.AddNotice)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [inputValues,setInputValues] = useState({title:'',
                                                noticeType:'',
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start

  useMemo(()=>{
    if(add_notice_data && add_notice_data.add_notice && add_notice_data.add_notice.error){
      setError(add_notice_data.add_notice.error)
    }

  },[add_notice_data.add_notice])

  useMemo(()=>{
    if(add_notice_data && add_notice_data.add_notice && add_notice_data.add_notice.success){
      setSuccessStatus(add_notice_data.add_notice.success)
    }

  },[add_notice_data.add_notice])

  //hooks end


   const noticeHandler = (event) =>{
   event.preventDefault()
   const notice_info = inputValues;
     dispatch(addNotice(notice_info))
 }

 const resetHandler = (event) =>{
   event.preventDefault()
   window.location.reload(false);
 }
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                {add_notice_data && add_notice_data.add_notice_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Create A Notice</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>noticeHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Title</label>
                          <input type="text" value={inputValues.title} placeholder className="form-control" onChange={(e) =>setInputValues({...inputValues,title:e.target.value})} required/>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Notice Type *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,noticeType:e.target.value})}
                              as="select"
                            >
                            <option value="">Please Select Notice Type *</option>
                            <option value="1">All School</option>
                            <option value="2">All Classes</option>
                            <option value="3">All Teachers</option>
                            <option value="4">All Parents</option>
                            <option value="5">Single Teacher</option>
                            <option value="6">Single Class</option>
                            <option value="7">Single Parent</option>
                            <option value="8">Single Setion</option>
                            <option value="9">Single Student</option>
                            </FormControl>
                            {error != null && error.NoticeType ? (<h6 className="addStudent-error">*{JSON.stringify(error.NoticeType).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Notice Create Successfully!</h2>
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

export default CreateNotice;
