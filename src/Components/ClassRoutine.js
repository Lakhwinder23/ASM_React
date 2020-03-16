import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddSubject from './AddSubject';
import Footer from './Footer';

function ClassRoutine() {
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
                  <h3>Class Routine</h3>
                  <ul>
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>Routine</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Class Routine Area Start Here */}
                <div className="row">
                  <AddSubject />
                  <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Class Routine</h3>
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
                            <div className="col-lg-4 col-12 form-group">
                              <input type="text" placeholder="Search by Day ..." className="form-control" />
                            </div>
                            <div className="col-lg-3 col-12 form-group">
                              <input type="text" placeholder="Search by Class ..." className="form-control" />
                            </div>
                            <div className="col-lg-3 col-12 form-group">
                              <input type="text" placeholder="Search by Section ..." className="form-control" />
                            </div>
                            <div className="col-lg-2 col-12 form-group">
                              <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                          </div>
                        </form>
                        <div className="table-responsive">
                          <table className="table display data-table text-nowrap">
                            <thead>
                              <tr>
                                <th>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input checkAll" />
                                    <label className="form-check-label">Day</label>
                                  </div>
                                </th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Section</th>
                                <th>Teacher</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Sunday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>Accounting</td>
                                <td>A</td>
                                <td>Mike John</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Monday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>English</td>
                                <td>A</td>
                                <td>Adam John</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Tuesday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>Economics</td>
                                <td>A</td>
                                <td>Johanthon Ray</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Wednesday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>Drawing</td>
                                <td>A</td>
                                <td>Mike Jonas</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Thursday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>English</td>
                                <td>A</td>
                                <td>Kate Well</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Friday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>Chemistry</td>
                                <td>A</td>
                                <td>Mike John</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Saturday</label>
                                  </div>
                                </td>
                                <td>4</td>
                                <td>English</td>
                                <td>A</td>
                                <td>Mike John</td>
                                <td>10.00 am-11.00 am</td>
                                <td>20/06/2019</td>
                                <td>
                                  <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                      <span className="flaticon-more-button-of-three-dots" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Class Routine Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );

}

export default ClassRoutine;
