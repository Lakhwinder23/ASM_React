import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Button(){
  const [activestate,setActivestate] = useState('')
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
        return (
            <div id="wrapper" className={activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
        {/* Header Menu Area Start Here */}
        <Header parentCallback = {() =>callbackFunction()}/>
        {/* Header Menu Area End Here */}
        {/* Page Area Start Here */}
        <div className="dashboard-page-one">
          {/* Sidebar Area Start Here */}
          <Sidebar />
          {/* Sidebar Area End Here */}
          <div className="dashboard-content-one">
            {/* Breadcubs Area Start Here */}
            <div className="breadcrumbs-area">
              <h3>UI Elements</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>UI Elements</li>
                <li>Button</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Button Area Start Here */}
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Filled Button</h3>
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
                <div className="ui-btn-wrap">
                  <ul>
                    <li><button type="button" className="btn-fill-md text-light bg-dodger-blue">Primary</button></li>
                    <li><button type="button" className="btn-fill-md text-light bg-mauvelous">Secondary</button></li>
                    <li><button type="button" className="btn-fill-md text-light bg-orange-peel">Info</button></li>
                    <li><button type="button" className="btn-fill-md text-light bg-dark-pastel-green">Success</button></li>
                    <li><button type="button" className="btn-fill-xl text-light bg-red">Warning</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-4 text-light bg-true-v">Awesome</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-4 text-light bg-violet-blue">Disabled</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-light bg-light-sea-green">Reload</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-light bg-martini">Stories</button></li>
                    <li><button type="button" className="btn-fill-sm radius-4 text-light bg-yellow">Sure</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-light bg-orange-red">Close</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Outline Button</h3>
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
                <div className="ui-btn-wrap">
                  <ul>
                    <li><button type="button" className="btn-fill-md text-dodger-blue border-dodger-blue">Primary</button></li>
                    <li><button type="button" className="btn-fill-md text-mauvelous border-mauvelous">Secondary</button></li>
                    <li><button type="button" className="btn-fill-md text-orange-peel border-orange-peel">Info</button></li>
                    <li><button type="button" className="btn-fill-md text-dark-pastel-green border-dark-pastel-green">Success</button></li>
                    <li><button type="button" className="btn-fill-xl text-red border-red">Warning</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-4 text-true-v border-true-v">Awesome</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-4 text-violet-blue border-violet-blue">Disabled</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-light-sea-green border-light-sea-green">Reload</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-martini border-martini">Stories</button></li>
                    <li><button type="button" className="btn-fill-sm radius-4 text-yellow border-yellow">Sure</button></li>
                    <li><button type="button" className="btn-fill-md radius-4 text-orange-red border-orange-red">Close</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Shadow Button</h3>
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
                <div className="ui-btn-wrap">
                  <ul>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light shadow-dodger-blue bg-dodger-blue">Primary</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light shadow-dark-pastel-green bg-dark-pastel-green">Success</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light shadow-true-v bg-true-v">Awesome</button></li>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light shadow-red bg-red">Warning</button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-martini shadow-martini">Stories</button></li>
                    <li><button type="button" className="btn-fill-xl radius-30 text-light shadow-violet-blue bg-violet-blue">Disabled</button></li>
                    <li><button type="button" className="btn-fill-xl radius-30 text-light shadow-light-sea-green bg-light-sea-green">Reload</button></li>
                    <li><button type="button" className="btn-fill-xl radius-30 text-light shadow-orange-peel bg-orange-peel">Info</button></li>
                    <li><button type="button" className="btn-fill-xl radius-30 text-light shadow-orange-red bg-orange-red">Close</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Gradient Button</h3>
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
                <div className="ui-btn-wrap">
                  <ul>
                    <li><button type="button" className="btn-fill-lmd text-light gradient-dodger-blue">Primary</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal no-radius text-light gradient-orange-peel">Awesome</button></li>
                    <li><button type="button" className="btn-fill-lmd text-light bg-gradient-gplus">Warning</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal no-radius text-light gradient-pastel-green">Success</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal text-light btn-gradient-yellow">Info</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal text-light gradient-orange-peel">Awesome</button></li>
                    <li><button type="button" className="btn-fill-lmd text-light radius-4 bg-gradient-gplus">Warning</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal text-light gradient-pastel-green">Success</button></li>
                    <li><button type="button" className="btn-fill-lg font-normal radius-4 text-light btn-gradient-yellow">Info</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1 mg-b-25">
                  <div className="item-title">
                    <h3>Icon Button</h3>
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
                <div className="ui-btn-wrap">
                  <ul>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light bg-dodger-blue">Primary<i className="fas fa-caret-down mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light bg-violet-blue">Select Area<i className="fas fa-caret-down mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-dark-pastel-green">Success<i className="fas fa-check mg-l-15" /></button></li>
                    <li><button type="button" className="btn-fill-lmd radius-30 text-light bg-true-v">Upload Image<i className="fas fa-cloud-upload-alt mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-red">Warning<i className="fas fa-exclamation-circle mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-orange-peel">Settings<i className="fas fa-cog mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-light-sea-green">Calender<i className="fas fa-calendar-alt mg-l-10" /></button></li>
                    <li><button type="button" className="btn-fill-md radius-30 text-light bg-martini">Web Link<i className="fas fa-link mg-l-10" /></button></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Button Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Button;
