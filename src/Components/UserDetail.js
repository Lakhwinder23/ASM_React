import React from 'react';

function UserDetail() {
        return (
            <div className="col-8-xxxl col-xl-7">
                <div className="card account-settings-box">
                  <div className="card-body">
                    <div className="heading-layout1 mg-b-20">
                      <div className="item-title">
                        <h3>User Details</h3>
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
                    <div className="user-details-box">
                      <div className="item-img">
                        <img src="img/figure/user.jpg" alt="user" />
                      </div>
                      <div className="item-content">
                        <div className="info-table table-responsive">
                          <table className="table text-nowrap">
                            <tbody>
                              <tr>
                                <td>Name:</td>
                                <td className="font-medium text-dark-medium">Steven Johnson</td>
                              </tr>
                              <tr>
                                <td>User Type:</td>
                                <td className="font-medium text-dark-medium">Super Admin</td>
                              </tr>
                              <tr>
                                <td>Gender:</td>
                                <td className="font-medium text-dark-medium">Male</td>
                              </tr>
                              <tr>
                                <td>Father Name:</td>
                                <td className="font-medium text-dark-medium">Steve Jones</td>
                              </tr>
                              <tr>
                                <td>Mother Name:</td>
                                <td className="font-medium text-dark-medium">Naomi Rose</td>
                              </tr>
                              <tr>
                                <td>Date Of Birth:</td>
                                <td className="font-medium text-dark-medium">07.08.2016</td>
                              </tr>
                              <tr>
                                <td>Religion:</td>
                                <td className="font-medium text-dark-medium">Islam</td>
                              </tr>
                              <tr>
                                <td>Joining Date:</td>
                                <td className="font-medium text-dark-medium">07.08.2016</td>
                              </tr>
                              <tr>
                                <td>E-mail:</td>
                                <td className="font-medium text-dark-medium">stevenjohnson@gmail.com</td>
                              </tr>
                              <tr>
                                <td>Subject:</td>
                                <td className="font-medium text-dark-medium">English</td>
                              </tr>
                              <tr>
                                <td>Class:</td>
                                <td className="font-medium text-dark-medium">2</td>
                              </tr>
                              <tr>
                                <td>Section:</td>
                                <td className="font-medium text-dark-medium">Pink</td>
                              </tr>
                              <tr>
                                <td>ID No:</td>
                                <td className="font-medium text-dark-medium">10005</td>
                              </tr>
                              <tr>
                                <td>Address:</td>
                                <td className="font-medium text-dark-medium">House #10, Road #6, Australia</td>
                              </tr>
                              <tr>
                                <td>Phone:</td>
                                <td className="font-medium text-dark-medium">+ 88 98568888418</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
}

export default UserDetail;
