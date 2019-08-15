import React, { Component } from 'react';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';

class App extends Component {
  render() {
    const userLink = (<div id="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        {/* <div id="content"> */}
          <Route exact path='/profile' component={Profile} />
        {/* </div> */}
        <Footer />
      </div>
    </div>)
    const loginRegLink = (
        <div id="main-wrapper">
        <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
    )

    return (
      <Router>
        <div className="App">
          <div className="preloader">
            <div className="lds-ripple">
              <div className="lds-pos"></div>
              <div className="lds-pos"></div>
            </div>
          </div>
          {localStorage.userToken ? userLink : loginRegLink}
        </div>
      </Router>
    );
  }
}

export default App;
