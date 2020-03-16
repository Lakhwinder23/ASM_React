import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function StudentPromotion() {
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
                  <h3>Students</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Student Promotion</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Student Promotion Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Search Student Promotion</h3>
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
                    <form className="new-added-form">
                      <div className="row">
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Current Session *</label>
                          <select className="select2">
                            <option value>2017-2018</option>
                            <option value={1}>2018-2019</option>
                            <option value={2}>2015-2016</option>
                            <option value={3}>2014-2015</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Promote Session *</label>
                          <select className="select2">
                            <option value>2017-2018</option>
                            <option value={1}>2018-2019</option>
                            <option value={2}>2015-2016</option>
                            <option value={3}>2014-2015</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Promotion From Class *</label>
                          <select className="select2">
                            <option value>Please Select *</option>
                            <option value={1}>Play</option>
                            <option value={2}>Nursery</option>
                            <option value={3}>One</option>
                            <option value={3}>Two</option>
                            <option value={3}>Three</option>
                            <option value={3}>Four</option>
                            <option value={3}>Five</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Promotion To Class *</label>
                          <select className="select2">
                            <option value>Please Select *</option>
                            <option value={1}>Play</option>
                            <option value={2}>Nursery</option>
                            <option value={3}>One</option>
                            <option value={3}>Two</option>
                            <option value={3}>Three</option>
                            <option value={3}>Four</option>
                            <option value={3}>Five</option>
                          </select>
                        </div>
                        <div className="col-12 form-group mg-t-8">
                          <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                          <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Student Promotion Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default StudentPromotion;
