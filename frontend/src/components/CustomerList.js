import React from 'react';
import Customer from './Customers';


const CustomerList = (props) => {

    const customerDetails = props.data.map((customer, index) =>{
        return (
          <Customer key={index}
          name={customer.name}
          phone={customer.phone}
          email={customer.email}
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
