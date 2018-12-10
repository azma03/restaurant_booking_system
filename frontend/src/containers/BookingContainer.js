import React from 'react';
import BookingList from '../components/Bookings/BookingList';
import BookingDateSelector from '../components/Bookings/BookingDateSelector';

class BookingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: null,
      data:[{
        id:1,
        customer_id:1,
        booth_id:1,
        partySize:6,
        receipt_id:1,
        date : 26,
        time: 2,
        name: "Jan Michael Vincent",
        discount: "bronze"
      },
      {
        id:2,
        customer_id:2,
        booth_id:2,
        partySize:4,
        receipt_id:2,
        date: 24,
        time: 8,
        name: "Rachel Welsh",
        discount: "gold"
      }]
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  };

handleDateSelected(selectedDate){
  this.setState({currentDate: selectedDate})
};

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
