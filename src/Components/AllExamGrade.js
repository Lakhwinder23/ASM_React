import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllGrades} from '../Redux/AllGrade/AllGradeActions'


function AllExamGrade() {
  // store data access start
const allGrade = useSelector(state =>state.AllGrade)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allGradeInfo,setGradeInfo] = useState([])
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllGrades())
   },[dispatch])
// fetch allexams api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(allGrade && allGrade.all_grade && allGrade.all_grade.result && allGrade.all_grade.success === true){
       setGradeInfo(allGrade.all_grade.result)
     }
   },[allGrade])
// add data of classes api into constant,hook End


   //hooks end
        return (
            <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Exam Grade Lists</h3>
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
                                    <label className="form-check-label">Grade Name</label>
                                  </div>
                                </th>
                                <th>Grade Point</th>
                                <th>Percent From</th>
                                <th>Percent Upto</th>
                                <th>Comment</th>
                                <th />
                              </tr>
                            </thead>
                            {allGrade.all_grade_loading === false ? allGradeInfo && allGradeInfo.length > 0 ? (
                            <tbody>
                            {allGradeInfo.map((item,index) =>(
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">{item.GradeName}</label>
                                  </div>
                                </td>
                                <td>{item.GradePoint}</td>
                                <td>{item.GradeFrom}</td>
                                <td>{item.GradeUpto}</td>
                                <td>{item.Comment}</td>
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

export default AllExamGrade;
