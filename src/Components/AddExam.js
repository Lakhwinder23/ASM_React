import React from 'react';

function AddExam(){
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Exam</h3>
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
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Exam Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Subject Type *</label>
                          <select className="select2">
                            <option value>Please Select</option>
                            <option value={1}>Bangla</option>
                            <option value={2}>English</option>
                            <option value={3}>Mathematics</option>
                            <option value={3}>Economics</option>
                            <option value={3}>Chemistry</option>
                          </select>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Select Class *</label>
                          <select className="select2">
                            <option value={0}>Please Select</option>
                            <option value={1}>Play</option>
                            <option value={2}>Nursery</option>
                            <option value={3}>One</option>
                            <option value={3}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Select Section</label>
                          <select className="select2">
                            <option value={0}>Please Select</option>
                            <option value={1}>A</option>
                            <option value={2}>B</option>
                            <option value={3}>C</option>
                            <option value={3}>D</option>
                            <option value={3}>E</option>
                          </select>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Select Time</label>
                          <input type="text" placeholder className="form-control" />
                          <i className="far fa-clock" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Select Date</label>
                          <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" />
                          <i className="far fa-calendar-alt" />
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

export default AddExam;
