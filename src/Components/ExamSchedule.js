import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import AddExam from './AddExam';
import AllExamSchedule from './AllExamSchedule';
function ExamSchedule() {
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
              <h3>Examination</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Exam Schedule</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Exam Schedule Area Start Here */}
            <div className="row">
              <AddExam />
              <AllExamSchedule />
            </div>
            {/* Exam Schedule Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default ExamSchedule;
