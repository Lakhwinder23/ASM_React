import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllExamsResult} from '../Redux/AllExamsResult/AllExamsResultActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'

function AllExamResult() {
  // store data access start
const allExamResult = useSelector(state =>state.AllExamsResult)
const classes = useSelector(state =>state.AllClasses)
const exams = useSelector(state =>state.AllExams)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allExamResultInfo,setExamResultInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllExamsResult())
     dispatch(fetchAllClasses())
     dispatch(fetchAllSections())
     dispatch(fetchAllExams())
   },[dispatch])
// fetch allexams api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(allExamResult && allExamResult.all_exams_result && allExamResult.all_exams_result.result && allExamResult.all_exams_result.success === true){
       setExamResultInfo(allExamResult.all_exams_result.result)
     }
   },[allExamResult])
// add data of classes api into constant,hook End

// add data of classes api into constant,hook start
 useMemo(() =>{
   if(classes && classes.all_classes && classes.all_classes.result && classes.all_classes.success === true){
     setClassesResult(classes.all_classes.result)
   }
 },[classes])
// add data of classes api into constant,hook End

// when classesResult change add data into classInfo,hook start
 useMemo(()=>{
   if(classesResult && classesResult.data){
         setClassesInfo(classesResult.data)
   }
 },[classesResult])
// when classesResult change add data into classInfo,hook End

// add data of allexams api into constant,hook start
   useMemo(() =>{
     if(exams && exams.all_exams && exams.all_exams.result && exams.all_exams.success === true){
       setExamsResult(exams.all_exams.result)
     }
   },[exams])
// add data of allexams api into constant,hook End

// when examsResult change add data into classInfo,hook start
   useMemo(()=>{
     if(examsResult && examsResult.data){
           setExamsInfo(examsResult.data)
     }
   },[examsResult])
// when examsResult change add data into classInfo,hook End


   //hooks end
        return (
            <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>All Exam Result Lists</h3>
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
                        <form className="mg-b-20">
                          <div className="row gutters-8">
                            <div className="col-lg-5 col-sm-4 col-12 form-group">
                              <input type="text" placeholder="Search by Grade ..." className="form-control" />
                            </div>
                            <div className="col-lg-5 col-sm-5 col-12 form-group">
                              <input type="text" placeholder="Search by Point ..." className="form-control" />
                            </div>
                            <div className="col-lg-2 col-sm-3 col-12 form-group">
                              <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                          </div>
                        </form>
                        <div className="table-responsive">
                          <table className="table display data-table text-nowrap">
                            <thead>
                              <tr>
                                <th>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input checkAll" />
                                    <label className="form-check-label">Class Name</label>
                                  </div>
                                </th>
                                <th>Section Name</th>
                                <th>Exam Name</th>
                                <th>Students Result</th>
                                <th>Session</th>
                                <th />
                              </tr>
                            </thead>
                            {allExamResult.all_exams_result_loading === false ? allExamResultInfo && allExamResultInfo.length > 0 ?  (
                            <tbody>
                            {allExamResultInfo.map((item,index) =>(
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    {allClassesInfo && allClassesInfo.length > 0 ? allClassesInfo.filter(filteritem =>filteritem.id === item.ClassId).
                                      map((classitem,index) =>(
                                        <label className="form-check-label">{classitem.ClassName}</label>
                                      )):null}
                                  </div>
                                </td>
                                <td>{item.GradePoint}</td>
                                {allExamsInfo && allExamsInfo.length > 0 ? allExamsInfo.filter(filteritem =>filteritem.id === item.ExamId).
                                  map((examitem,index) =>(
                                <td>{examitem.ExamName}</td>
                                )):null}
                                <td>{item.StudentResult}</td>
                                <td>{item.Season}</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                            </tbody>
                          ):
                          (<tr><td colspan="6"><h6 className="text-center">No data available in table</h6></td></tr>)
                        :(<tr>
                          <td colspan="6">
                        <Loader
                        className = "student-detail-loader"
                      type="MutatingDots"
                      color="#fea801"
                      height={100}
                      width={100}

                        />
                        </td>
                        </tr>)}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
        );
}

export default AllExamResult;
