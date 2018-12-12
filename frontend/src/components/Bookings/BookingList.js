import React from 'react';
import Booking from '../Bookings/Booking';


const BookingList = (props) => {

  const bookingsForDate = props.data.filter((booking) => {
    return booking.date === props.filterDate
    });

  const bookingDetails = bookingsForDate.map((booking) =>{
    return (
      <Booking key={booking.id}
      id={booking.id}
      name={booking.customer.name}
      discount={booking.discount}
      time={booking.timeSlotValue}
      table={booking.booth.id}
      partySize={booking.partySize}>
      </Booking>
        );
      });

  if (props.filterDate !== null)
    return(
      <div id="bookings-table">
        <table>
          <tbody>
          <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Table</th>
          <th>Party Size</th>
          </tr>
          </tbody>
          {bookingDetails}
        </table>
      </div>
    );
    else return (
    <></>
    )
  };

export default BookingList;
