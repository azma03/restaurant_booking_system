import React from 'react';
import CustomerList from '../components/Customers/CustomerList';
import Request from '../helpers/request.js'

class CustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  };

  componentDidMount(){
   let request = new Request()
   request.get('/api/customers').then((data) => {
     this.setState({data:data._embedded.customers})

   })
 }

  render(){
    return(
      <>
      <CustomerList data={this.state.data}/>
      </>
    );
  };
};

export default CustomerContainer;
