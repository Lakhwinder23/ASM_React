import React from 'react';

function AllExamGrade() {
        return (
            <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Exam Grade Lists</h3>
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
                            <div className="col-lg-5 col-sm-4 col-12 form-group">
                              <input type="text" placeholder="Search by Grade ..." className="form-control" />
                            </div>
                            <div className="col-lg-5 col-sm-5 col-12 form-group">
                              <input type="text" placeholder="Search by Point ..." className="form-control" />
                            </div>
                            <div className="col-lg-2 col-sm-3 col-12 form-group">
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
                                    <label className="form-check-label">Grade Name</label>
                                  </div>
                                </th>
                                <th>Grade Point</th>
                                <th>Percent From</th>
                                <th>Percent Upto</th>
                                <th>Comment</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">A+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">B+</label>
                                  </div>
                                </td>
                                <td>4.00</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">C+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">D+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">A+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">B+</label>
                                  </div>
                                </td>
                                <td>4.00</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">C+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">D+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">A+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">B+</label>
                                  </div>
                                </td>
                                <td>4.00</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">C+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">D+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">A+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">B+</label>
                                  </div>
                                </td>
                                <td>4.00</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">C+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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
                                    <label className="form-check-label">D+</label>
                                  </div>
                                </td>
                                <td>3.50</td>
                                <td>95.00</td>
                                <td>100.00</td>
                                <td>Good Result</td>
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

export default AllExamGrade;
