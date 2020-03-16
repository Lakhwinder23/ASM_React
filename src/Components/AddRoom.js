import React from 'react';

function AddRoom(){
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Room</h3>
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
                          <label>Hostel Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Room Number</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Room Type</label>
                          <select className="select2">
                            <option value>Please Select</option>
                            <option value={1}>Big</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Small</option>
                          </select>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Number Of Bed</label>
                          <select className="select2">
                            <option value>Please Select</option>
                            <option value={1}>02</option>
                            <option value={2}>03</option>
                            <option value={3}>04</option>
                            <option value={4}>05</option>
                          </select>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Cost Per Bed</label>
                          <input type="text" placeholder="$00.00" className="form-control" />
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

export default AddRoom;
