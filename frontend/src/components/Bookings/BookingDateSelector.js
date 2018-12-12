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
