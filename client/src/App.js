import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import CorporateUI from './components/ui_corporate/CorporateUI';
import CustomerTableSelectorUI from './components/ui_restaurant/CustomerUI/TableSelectorInterface';
import CustomerMenuUI from './components/ui_restaurant/CustomerUI/MenuInterface';
// import KitchenUI from './components/ui_restaurant/KitchenUI';
import KitchenOrdersUI from './components/ui_restaurant/KitchenUI/Orders';
import KitchenCompletedUI from './components/ui_restaurant/KitchenUI/Completed';
import LoginUI from './components/ui_login';
import SignUpUI from './components/ui_signup';
// import ServerUI from './components/ui_restaurant/ServerUI';
// import RegexTestComponent from './components/test/regextest.js';


import axios from 'axios';
// import TestingProxy from './components/zzz/testingproxy';

// import BreakpointIndicator from './components/zzz/breakpointindicator';


class App extends React.Component {

  handleButtonDbPopulateClick = () => {
    axios.get("/special/database/populate")
      .then(response => {
        console.log(response.data);
      });
  }
  handleButtonDbClearClick = () => {
    axios.get("/special/database/clear")
      .then(response => {
        console.log(response.data);
      });
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Route exact path="/" render={() => (
            <>
              <div className="container my-5">

                <div className="row justify-content-center px-3">
                  <div className="col-12 col-sm-6 border border-bottom-0 py-3">
                    <Link to="/signup">sign up</Link>
                  </div>
                </div>

                <div className="row justify-content-center px-3">
                  <div className="col-12 col-sm-6 border py-3">
                    <Link to="/signin">sign in</Link>
                  </div>
                </div>


              </div>
            </>
          )} />
          <Route exact path="/secret" render={() => (
            <>
              <div className="container my-5">
                <div className="row justify-content-center px-3">
                  <div className="col-12 col-sm-6 border py-3">
                    <div className="row justify-content-center mx-n2">
                      <div className="col-12 col-md-6 px-2 pb-2 pb-md-0">
                        <button
                          className="btn btn-success btn-block"
                          onClick={this.handleButtonDbPopulateClick}>
                          POPULATE DB
                        </button>
                      </div>
                      <div className="col-12 col-md-6 px-2 pt-2 pt-md-0">
                        <button
                          className="btn btn-danger btn-block"
                          onClick={this.handleButtonDbClearClick}>
                          EMPTY DB
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )} />
          <Route path="/corporate" component={CorporateUI} />
          <Route exact path="/customer" component={CustomerTableSelectorUI} />
          <Route exact path="/customer/menu" component={CustomerMenuUI} />
          <Route exact path="/kitchen" component={KitchenOrdersUI} />
          <Route exact path="/kitchen/completed" component={KitchenCompletedUI} />
          <Route path="/signin" component={LoginUI} />
          <Route path="/signup" component={SignUpUI} />
          {/* <Route path="/server" component={CustomerUI} /> */}
          {/* <Route path="/chef" render={() => (<h1>chef</h1>)}/> */}
          {/* <Route path="/server" render={() => (<h1>server</h1>)} /> */}
        </BrowserRouter>

        {/* <BreakpointIndicator /> */}
      </>
    );
  }
}

export default App;
