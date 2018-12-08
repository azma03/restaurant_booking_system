import React from 'react';
import Customer from '../components/Customers';

class CustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{
        name: "Rachel Welsh",
        phone: "0141 246 5461",
        email: "rachel@welsh.com",
        discount: "gold",
        visits: 45,
        spend: 2389
      },
      {
        name: "Jan Michael Vincent",
        phone: "07901 327 8540",
        email: "jmv@santiniair.com",
        discount: "bronze",
        visits: 12,
        spend: 357
      }
    ]
  }
  }
  render(){
    return(
      <>
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
      <Customer data = {this.state.data}/>
      </table>
      </>
    );
  }
}

export default CustomerContainer;
