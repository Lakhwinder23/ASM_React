import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import AddRoom from './AddRoom';
import AllRoom from './AllRoom';
import AddHostel from './AddHostel';
function Hostel() {
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
              <h3>Hostel List</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Hostel</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            <div className="row">
              {/* Add Room Area Start Here */}
              <AddRoom />
              {/* Add Room Area End Here */}
              {/* Add Hostel Area start Here */}
              <AddHostel />
              {/* Add Hostel Area end Here */}
              {/* All Room List Area Start Here */}
              <AllRoom />
              {/* All Room List Area End Here */}
            </div>
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Hostel;
