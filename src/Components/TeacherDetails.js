import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchTeacherDetail
} from '../Redux/TeacherDetail/TeacherDetailActions'


function TeacherDetails() {
  const teacherDetail = useSelector(state =>state.TeacherDetail)
  console.log("teacherDetail",teacherDetail);
  const dispatch = useDispatch()
  const teacher_id = "2";
  const [teacherDetailInfo,setTeacherDetailInfo] = useState([])
  console.log("teacherDetailInfo",teacherDetailInfo)

  useEffect(() =>{
    dispatch(fetchTeacherDetail(teacher_id))
  },[dispatch])

  useMemo(()=>{
    if(teacherDetail && teacherDetail.teacher_detail && teacherDetail.teacher_detail.result ){
          setTeacherDetailInfo(teacherDetail.teacher_detail.result)
    }
  },[teacherDetail])
  const [activestate,setActivestate] = useState('')
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
                  <h3>Teacher</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Teacher Details</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Student Table Area Start Here */}
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
                    {teacherDetail && teacherDetail.teacher_detail_loading === false ? teacherDetailInfo && teacherDetailInfo.length > 0 ? (
                      <div className="single-info-details">
                        <div className="item-img">
                          <img src="img/figure/teacher.jpg" alt="teacher" />
                        </div>
                        <div className="item-content">
                          <div className="header-inline item-header">
                            <h3 className="text-dark-medium font-medium">{teacherDetailInfo[0].TeacherName}</h3>
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
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].TeacherName}</td>
                                </tr>
                                <tr>
                                  <td>Gender:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].Gender}</td>
                                </tr>
                                <tr>
                                  <td>Father Name:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].FatherName}</td>
                                </tr>
                                <tr>
                                  <td>Mother Name:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].MotherName}</td>
                                </tr>
                                <tr>
                                  <td>Religion:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].Religion}</td>
                                </tr>
                                <tr>
                                  <td>Joining Date:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].JoiningDate}</td>
                                </tr>
                                <tr>
                                  <td>E-mail:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].email}</td>
                                </tr>
                                <tr>
                                  <td>Subject:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].ProfessionName}</td>
                                </tr>
                                <tr>
                                  <td>Class:</td>
                                  <td className="font-medium text-dark-medium">2</td>
                                </tr>
                                <tr>
                                  <td>Section:</td>
                                  <td className="font-medium text-dark-medium">Pink</td>
                                </tr>
                                <tr>
                                  <td>ID No:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].ProfessionId}</td>
                                </tr>
                                <tr>
                                  <td>Address:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].Address}</td>
                                </tr>
                                <tr>
                                  <td>Phone:</td>
                                  <td className="font-medium text-dark-medium">{teacherDetailInfo[0].Mobile}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ) : (
      <h6>No Detail Available</h6>
                    ): ( <div className="single-info-details">
                       <Loader
                       className = "student-detail-loader"
                     type="MutatingDots"
                     color="#fea801"
                     height={100}
                     width={100}

        /> </div>)}

                  </div>
                </div>
                {/* Student Table Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default TeacherDetails;
