import React,{useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddUser from './AddUser';
import AllUser from './AllUser';
import Footer from './Footer';
import UserDetail from './UserDetail';
function Account() {
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
              <h3>Account Setting</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Setting</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Account Settings Area Start Here */}
            <div className="row">
              <AddUser />
              <AllUser />
              <UserDetail />
            </div>
            {/* Account Settings Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Account;
