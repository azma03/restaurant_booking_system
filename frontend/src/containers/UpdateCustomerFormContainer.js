import React, {Component} from 'react'
import Request from '../../helpers/request.js';

class UpdateCustomerFormContainer extends Component(){
  constructor(props){
    super(props)
    this.state = {
      bookings: [],
      customer: null
    }
  }

componentDidMount(){
  this.getBookings();
  this.getCustomer();
  }
getBookings(){
      const request = new Request()
      request.get('/api/bookings').then(data =>{
        this.setState({bookings: data._embedded.bookings})
      })
    }
getCustomer(){
      const request = new Request()
      const url = '/api/customers' + this.props.id + '?projection=embedToCustomer'
      request.get('url').then(data =>{
      this.setState({customer: data})
    })
  }

}

extends default UpdateCustomerFormContainer;
