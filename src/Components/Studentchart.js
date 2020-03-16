import React from 'react';

function Studentchart() {
        return (
            <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Students</h3>
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
            <div className="doughnut-chart-wrap">
              <canvas id="student-doughnut-chart" width={100} height={300} />
            </div>
            <div className="student-report">
              <div className="student-count pseudo-bg-blue">
                <h4 className="item-title">Female Students</h4>
                <div className="item-number">45,000</div>
              </div>
              <div className="student-count pseudo-bg-yellow">
                <h4 className="item-title">Male Students</h4>
                <div className="item-number">1,05,000</div>
              </div>
            </div>
          </div>
        );
}

export default Studentchart;
