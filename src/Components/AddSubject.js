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
import { addSubject } from '../Redux/AddSubject/AddSubjectActions';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';

function AddSubject(){
  const classes = useSelector(state =>state.AllClasses)
  const add_Subject_info = useSelector(state =>state.AddSubject)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({subjectName:'',
                                                subjectMediumId:'',
                                                classId:''
                                                    })
  console.log("inputValues",inputValues)
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start

  useEffect(() =>{
    dispatch(fetchAllClasses())
  },[dispatch])

  useMemo(()=>{
    if(classes && classes.all_classes && classes.all_classes.result){
      setClassesResult(classes.all_classes.result)
    }
  },[classes.all_classes.result])

  useMemo(()=>{
    if(classesResult && classesResult.data){
          setClassesInfo(classesResult.data)
    }
  },[classesResult])

  useMemo(()=>{
    if(add_Subject_info && add_Subject_info.add_subject && add_Subject_info.add_subject.error){
      setError(add_Subject_info.add_subject.error)
    }

  },[add_Subject_info.add_subject])

  useMemo(()=>{
    if(add_Subject_info && add_Subject_info.add_subject && add_Subject_info.add_subject.success){
      setSuccessStatus(add_Subject_info.add_subject.success)
    }

  },[add_Subject_info.add_subject])

  //hooks end

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
  const classHandler = (event) =>{
    const classInfo = event.target.value
    console.log("classInfo",event.target.value)
    if(classInfo !=""){
      allClassesInfo.filter(classid =>classid.id ==
         classInfo).map((item,index) =>{
        setInputValues({...inputValues,subjectMediumId:item.ClassMediumId,classId:classInfo})
      })

    }
    else{
      setInputValues({...inputValues,subjectMediumId:classInfo,classId:classInfo})
    }

  }
    const subjectHandler = (event) =>{
    event.preventDefault()
    const subject_info = inputValues;
      dispatch(addSubject(subject_info))
  }

  const resetHandler = (event) =>{
    event.preventDefault()
    window.location.reload(false);
  }
        return (
            <div className="col-4-xxxl col-12">
                    <div className="card height-auto">
                    {add_Subject_info && add_Subject_info.add_subject_loading === false ? successStatus === false || successStatus === null  ? (
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Add New Subject</h3>
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
                        <form className="new-added-form" onSubmit={(e) =>subjectHandler(e)}>
                          <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Name *</label>
                              <input type="text" value={inputValues.subjectName} onChange={(e) =>setInputValues({...inputValues,subjectName:e.target.value})}  className="form-control" required/>
                              {error != null && error.SubjectName ? (<h6 className="addStudent-error">*{JSON.stringify(error.SubjectName).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <FormGroup>
                                <FormLabel>Class *</FormLabel>
                                <FormControl
                                  required
                                  type="text"
                                  onChange={(e) =>classHandler(e)}
                                  as="select"
                                >
                                <option value="">Please Select Class *</option>
                                {allClassesInfo ? allClassesInfo.map((item,index) =>(
                                  <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                                )):null}
                                </FormControl>
                                {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                          <h2>Subject Add Successfully!</h2>
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

export default AddSubject;
