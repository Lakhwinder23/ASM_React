import React from 'react';

function StudentAttendence() {
        return (
            <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Student Attendence</h3>
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
                              <label>Select Class</label>
                              <select className="select2">
                                <option value>Select Class</option>
                                <option value={1}>Nursery</option>
                                <option value={2}>Play</option>
                                <option value={3}>One</option>
                                <option value={4}>Two</option>
                                <option value={5}>Three</option>
                              </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Select Section</label>
                              <select className="select2">
                                <option value={0}>Select Section</option>
                                <option value={1}>A</option>
                                <option value={2}>B</option>
                                <option value={3}>C</option>
                                <option value={4}>D</option>
                              </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Select Month</label>
                              <select className="select2">
                                <option value={0}>Select Month</option>
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                              </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Select Session</label>
                              <select className="select2">
                                <option value={0}>Select Session</option>
                                <option value={1}>2016-2017</option>
                                <option value={2}>2017-20108</option>
                                <option value={3}>2018-2019</option>
                                <option value={4}>2020-2021</option>
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
                  </div>
        );
}

export default StudentAttendence;
