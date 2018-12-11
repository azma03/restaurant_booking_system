import React  from 'react';
import {Link} from 'react-router-dom';

const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }


  const bookings = props.customer.bookings.map((booking, index) => {
    return <li key={index}>{booking.date}</li>
  })

  function onDelete(){
    props.handleDelete(props.customer.id)
  }


  return (
    <div className="component">
      <p>Name: {props.customer.name}</p>
      <p>Phone: {props.customer.phone}</p>
      <p>Email: {props.customer.email}</p>
      <p>Discount: {props.customer.discount}</p>
      Bookings:
      <ul>
      {bookings}
      </ul>
      <button onClick={onDelete}>Delete Customer</button>

      <Link to={'/customers/update/' + props.customer.id}>
      <button>Update Customer</button></Link>
    </div>
  )
}

export default SingleCustomer;
