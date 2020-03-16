import React from 'react';

function AddTransport() {
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Transport</h3>
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
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Route Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Vehicle Number</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Driver Name</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>License Number</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                          <label>Phone Number</label>
                          <input type="text" placeholder className="form-control" />
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

export default AddTransport;
