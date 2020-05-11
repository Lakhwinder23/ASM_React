import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import AddTransport from './AddTransport';
import AllTransport from './AllTransport';
function Transport() {
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
              <h3>Transport</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Transport</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            <div className="row">
              {/* Add Transport Area Start Here */}
              <AddTransport />
              {/* Add Transport Area End Here */}
              {/* All Transport List Area Start Here */}
              <AllTransport />
              {/* All Transport List Area End Here */}
            </div>
            {/* All Subjects Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Transport;
