import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {addGrade} from '../Redux/AddGrade/AddGradeActions'
function AddExamGrade() {
  // store data access start
const addGrade_data = useSelector(state =>state.AddGrade)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [inputValues,setInputValues] = useState({
                                          gradeName:"",
                                          gradePoint:"",
                                          percentageFrom:"",
                                          percentageUpto:"",
                                          comment:""
  })
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start

// add data of addGrade api into constant,hook start
   useMemo(()=>{
     if(addGrade_data && addGrade_data.add_grade && addGrade_data.add_grade.error){
       setError(addGrade_data.add_grade.error)
     }
     else if(addGrade_data && addGrade_data.add_grade && addGrade_data.add_grade.success){
        setSuccessStatus(addGrade_data.add_grade.success)
     }
   },[addGrade_data])
// add data of addGrade api into constant,hook End

   //hooks end

// component function start

// gradeHandler function start
   const gradeHandler = (event) =>{
   event.preventDefault()
   const grade_info = inputValues;
     dispatch(addGrade(grade_info))
 }
// gradeHandler function End

// resetHandler function start
   const resetHandler = (event) =>{
     event.preventDefault()
     window.location.reload(false);
   }
// resetHandler function start


// component function end
        return (
            <div className="col-4-xxxl col-12">
                    <div className="card height-auto">
                    {addGrade_data && addGrade_data.add_grade_loading === false ? successStatus === false || successStatus === null  ? (
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Add New Grade</h3>
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
                        <form className="new-added-form" onSubmit={(e) =>gradeHandler(e)}>
                          <div className="row">
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
                              <label>Grade Name</label>
                              <input type="text" placeholder="A" className="form-control" value={inputValues.gradeName} onChange={(e) =>setInputValues({...inputValues,gradeName:e.target.value})} required/>
                              {error != null && error.GradeName ? (<h6 className="addStudent-error">*{JSON.stringify(error.GradeName).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
                              <label>Grade Point</label>
                              <input type="text" placeholder="9" className="form-control" value={inputValues.gradePoint} onChange={(e) =>setInputValues({...inputValues,gradePoint:e.target.value})} required/>
                              {error != null && error.GradePoint ? (<h6 className="addStudent-error">*{JSON.stringify(error.GradePoint).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
                              <label>Percentage From</label>
                              <input type="text" placeholder="90.00" className="form-control" value={inputValues.percentageFrom} onChange={(e) =>setInputValues({...inputValues,percentageFrom:e.target.value})} required/>
                              {error != null && error.GradeFrom ? (<h6 className="addStudent-error">*{JSON.stringify(error.GradeFrom).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
                              <label>Percentage Upto</label>
                              <input type="text" placeholder="100.00" className="form-control" value={inputValues.percentageUpto} onChange={(e) =>setInputValues({...inputValues,percentageUpto:e.target.value})} required/>
                              {error != null && error.GradeUpto ? (<h6 className="addStudent-error">*{JSON.stringify(error.GradeUpto).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-12 form-group">
                              <label>Comments</label>
                              <textarea className="textarea form-control" value={inputValues.comment} onChange={(e) =>setInputValues({...inputValues,comment:e.target.value})} name="message" id="form-message" cols={10} rows={4} defaultValue={""} required/>
                              {error != null && error.Comment ? (<h6 className="addStudent-error">*{JSON.stringify(error.Comment).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                          <h2>Grade Detail add Successfully!</h2>
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

export default AddExamGrade;
