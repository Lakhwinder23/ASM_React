import React from 'react';

function CreateNotice() {
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Create A Notice</h3>
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
                          <label>Title</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Details</label>
                          <input type="text" placeholder className="form-control" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Posted By </label>
                          <input type="text" placeholder className="form-control" />
                          <i className="fas fa-user" />
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Date</label>
                          <input type="text" placeholder className="form-control air-datepicker" />
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

export default CreateNotice;
