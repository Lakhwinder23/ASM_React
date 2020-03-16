import React from 'react';

function IconTab(){
        return (
            <div className="card ui-tab-card">
            <div className="card-body">
              <div className="heading-layout1 mg-b-25">
                <div className="item-title">
                  <h3>Icon Tab</h3>
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
              <div className="icon-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link border-dark-pastel-green active" data-toggle="tab" href="#tab13" role="tab" aria-selected="true"><i className="fas fa-home text-dark-pastel-green" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border-dodger-blue" data-toggle="tab" href="#tab14" role="tab" aria-selected="false"><i className="fas fa-user text-dodger-blue" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border-orange-peel" data-toggle="tab" href="#tab15" role="tab" aria-selected="false"><i className="fas fa-share text-orange-peel" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border-red" data-toggle="tab" href="#tab16" role="tab" aria-selected="false"><i className="fas fa-exclamation-triangle text-red" /></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab13" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also</p>
                  </div>
                  <div className="tab-pane fade" id="tab14" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also</p>
                  </div>
                  <div className="tab-pane fade" id="tab15" role="tabpanel">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries,but alsowhen an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      alsowhen an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also</p>
                  </div>
                  <div className="tab-pane fade" id="tab16" role="tabpanel">
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

export default IconTab;
