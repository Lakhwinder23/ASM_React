import React from 'react';

function AddUser(){
        return (
            <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New User</h3>
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
                          <label>First Name *</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Last Name *</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>User Type *</label>
                          <select className="select2">
                            <option value>Please Select*</option>
                            <option value={1}>Super Admin</option>
                            <option value={2}>Admin</option>
                            <option value={3}>User</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Gender *</label>
                          <select className="select2">
                            <option value>Please Select Gender *</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                            <option value={3}>Others</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Father's Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Mother's Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Date Of Birth *</label>
                          <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" data-position="bottom right" />
                          <i className="far fa-calendar-alt" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Religion *</label>
                          <select className="select2">
                            <option value>Please Select *</option>
                            <option value={1}>Islam</option>
                            <option value={2}>Christian</option>
                            <option value={3}>Hindu</option>
                            <option value={4}>Buddhish</option>
                            <option value={5}>Others</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Joining Data *</label>
                          <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" data-position="bottom right" />
                          <i className="far fa-calendar-alt" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>E-Mail</label>
                          <input type="email" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Subject *</label>
                          <select className="select2">
                            <option value>Please Select*</option>
                            <option value={1}>Mathmetics</option>
                            <option value={2}>English</option>
                            <option value={3}>Chemistry</option>
                            <option value={3}>Biology</option>
                            <option value={3}>Others</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Class *</label>
                          <select className="select2">
                            <option value>Please Select Class *</option>
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
                          <label>Section *</label>
                          <select className="select2">
                            <option value>Please Select Section *</option>
                            <option value={1}>Pink</option>
                            <option value={2}>Blue</option>
                            <option value={3}>Bird</option>
                            <option value={3}>Rose</option>
                            <option value={3}>Red</option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>ID No *</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Phone</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-lg-6 col-12 form-group">
                          <label>Adress *</label>
                          <textarea className="textarea form-control" name="message" id="form-message" cols={10} rows={4} defaultValue={""} />
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

export default AddUser;
