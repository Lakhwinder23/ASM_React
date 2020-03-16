import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function ProgressBar() {
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
                <li>Progress Bar</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Progress Bar Start Here */}
            <div className="card progress-bar-card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Default Progress Bar</h3>
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
                <div className="basic-progress-bar">
                  <div className="progress">
                    <div className="progress-bar bg-skyblue" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-yellow" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-wild-strawberry" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dodger-blue" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card progress-bar-card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Striped Progress Bar</h3>
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
                <div className="stripe-progress-bar">
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-pink" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-blue" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-wild-strawberry" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-dodger-blue" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card progress-bar-card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Gradient Progress Bar</h3>
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
                <div className="gradient-progress-bar">
                  <div className="progress">
                    <div className="progress-bar btn-gradient-yellow" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-gradient-twitter" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-gradient-gplus" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar gradient-pastel-green" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card progress-bar-card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Vertical Progress Bar</h3>
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
                <div className="vertical-progress-bar">
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-dodger-blue" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{height: '80%'}}>80%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-skyblue" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{height: '90%'}}>90%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-red" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{height: '20%'}}>20%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-dark-pastel-green" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: '40%'}}>40%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar progress-bar-striped bg-violet-blue" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{height: '80%'}}>80%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar progress-bar-striped bg-yellow" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '30%'}}>30%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar progress-bar-striped bg-light-sea-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{height: '60%'}}>60%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar btn-gradient-yellow" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{height: '80%'}}>80%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-gradient-twitter" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{height: '80%'}}>80%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar bg-gradient-gplus" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{height: '40%'}}>40%</div>
                  </div>
                  <div className="progress progress-bar-vertical">
                    <div className="progress-bar gradient-orange-peel" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{height: '50%'}}>50%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Progress Bar End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default ProgressBar;
