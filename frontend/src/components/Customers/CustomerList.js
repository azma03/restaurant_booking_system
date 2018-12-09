import React from 'react';
import Customer from '../Customers/Customer';


const CustomerList = (props) => {

    const customerDetails = props.data.map((customer) =>{
        return (
          <Customer key={customer.id}
          id={customer.id}
          bookings={customer.bookings}
          name={customer.name}
          email={customer.email}
          phone={customer.phone}
          discount={customer.discount}
          visits={customer.visits}
          spend={customer.spend}>
          </Customer>
        );
      });

    return(
      <>
        <h2>Customers (ordered by visits)</h2>
        <table>
          <tbody>
          <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Discount Level</th>
          <th>No. Visits</th>
          <th>Spend (£)</th>
          </tr>
          </tbody>
          {customerDetails}
        </table>
      </>
    );
  };

export default CustomerList;
