import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import DefaultTab from './DefaultTab';
import CustomTab from './CustomTab';
import NavTab from './NavTab';
import VerticalTab from './VerticalTab';
import IconTab from './IconTab';
function Tab() {
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
                  <h3>UI Elements</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>UI Elements</li>
                    <li>Tab</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Tab Area Start Here */}
                <DefaultTab />
                <CustomTab />
               <NavTab />
                <VerticalTab />
                <IconTab />
                {/* Tab Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>

        );
}

export default Tab;
