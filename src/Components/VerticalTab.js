import React from 'react';

function VerticalTab() {
        return (
            <div className="card ui-tab-card">
            <div className="card-body">
              <div className="heading-layout1 mg-b-25">
                <div className="item-title">
                  <h3>Vertical Tab</h3>
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
              <div className="vertical-tab">
                <ul className="nav nav-tabs flex-column" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab10" role="tab" aria-selected="true">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab11" role="tab" aria-selected="false">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab12" role="tab" aria-selected="false">Settings</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab10" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took.When an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but alsowhen an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but alsowhen an unknown printer took.</p>
                  </div>
                  <div className="tab-pane fade" id="tab11" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took.When an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but alsowhen an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries, but alsowhen an unknown printer took.</p>
                  </div>
                  <div className="tab-pane fade" id="tab12" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took.When an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but alsowhen an
                      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but alsowhen an unknown printer took.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default VerticalTab;
