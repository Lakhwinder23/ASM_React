import React,{Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Admindashboard from './Components/Admindashboard';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activestate : ''
    }
  }
  componentDidMount(){
    if(this.props.isLogin && this.props.isLogin.is_Login === false){
      //window.location.href = './login'
      console.log("this.props.isLogin",this.props.isLogin.is_Login)
    }
  }

  callbackFunction = (childData) => {
    this.setState({activestate: childData})
}
  render() {

    return (
      <div id="wrapper"  className={this.state.activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
        {/* Header Menu Area Start Here sidebar-collapsed*/}
        <Header parentCallback = {this.callbackFunction}/>
        {/* Header Menu Area End Here */}
        {/* Page Area Start Here */}
        <div className="dashboard-page-one">
          {/* Sidebar Area Start Here */}
          <Sidebar />
          {/* Sidebar Area End Here */}
          <Admindashboard />
        </div>
        {/* Page Area End Here */}
   </div>
    );
  }
}
const mapStateToProps = state => ({
  isLogin: state.LoginCheck
});
export default connect(
  mapStateToProps
)(App);
// function App() {
//   return (
//     <div id="wrapper" className="wrapper bg-ash sidebar-collapsed">
//     {/* Header Menu Area Start Here */}
//     <Header />
//     {/* Header Menu Area End Here */}
//     {/* Page Area Start Here */}
//     <div className="dashboard-page-one">
//       {/* Sidebar Area Start Here */}
//       <Sidebar />
//       {/* Sidebar Area End Here */}
//       <Admindashboard />
//     </div>
//     {/* Page Area End Here */}
//   </div>
//   );
// }

// export default App;
