import React from 'react';
import CustomerList from '../components/CustomerList';

class CustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{
        name: "Jan Michael Vincent",
        phone: "07901 327 8540",
        email: "jmv@santiniair.com",
        discount: "bronze",
        visits: 12,
        spend: 357
      },
      {
        name: "Rachel Welsh",
        phone: "0141 246 5461",
        email: "rachel@welsh.com",
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
