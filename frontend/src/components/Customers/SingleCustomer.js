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

 function totalSpendings(){
    let request1 = new Request()
    request1.get('api/customers/'+ props.customer.id + '/totalSpendings').then((data) => {
      let totalSpend = data;
      return totalSpend;
    })
  }

  function totalVisits(${props.customer.id}){
     let request2 = new Request()
     request2.get('api/customers/'+ ${props.customer.id} + '/visitCount').then((data) => {
       let totalSpend = data;
       return visitCount;
     })
   }

   function discountLevel(${props.customer.id}){
     let visits = totalVisits(${props.customer.id});
     if(visits>10){
       discountLevel = "gold"
     }else if(visits>5){
       discountLevel = "silver"
     }else{
       discountLevel = "bronze"
     }
    }

 return (
   <div className="component">
     <p>Name: {props.customer.name}</p>
     <p>Phone: {props.customer.phone}</p>
     <p>Email: {props.customer.email}</p>
     <p>Discount: {discountLevel}</p>
     <p>Total Visit: {visitCount}</p>
     <p>Total Spend: {totalSpend}</p>
     Bookings:
     <ul>
     {bookings}
     </ul>
     <button onClick={onDelete}>Delete Customer</button>

     <Link to={'/customers/update/' + props.customer.id}>
     <button>Update Customer</button></Link>
   </div>
 )

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
