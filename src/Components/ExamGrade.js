import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddExamGrade from './AddExamGrade';
import Footer from './Footer';
import AllExamGrade from './AllExamGrade';
function ExamGrade() {
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
              <Sidebar/>
              {/* Sidebar Area End Here */}
              <div className="dashboard-content-one">
                {/* Breadcubs Area Start Here */}
                <div className="breadcrumbs-area">
                  <h3>Examination</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Exam Grade</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                <div className="row">
                  {/* Exam Grade Add Area Start Here */}
                  <AddExamGrade/>
                  {/* Exam Grade Add Area End Here */}
                  {/* Exam Grade List Area Start Here */}
                  <AllExamGrade />
                  {/* Exam Grade List Area End Here */}
                </div>
                {/* All Subjects Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>

        );
}

export default ExamGrade;
