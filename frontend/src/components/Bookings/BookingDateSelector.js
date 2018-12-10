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
    <>
    <h2>Select date to view bookings :</h2>
    <select id="date-selector" defaultValue="default" onChange={handleChange}>
  <option disabled value="default">Select Booking Date</option>
  {options}
  </select>
  </>
  )
  };

export default BookingDateSelector;
