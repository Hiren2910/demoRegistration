import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import "bootstrap-css-only/css/bootstrap.css";
// import "mdbreact/dist/css/mdb.css";
import './App.css';

import SingUpForm from './pages/SingUpForm';
import SingInForm from './pages/SingInForm';
// import Api from './pages/Api';
import Datatable from './pages/Datatable';
import Successful from './pages/Successful';


class App extends Component {

  render() {
    return (
      <Router>

        <div className="App">


          <div className="Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SingUpForm}>
            </Route>

            <Route path="/datatable" component={Datatable}>
            </Route>

            <Route path="/sign-in" component={SingInForm}>
            </Route>

            <Route path="/successful" component={Successful}>
            </Route>



          </div>

        </div>
      </Router>

    );
  }
}
export default App;
