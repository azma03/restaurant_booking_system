import React from 'react';
import Customer from '../Customers/Customer';
import Request from '../../helpers/request.js';


const CustomerList = (props) => {

  function getTotalSpendings(customer){
    let total = 0;
    for (let booking of customer.bookings){
      total += booking.receiptTotal;
    }

    return total;
  }

    const customerDetails = props.data.map((customer) =>{

        return (
          <Customer key={customer.id}
          id={customer.id}
          bookings={customer.bookings}
          name={customer.name}
          email={customer.email}
          phone={customer.phone}
          discount={customer.discount}
          visits={customer.bookings.length}
          spend={getTotalSpendings(customer)}>
          </Customer>
        );
      });

    function handleSort(){
      props.onSortRequest();
    }

    return(
      <div id = "customer-table">
        <div id="table-header">
        <a>Customers</a>
        </div>
        <table>
          <tbody>
          <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Discount Level</th>
          <th onClick={handleSort}>No. Visits</th>
          <th>Spend (£)</th>
          </tr>
          </tbody>
          {customerDetails}
        </table>
      </div>
    );
  };

export default CustomerList;
