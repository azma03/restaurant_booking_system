import React from 'react';
import CustomerList from '../components/Customers/CustomerList';

class CustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{
        id:1,
        bookings:[],
        name: "Jan Michael Vincent",
        email: "jmv@santiniair.com",
        phone: "07901 327 8540",
        discount: "bronze",
        visits: 12,
        spend: 357
      },
      {
        id:2,
        bookings:[],
        name: "Rachel Welsh",
        email: "rachel@welsh.com",
        phone: "0141 246 5461",
        discount: "gold",
        visits: 45,
        spend: 2389
      }]
    };
  };
  render(){
    return(
      <>
      <CustomerList data={this.state.data}/>
      </>
    );
  };
};

export default CustomerContainer;
