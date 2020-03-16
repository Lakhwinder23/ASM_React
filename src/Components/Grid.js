import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Grid() {
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
                <li>Grid</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Grid Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Base on Bootstrap System</h3>
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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ui-grid-box">Col-lg-12</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ui-grid-box">Col-lg-6</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ui-grid-box">Col-lg-6</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-lg-4</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-lg-4</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-lg-4</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-lg-3</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-lg-3</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-lg-3</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-lg-3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Mobile, Tablet &amp; Destop System</h3>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="ui-grid-box">Col-xs-6</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ui-grid-box">Col-xs-6</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-sm-4</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-sm-4</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-sm-4</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ui-grid-box">Col-sm-4</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-sm-3</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ui-grid-box">Col-sm-3</div>
                  </div>
                  <div className="col-lg-2">
                    <div className="ui-grid-box">Col-sm-2</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Grid;
