import React, { Component } from 'react';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import BookingContainer from './containers/BookingContainer';
import TableContainer from './containers/TableContainer';
import ReceiptContainer from './containers/ReceiptContainer';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
       <React.Fragment>
         <NavBar/>
         <Switch>
         <Route exact path="/customers" component={CustomerContainer} />

         <Route exact path="/bookings" component={BookingContainer} />

         <Route exact path="/booths" component={TableContainer} />

         <Route exact path="/receipts" component={ReceiptContainer} />






       </Switch>


       </React.Fragment>
     </Router>

      
    );
  };
};

export default App;
