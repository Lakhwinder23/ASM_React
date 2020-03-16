import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import AddSubject from './AddSubject';
import AllSubject from './AllSubject';

function Subject() {
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
                  <h3>All Subjects</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Subjects</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* All Subjects Area Start Here */}
                <div className="row">
                  <AddSubject />
                  <AllSubject />
                </div>
                {/* All Subjects Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>

        );
}

export default Subject;
