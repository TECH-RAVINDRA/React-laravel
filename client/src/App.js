import React, { Component } from 'react';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="preloader">
          <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
          </div>
        </div>
        <div id="main-wrapper">
          <Header />
          <Sidebar />
          <div class="page-wrapper">
            <div id="content">
              <Test />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
