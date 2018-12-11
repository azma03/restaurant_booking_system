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
    this.handleSortRequest = this.handleSortRequest.bind(this);
  };

  componentDidMount(){
   let request = new Request()
   request.get('/api/customers').then((data) => {
     this.setState({data:data._embedded.customers})
   })
   console.log("data" + this.state.data);
   // debugger;
 }

 handleCustomerPost(customer){
     const request = new Request();
     request.post('/api/customers', customer).then(() => {
       window.location = '/api/customers';
     })
   }

handleSortRequest(){
  console.log("handle sort request")
  // let request = new Request()
  // request.get('api/customers/sortBy/frequencyVisit').then((data) => {
  //   this.setState({data:data})
  // })
  // console.log("sortedData" + this.state.data);
  // debugger;
}


  render(){
    return(
      <>
      <CustomerForm handleCustomerPost= {this.handleCustomerPost}/>
      <CustomerList data={this.state.data} onSortRequest={this.handleSortRequest}/>
      </>
    );
  };
};

export default CustomerContainer;
