import React, { Component } from 'react';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import BookingContainer from './containers/BookingContainer';
import TableContainer from './containers/TableContainer';
import ReceiptContainer from './containers/ReceiptContainer';

class App extends Component {
  render() {
    return (
      <>
        <CustomerContainer/>
        <BookingContainer/>
        <TableContainer/>
        <ReceiptContainer/>
      </>
    );
  };
};

export default App;
