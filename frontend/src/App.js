import React, { Component } from 'react';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import BookingContainer from './containers/BookingContainer';
import TableContainer from './containers/TableContainer';
import ReceiptContainer from './containers/ReceiptContainer';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleCustomerContainer from './containers/SingleCustomerContainer';
import UpdateCustomerFormContainer from './containers/UpdateCustomerFormContainer';

class App extends Component {
  render() {
    return (

      <Router>
       <React.Fragment>
       <div id = "container">
       <div id = "header"></div>
       </div>
         <NavBar/>
         <Switch>
         <Route exact path="/customers" component={CustomerContainer} />

         <Route exact path="/bookings" component={BookingContainer} />

         <Route exact path="/booths" component={TableContainer} />

         <Route exact path="/receipts" component={ReceiptContainer} />

         <Route exact path="/customers/:id" render={(props)=>{
              const id = props.match.params.id
              return <SingleCustomerContainer id={id}/>
            }}/>

        <Route exact path="/customers/update/:id" render={(props) => {
              const id = props.match.params.id
              return <UpdateCustomerFormContainer id={id} />
            }} />
       </Switch>
       </React.Fragment>
     </Router>

    );
  };
};

export default App;
