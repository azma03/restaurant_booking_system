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
      <div id="container2">

        <h1>Booking Details :</h1>
          <b>Name: {props.booking.customer.name}</b>
          <b>Time: {props.booking.timeSlotValue}</b>
          <b>Table: {props.booking.booth.id}</b>
          <b>Party size: {props.booking.partySize}</b>
<div id="single-booking">
          <button id="deletecustomerbutton" onClick={onDelete}>Delete Booking</button>

          <Link to={'/bookings/update/' + props.booking.id}>

          <button id="updatecustomerbutton">Update Booking</button></Link>
      </div>
        </div>
      )
    }




  export default SingleBooking;
