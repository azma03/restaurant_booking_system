import React from 'react';

const BookingDateSelector = (props) => {

  //find unique booking dates
  let uniqueBookingDates = [...new Set(props.bookings.map(item => item.date))];

  const options = uniqueBookingDates.map((bookingDate, index) => {

    return(
      <option value={bookingDate} key={index}>{bookingDate}</option>
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
