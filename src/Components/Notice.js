import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import CreateNotice from './CreateNotice';
function Notice() {
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
              <h3>Notice Board</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Notice</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            <div className="row">
              {/* Add Notice Area Start Here */}
              <CreateNotice />
              {/* Add Notice Area End Here */}
              {/* All Notice Area Start Here */}
              <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Notice Board</h3>
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
                    <form className="mg-b-20">
                      <div className="row gutters-8">
                        <div className="col-lg-5 col-12 form-group">
                          <input type="text" placeholder="Search by Date ..." className="form-control" />
                        </div>
                        <div className="col-lg-5 col-12 form-group">
                          <input type="text" placeholder="Search by Title ..." className="form-control" />
                        </div>
                        <div className="col-lg-2 col-12 form-group">
                          <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                      </div>
                    </form>
                    <div className="notice-board-wrap">
                      <div className="notice-list">
                        <div className="post-date bg-skyblue">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-yellow">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-pink">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-skyblue">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-yellow">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-pink">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-skyblue">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-yellow">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                      </div>
                      <div className="notice-list">
                        <div className="post-date bg-pink">16 June, 2019</div>
                        <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                            text of the printing Great School manag mene esom  text of the printing manag
                            mene esom  text of the printing.</a></h6>
                        <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
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

export default Notice;
