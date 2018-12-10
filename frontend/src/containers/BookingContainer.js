import React from 'react';
import BookingList from '../components/Bookings/BookingList';
import BookingDateSelector from '../components/Bookings/BookingDateSelector';
import Request from '../helpers/request.js';

class BookingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: null,
      data:[]
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  };

handleDateSelected(selectedDate){
  this.setState({currentDate: selectedDate})
};

componentDidMount(){
   let request2 = new Request()
   request2.get('/api/bookings').then((data) => {
     this.setState({data:data._embedded.bookings});
   })
 }

  render(){
    return(
      <>
      <BookingDateSelector bookings={this.state.data} onDateSelected={this.handleDateSelected}/>
      <BookingList data={this.state.data} filterDate={this.state.currentDate}/>
      </>
    );
  };
};

export default BookingContainer;
