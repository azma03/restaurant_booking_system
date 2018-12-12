import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

const SingleBooking = (props) =>{



if(!props.booking){
    return null;
  }


function onDelete(){
  props.handlesDelete(props.booking.id)
  }








    return (
        <div className="component">
          <p>Name: {props.booking.customer.name}</p>
          <p>Time: {props.booking.timeSlotValue}</p>
          <p>Table: {props.booking.booth.id}</p>
          <p>Party size: {props.booking.partySize}</p>

          <button onClick={onDelete}>Delete Booking</button>

          <Link to={'/bookings/update/' + props.booking.id}>
          <button>Update Booking</button></Link>
        </div>
      )
    }




  export default SingleBooking;
