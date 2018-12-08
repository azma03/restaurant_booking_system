import React from 'react';
import Booking from './Bookings';


const BookingList = (props) => {

  const bookingsForDate = props.data.filter((booking) => {
    return booking.date == props.filterDate
    });

  const bookingDetails = bookingsForDate.map((booking, index) =>{
    return (
      <Booking key={index}
      name={booking.name}
      discount={booking.discount}
      time={booking.time}
      table={booking.table}
      partySize={booking.partySize}>
      </Booking>
        );
      });

  if (props.filterDate !== null)
    return(
      <>
        <h2>Bookings for {props.filterDate}th December</h2>
        <table>
          <tbody>
          <tr>
          <th>Name</th>
          <th>Discount Level</th>
          <th>Time</th>
          <th>Table</th>
          <th>Party Size</th>
          </tr>
          </tbody>
          {bookingDetails}
        </table>
      </>
    );
    else return (
    <></>
    )
  };

export default BookingList;
