import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Map() {
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
                  <h3>Admin Dashboard</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Map</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Google Map Area Start Here */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card google-map-area">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Marker Map</h3>
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
                        <div className="default-map">
                          <div id="markergoogleMap" style={{width: '100%', height: '660px', borderRadius: '4px'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Google Map Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default Map;
