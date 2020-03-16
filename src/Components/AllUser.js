import React from 'react';

function AllUser() {
        return (
            <div className="col-4-xxxl col-xl-5">
                <div className="card account-settings-box height-auto">
                  <div className="card-body">
                    <div className="heading-layout1 mg-b-20">
                      <div className="item-title">
                        <h3>All User</h3>
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
                    <div className="all-user-box">
                      <div className="media media-none--xs active">
                        <div className="item-img">
                          <img src="img/figure/user1.jpg" className="media-img-auto" alt="user" />
                        </div>
                        <div className="media-body space-md">
                          <h5 className="item-title">Steven Johnson</h5>
                          <div className="item-subtitle">Super Admin</div>
                        </div>
                      </div>
                      <div className="media media-none--xs">
                        <div className="item-img">
                          <img src="img/figure/user2.jpg" className="media-img-auto" alt="user" />
                        </div>
                        <div className="media-body space-md">
                          <h5 className="item-title">Maria Jane</h5>
                          <div className="item-subtitle">Super Admin</div>
                        </div>
                      </div>
                      <div className="media media-none--xs">
                        <div className="item-img">
                          <img src="img/figure/user3.jpg" className="media-img-auto" alt="user" />
                        </div>
                        <div className="media-body space-md">
                          <h5 className="item-title">Andrew Walles</h5>
                          <div className="item-subtitle">Super Admin</div>
                        </div>
                      </div>
                      <div className="media media-none--xs">
                        <div className="item-img">
                          <img src="img/figure/user4.jpg" className="media-img-auto" alt="user" />
                        </div>
                        <div className="media-body space-md">
                          <h5 className="item-title">Walter Emma</h5>
                          <div className="item-subtitle">Super Admin</div>
                        </div>
                      </div>
                      <div className="media media-none--xs">
                        <div className="item-img">
                          <img src="img/figure/user5.jpg" className="media-img-auto" alt="user" />
                        </div>
                        <div className="media-body space-md">
                          <h5 className="item-title">Stuart Johnson</h5>
                          <div className="item-subtitle">Super Admin</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
}

export default AllUser;
