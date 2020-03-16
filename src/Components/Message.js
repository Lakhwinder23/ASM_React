import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Message() {
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
                  <h3>Messaging</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Compose Message</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                <div className="row">
                  {/* Add Notice Area Start Here */}
                  <div className="col-xl-8">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Write New Message</h3>
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
                            <div className="col-12 form-group">
                              <label>Title</label>
                              <input type="text" placeholder className="form-control" />
                            </div>
                            <div className="col-12 form-group">
                              <label>Recipient</label>
                              <input type="text" placeholder className="form-control" />
                            </div>
                            <div className="col-12 form-group">
                              <label>Message</label>
                              <textarea className="textarea form-control" name="message" id="form-message" cols={10} rows={9} defaultValue={""} />
                            </div>
                            <div className="col-12 form-group mg-t-8">
                              <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                              <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Add Notice Area End Here */}
                  {/* All Notice Area Start Here */}
                  <div className="col-xl-4">
                    <div className="card message-box-wrap height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Successful Message</h3>
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
                        <div className="message-success-box">
                          <div className="item-content">
                            <div className="item-icon">
                              <i className="fas fa-check" />
                            </div>
                            <h3 className="item-title">Successfully Message Sent</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card message-box-wrap height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Error Message</h3>
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
                        <div className="message-error-box">
                          <div className="item-content">
                            <div className="item-icon">
                              <i className="fas fa-exclamation-circle" />
                            </div>
                            <h3 className="item-title">Some Field Requierd Here</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* All Notice Area End Here */}
                </div>
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default Message;
