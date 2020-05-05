import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddExamResult from './AddExamResult';
import Footer from './Footer';
import AllExamResult from './AllExamResult';
function ExamResult() {
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
                    <li>Exam Result</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                <div className="row">
                  {/* Exam Grade Add Area Start Here */}
                  <AddExamResult/>
                  {/* Exam Grade Add Area End Here */}
                  {/* Exam Grade List Area Start Here */}
                  <AllExamResult />
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

export default ExamResult;
