import React,{useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function AddExpense(){
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
              <h3>Accounts</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Add New Expense</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Expense</h3>
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
                      <label>Name *</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>ID No *</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Expanse Type *</label>
                      <select className="select2">
                        <option value>Please Select</option>
                        <option value={1}>Salary</option>
                        <option value={2}>Transport</option>
                        <option value={3}>Maintanance</option>
                        <option value={3}>Purchase</option>
                        <option value={3}>Utilities</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Amount *</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Phone</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>E-Mail Address</label>
                      <input type="text" placeholder className="form-control" />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Status</label>
                      <select className="select2">
                        <option value={0}>Please Select</option>
                        <option value={1}>Paid</option>
                        <option value={2}>Due</option>
                        <option value={3}>Others</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Date</label>
                      <input type="text" placeholder="dd/mm/yy" className="form-control air-datepicker" data-position="bottom right" />
                    </div>
                    <div className="col-12 form-group mg-t-8">
                      <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                      <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Add Expense Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AddExpense;
