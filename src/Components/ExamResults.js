import React from 'react';

function ExamResults() {
        return (
            <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>All Exam Results</h3>
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
                        <div className="table-box-wrap">
                          <form className="search-form-box">
                            <div className="row gutters-8">
                              <div className="col-lg-4 col-12 form-group">
                                <input type="text" placeholder="Search by Exam ..." className="form-control" />
                              </div>
                              <div className="col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Subject ..." className="form-control" />
                              </div>
                              <div className="col-lg-3 col-12 form-group">
                                <input type="text" placeholder="dd/mm/yyyy" className="form-control" />
                              </div>
                              <div className="col-lg-2 col-12 form-group">
                                <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                              </div>
                            </div>
                          </form>
                          <div className="table-responsive result-table-box">
                            <table className="table display data-table text-nowrap">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="form-check">
                                      <input type="checkbox" className="form-check-input checkAll" />
                                      <label className="form-check-label">ID</label>
                                    </div>
                                  </th>
                                  <th>Exam Name</th>
                                  <th>Subject</th>
                                  <th>Grade</th>
                                  <th>Percent</th>
                                  <th>Date</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input type="checkbox" className="form-check-input" />
                                      <label className="form-check-label">#0021</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0022</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0023</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0024</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0025</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0025</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>D</td>
                                  <td>70.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0025</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>C</td>
                                  <td>80.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0025</label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>B</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
                                      <label className="form-check-label">#0025</label>
                                    </div>
                                  </td>
                                  <td>First Semister</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 &gt; 100</td>
                                  <td>22/02/2019</td>
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
        );
}

export default ExamResults;
