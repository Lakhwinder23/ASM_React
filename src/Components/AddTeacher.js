import React,{useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function AddTeacher(){
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
              <h3>Teacher</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Add New Teacher</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add New Teacher Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Teacher</h3>
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
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>First Name *</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Last Name *</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Gender *</label>
                      <select className="select2">
                        <option value>Please Select Gender *</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Others</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Date Of Birth *</label>
                      <input type="text" placeholder="dd/mm/yyyy" className="form-control air-datepicker" />
                      <i className="far fa-calendar-alt" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>ID No</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Blood Group *</label>
                      <select className="select2">
                        <option value>Please Select Group *</option>
                        <option value={1}>A+</option>
                        <option value={2}>A-</option>
                        <option value={3}>B+</option>
                        <option value={3}>B-</option>
                        <option value={3}>O+</option>
                        <option value={3}>O-</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Religion *</label>
                      <select className="select2">
                        <option value>Please Select Religion *</option>
                        <option value={1}>Islam</option>
                        <option value={2}>Hindu</option>
                        <option value={3}>Christian</option>
                        <option value={3}>Buddish</option>
                        <option value={3}>Others</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>E-Mail</label>
                      <input type="email" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Class *</label>
                      <select className="select2">
                        <option value>Please Select Class *</option>
                        <option value={1}>Play</option>
                        <option value={2}>Nursery</option>
                        <option value={3}>One</option>
                        <option value={3}>Two</option>
                        <option value={3}>Three</option>
                        <option value={3}>Four</option>
                        <option value={3}>Five</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Section *</label>
                      <select className="select2">
                        <option value>Please Select Section *</option>
                        <option value={1}>Pink</option>
                        <option value={2}>Blue</option>
                        <option value={3}>Bird</option>
                        <option value={3}>Rose</option>
                        <option value={3}>Red</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Address</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Phone</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-lg-6 col-12 form-group">
                      <label>Short BIO</label>
                      <textarea className="textarea form-control" name="message" id="form-message" cols={10} rows={9} defaultValue={""} />
                    </div>
                    <div className="col-lg-6 col-12 form-group mg-t-30">
                      <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                      <input type="file" className="form-control-file" />
                    </div>
                    <div className="col-12 form-group mg-t-8">
                      <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                      <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Add New Teacher Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AddTeacher;
