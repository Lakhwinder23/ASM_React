import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchStudentDetail
} from '../Redux/StudentDetail/StudentDetailActions'


function StudentDetail() {
  const studentDetail = useSelector(state =>state.StudentDetail)
  console.log("studentDetail",studentDetail);
  const dispatch = useDispatch()
  const [activestate,setActivestate] = useState('')
  const student_id = "3";
  const [studentDetailInfo,setStudentDetailInfo] = useState([])
  console.log("studentDetailInfo",studentDetailInfo)
  useEffect(() =>{
    dispatch(fetchStudentDetail(student_id))
  },[dispatch])

  useMemo(()=>{
    if(studentDetail && studentDetail.student_detail && studentDetail.student_detail.result ){
          setStudentDetailInfo(studentDetail.student_detail.result)
    }
  },[studentDetail])
  useMemo(()=>{
    if(studentDetailInfo && studentDetailInfo.length > 0 ){
          console.log("studentDetailInfo---------",studentDetailInfo[0].StudentName)
    }
  },[studentDetailInfo])
  const callbackFunction = (childData) => {
    setActivestate(childData)
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
                  <h3>Students</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Student Details</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Student Details Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>About Me</h3>
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
                    {studentDetail && studentDetail.student_detail_loading === false ?  studentDetailInfo && studentDetailInfo.length > 0 ? (
                      <div className="single-info-details">
                        <div className="item-img">
                          <img src="img/figure/student1.jpg" alt="student" />
                        </div>
                        <div className="item-content">
                          <div className="header-inline item-header">
                            <h3 className="text-dark-medium font-medium">{studentDetailInfo[0].StudentName}</h3>
                            <div className="header-elements">
                              <ul>
                                <li><a href="#"><i className="far fa-edit" /></a></li>
                                <li><a href="#"><i className="fas fa-print" /></a></li>
                                <li><a href="#"><i className="fas fa-download" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="info-table table-responsive">
                            <table className="table text-nowrap">
                              <tbody>
                                <tr>
                                  <td>Name:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].StudentName}</td>
                                </tr>
                                <tr>
                                  <td>Gender:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].Gender}</td>
                                </tr>
                                <tr>
                                  <td>Father Name:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].FatherName}</td>
                                </tr>
                                <tr>
                                  <td>Mother Name:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].MotherName}</td>
                                </tr>
                                <tr>
                                  <td>Date Of Birth:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].DateofBirth}</td>
                                </tr>
                                <tr>
                                  <td>Religion:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].Religion}</td>
                                </tr>
                                <tr>
                                  <td>Father Occupation:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].FatherOccupation}</td>
                                </tr>
                                <tr>
                                  <td>E-mail:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].email}</td>
                                </tr>
                                <tr>
                                  <td>Admission Date:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].AdmissionDate}</td>
                                </tr>
                                <tr>
                                  <td>Class:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].ClassName}</td>
                                </tr>
                                <tr>
                                  <td>Section:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].SectionName}</td>
                                </tr>
                                <tr>
                                  <td>Roll:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].RollNumber}</td>
                                </tr>
                                <tr>
                                  <td>Address:</td>
                                  <td className="font-medium text-dark-medium">{studentDetailInfo[0].Address}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ):(

      <h6>No Detail Available</h6>
                    ) : ( <div className="single-info-details">
                       <Loader
                       className = "student-detail-loader"
                     type="MutatingDots"
                     color="#fea801"
                     height={100}
                     width={100}

        /> </div>)}

                  </div>
                </div>
                {/* Student Details Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>

        );
}

export default StudentDetail;
