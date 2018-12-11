import React from 'react';
import BookingList from '../components/Bookings/BookingList';
import BookingDateSelector from '../components/Bookings/BookingDateSelector';
import Request from '../helpers/request.js';
import BookingForm from '../components/Bookings/BookingForm';

class BookingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: null,
      data:[],
      customerData:[],
      tableData:[]
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

handleDateSelected(selectedDate){
  this.setState({currentDate: selectedDate})
};

componentDidMount(){
   let request2 = new Request()
   request2.get('/api/bookings').then((data) => {
     this.setState({data:data._embedded.bookings});
   })
   let request = new Request()
   request.get('/api/customers').then((data1) => {
     this.setState({customerData:data1._embedded.customers});
   })
   let request3 = new Request()
   request3.get('/api/booths').then((data2) => {
     this.setState({tableData:data2._embedded.booths});
   })
 }



 handleFormSubmit(booking){
   debugger;
   const request = new Request();
  request.post('/api/bookings', booking).then(()=>{
    window.location = '/api/bookings'
  })

 }

 checkTableAvailability(){


 }

  render(){
    return(
      <>
      <BookingDateSelector bookings={this.state.data} onDateSelected={this.handleDateSelected}/>
      <BookingList data={this.state.data} filterDate={this.state.currentDate}/>
      <BookingForm onFormSubmit={this.handleFormSubmit} customerData = {this.state.customerData} tableData={this.state.tableData}/>
      </>
    );
  };
};

export default BookingContainer;
