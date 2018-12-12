import React, {Component} from 'react'
import Request from '../helpers/request.js';
import UpdateBookingForm from '../components/Bookings/UpdateBookingForm';

class UpdateBookingFormContainer extends Component{
  constructor(props){

    super(props)
    this.state = {
    booking: null,
    tableData: [],
    customerData:[]
    }

    this.getBooking = this.getBooking.bind(this);
    this.handleUpdateBooking = this.handleUpdateBooking.bind(this);
  }

  componentDidMount(){
    let request1 = new Request()
    request1.get('/api/customers').then((data1) => {
      this.setState({customerData:data1._embedded.customers});
    })

    let request2 = new Request()
    request2.get('/api/booths').then((data2) => {
      this.setState({tableData:data2._embedded.booths});
    })

    this.getBooking();

  }

  getBooking(){

    const request = new Request()
    const url = '/api/bookings/' + this.props.id + '?projection=embedToBooking'

    request.get(url).then(bookingData =>{


      this.setState({booking: bookingData})
    })
    
  }

  handleUpdateBooking(booking){
    const url = '/api/bookings/' + booking.id;
    let request = new Request();
    request.put(url, booking).then(data => {
      window.location = '/bookings'
    })
  }

  render(){
    return(
      <UpdateBookingForm
      booking = {this.state.booking}
      customerData = {this.state.customerData}
      tableData={this.state.tableData}
      handleUpdate={this.handleUpdateBooking}/>
    )
  }
}

export default UpdateBookingFormContainer;
