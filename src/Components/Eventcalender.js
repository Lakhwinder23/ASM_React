import React from 'react';

function Eventcalender() {
        return (
            <div className="col-12 col-xl-6 col-4-xxxl">
          <div className="card dashboard-card-four pd-b-20">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Event Calender</h3>
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
              <div className="calender-wrap">
                <div id="fc-calender" className="fc-calender" />
              </div>
            </div>
          </div>
        </div>
        )
}

export default Eventcalender;
