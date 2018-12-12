import React, {Component} from 'react'
import Request from '../helpers/request.js';
import UpdateCustomerForm from '../components/Customers/UpdateCustomerForm';
import SingleCustomer from '../components/Customers/SingleCustomer';

class UpdateCustomerFormContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
    customer: null
    }

    this.handleCustomerUpdate = this.handleCustomerUpdate.bind(this);
    this.getCustomer = this.getCustomer.bind(this);

  }

componentDidMount(){

  this.getCustomer();
  }

getCustomer(){
      const request = new Request()
      const url = '/api/customers/' + this.props.id + '?projection=embedToCustomer'
      request.get(url).then(data =>{

        this.setState({customer: data})
      })
  }
  handleCustomerUpdate(updatedCustomer){
      const url = '/api/customers/' + updatedCustomer.id;
      let request = new Request();
      request.put(url, updatedCustomer).then(data => {
        window.location = '/customers'
      })
    }

  render(){
    return(
      <>
      <UpdateCustomerForm
      customer = {this.state.customer}
      handleUpdate = {this.handleCustomerUpdate}/>

      </>
    )
  }

}

export default UpdateCustomerFormContainer;
