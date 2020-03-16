import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Eventcalender from './Eventcalender';
import Footer from './Footer';
import Notification from './Notification';
import ExamResults from './ExamResults';

function Students() {
  const [activestate,setActivestate] = useState('')
  const callbackFunction = (childData) => {
    setActivestate(childData)
}
        // "use strict";
        const six = "06";

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
              <h3>Admin Dashboard</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Student</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            <div className="row">
              {/* Student Info Area Start Here */}
              <div className="col-4-xxxl col-12">
                <div className="card dashboard-card-ten">
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
                    <div className="student-info">
                      <div className="media media-none--xs">
                        <div className="item-img">
                          <img src="img/figure/student.png" className="media-img-auto" alt="student" />
                        </div>
                        <div className="media-body">
                          <h3 className="item-title">Jessia Rose</h3>
                          <p>Aliquam erat volutpat. Curabiene natis massa
                            sedde lacustiquen sodale word moun taiery.</p>
                        </div>
                      </div>
                      <div className="table-responsive info-table">
                        <table className="table text-nowrap">
                          <tbody>
                            <tr>
                              <td>Name:</td>
                              <td className="font-medium text-dark-medium">Jessia Rose</td>
                            </tr>
                            <tr>
                              <td>Gender:</td>
                              <td className="font-medium text-dark-medium">Female</td>
                            </tr>
                            <tr>
                              <td>Father Name:</td>
                              <td className="font-medium text-dark-medium">Fahim Rahman</td>
                            </tr>
                            <tr>
                              <td>Mother Name:</td>
                              <td className="font-medium text-dark-medium">Jannatul Kazi</td>
                            </tr>
                            <tr>
                              <td>Date Of Birth:</td>
                              <td className="font-medium text-dark-medium">07.08.2006</td>
                            </tr>
                            <tr>
                              <td>Religion:</td>
                              <td className="font-medium text-dark-medium">Islam</td>
                            </tr>
                            <tr>
                              <td>Father Occupation:</td>
                              <td className="font-medium text-dark-medium">Graphic Designer</td>
                            </tr>
                            <tr>
                              <td>E-Mail:</td>
                              <td className="font-medium text-dark-medium">jessiarose@gmail.com</td>
                            </tr>
                            <tr>
                              <td>Admission Date:</td>
                              <td className="font-medium text-dark-medium">05.01.2019</td>
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
                              <td>Roll:</td>
                              <td className="font-medium text-dark-medium">10005</td>
                            </tr>
                            <tr>
                              <td>Adress:</td>
                              <td className="font-medium text-dark-medium">House #10, Road #6,
                                Australia</td>
                            </tr>
                            <tr>
                              <td>Phone:</td>
                              <td className="font-medium text-dark-medium">+ 88 9856418</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Student Info Area End Here */}
              <div className="col-8-xxxl col-12">
                <div className="row">
                  {/* Summery Area Start Here */}
                  <div className="col-lg-4">
                    <div className="dashboard-summery-one">
                      <div className="row">
                        <div className="col-6">
                          <div className="item-icon bg-light-magenta">
                            <i className="flaticon-shopping-list text-magenta" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="item-content">
                            <div className="item-title">Notification</div>
                            <div className="item-number"><span className="counter" data-num={12}>12</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="dashboard-summery-one">
                      <div className="row">
                        <div className="col-6">
                          <div className="item-icon bg-light-blue">
                            <i className="flaticon-calendar text-blue" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="item-content">
                            <div className="item-title">Events</div>
                            <div className="item-number"><span className="counter" data-num={six}>06</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="dashboard-summery-one">
                      <div className="row">
                        <div className="col-6">
                          <div className="item-icon bg-light-yellow">
                            <i className="flaticon-percentage-discount text-orange" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="item-content">
                            <div className="item-title">Attendance</div>
                            <div className="item-number"><span className="counter" data-num={94}>94</span><span>%</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Summery Area End Here */}
                  {/* Exam Result Area Start Here */}
                  <div className="col-lg-12">
                    <div className="card dashboard-card-eleven">
                      <ExamResults />
                    </div>
                  </div>
                  {/* Exam Result Area End Here */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4-xxxl col-xl-6 col-12">
                <div className="card dashboard-card-three">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Attendence</h3>
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
                    <div className="doughnut-chart-wrap">
                      <canvas id="student-doughnut-chart" width={100} height={270} />
                    </div>
                    <div className="student-report">
                      <div className="student-count pseudo-bg-blue">
                        <h4 className="item-title">Absent</h4>
                        <div className="item-number">28.2%</div>
                      </div>
                      <div className="student-count pseudo-bg-yellow">
                        <h4 className="item-title">Present</h4>
                        <div className="item-number">65.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <Eventcalender />
              <div className="col-4-xxxl col-12">
                <div className="card dashboard-card-six">
                  <Notification />
                </div>
              </div>
            </div>
            {/* Footer Area Start Here */}
            <Footer />
            {/* Footer Area End Here */}
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Students;
