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

    function handleSort(){
      props.onSortRequest();
    }

    return(
      <div id = "customer-table">
        <div id="table-header">
        <a onClick={handleSort}>Customers (ordered by visits)</a>
        </div>
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
      </div>
    );
  };

export default CustomerList;
