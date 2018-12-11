import React from 'react';
import Customer from '../Customers/Customer';
import Request from '../../helpers/request.js';


const CustomerList = (props) => {

    const customerDetails = props.data.map((customer) =>{

      // let visitCount;
      // let request1 = new Request()
      // request1.get('/api/customers/1/visitCount').then((data) => {
      //   visitCount = data;
      // })
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
      <>
        <h2>Customers</h2>
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
      </>
    );
  };

export default CustomerList;
