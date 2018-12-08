import React from 'react';
import BookingList from '../components/BookingList';
import BookingDateSelector from '../components/BookingDateSelector';

class BookingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: null,
      data:[{
        name: "Jan Michael Vincent",
        discount: "bronze",
        date : 26,
        time: 2,
        table: 8,
        partySize:6
      },
      {
        name: "Rachel Welsh",
        discount: "gold",
        date: 24,
        time: 8,
        table: 4,
        partySize:2
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
