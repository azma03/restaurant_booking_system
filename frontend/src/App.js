import React, { Component } from 'react';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import BookingContainer from './containers/BookingContainer';

class App extends Component {
  render() {
    return (
      <>
        <CustomerContainer/>
        <BookingContainer/>
      </>
    );
  };
};

export default App;
