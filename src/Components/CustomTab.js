import React from 'react';

function CustomTab() {
        return (
            <div className="card ui-tab-card">
                  <div className="card-body">
                    <div className="heading-layout1 mg-b-25">
                      <div className="item-title">
                        <h3>Custom Tab</h3>
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
                    <div className="custom-tab">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" data-toggle="tab" href="#tab4" role="tab" aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#tab5" role="tab" aria-selected="false">Profile</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#tab6" role="tab" aria-selected="false">Settings</a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab4" role="tabpanel">
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also</p>
                        </div>
                        <div className="tab-pane fade" id="tab5" role="tabpanel">
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also</p>
                        </div>
                        <div className="tab-pane fade" id="tab6" role="tabpanel">
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        );
}

export default CustomTab;
