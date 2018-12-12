import React from 'react';

const BookingDateSelector = (props) => {

  const options = props.bookings.map((booking, index) => {
    return(
      <option value={booking.date} key={index}>{booking.date}</option>
    )
  })

  function handleChange(event){
    props.onDateSelected(event.target.value);
  }

  return(
    <div id="date-selector">
    <a >Select date to view bookings :</a>
    <select id="choose-booking" defaultValue="default" onChange={handleChange}>
  <option  disabled value="default">Choose Booking Date</option>
  {options}
  </select>
  </div>
  )
  };

export default BookingDateSelector;
