import React from 'react';
import CustomerList from '../components/Customers/CustomerList';
import CustomerForm from '../components/Customers/CustomerForm';
import Request from '../helpers/request.js'

class CustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  };

  componentDidMount(){
   let request = new Request()
   request.get('/api/customers').then((data) => {
     this.setState({data:data._embedded.customers})

   })
 }

 handleCustomerPost(customer){
     const request = new Request();
     request.post('/api/customers', customer).then(() => {
       window.location = '/customers';
     })
   }

  render(){
    return(
      <>
      <CustomerForm handleCustomerPost= {this.handleCustomerPost}/>
      <CustomerList data={this.state.data}/>
      </>
    );
  };
};

export default CustomerContainer;
