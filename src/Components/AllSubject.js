import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllSubjects
} from '../Redux/AllSubjects/AllSubjectsActions'

function AllSubject(){
  const subjects = useSelector(state =>state.AllSubjects)
  console.log("subjects",subjects);
  const dispatch = useDispatch()
    const [allSubjectsInfo,setSubjectsInfo] = useState([])
    console.log("allSubjectsInfo",allSubjectsInfo);
    const class_id = "1"
    const medium_id = "1"

    useEffect(() =>{
      dispatch(fetchAllSubjects(class_id,medium_id))
    },[dispatch])

    useMemo(()=>{
      if(subjects && subjects.all_subjects && subjects.all_subjects.result){
        setSubjectsInfo(subjects.all_subjects.result)
      }
    },[subjects.all_subjects.result])


        return (
            <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>All Subjects</h3>
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
                            <div className="col-lg-4 col-12 form-group">
                              <input type="text" placeholder="Search by Exam ..." className="form-control" />
                            </div>
                            <div className="col-lg-3 col-12 form-group">
                              <input type="text" placeholder="Search by Subject ..." className="form-control" />
                            </div>
                            <div className="col-lg-3 col-12 form-group">
                              <input type="text" placeholder="dd/mm/yyyy" className="form-control" />
                            </div>
                            <div className="col-lg-2 col-12 form-group">
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
                                    <label className="form-check-label">ID</label>
                                  </div>
                                </th>
                                <th>Subject Name</th>
                                <th>Subject Type</th>
                                <th>Class</th>
                                <th />
                              </tr>
                            </thead>
                            {subjects.all_subjects_loading === false ? allSubjectsInfo && allSubjectsInfo.length > 0 ? (
                            <tbody>
                            {allSubjectsInfo.map((item,index) =>(
                              <tr key={index}>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">#{item.id}</label>
                                  </div>
                                </td>
                                <td>{item.SubjectName}</td>
                                <td>theory</td>
                                <td>1st</td>
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
                          (<tr><td colspan="5"><h6 className="text-center">No data available in table</h6></td></tr>)
                        :(<tr>
                          <td colspan="5">
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

export default AllSubject;
