import React from 'react';

function AllExamSchedule() {
        return (
            <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Exam Schedule</h3>
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
                          <input type="text" placeholder="Search by Exam ..." className="form-control" />
                        </div>
                        <div className="col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Subject ..." className="form-control" />
                        </div>
                        <div className="col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Date ..." className="form-control" />
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
                                <label className="form-check-label">Exam Name</label>
                              </div>
                            </th>
                            <th>Subject</th>
                            <th>Class</th>
                            <th>Section</th>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Mathematics</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>English</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
                                <label className="form-check-label">Class Test</label>
                              </div>
                            </td>
                            <td>Chemistry</td>
                            <td>4</td>
                            <td>A</td>
                            <td>10.00 am - 11.00 am</td>
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
        );
}

export default AllExamSchedule;
