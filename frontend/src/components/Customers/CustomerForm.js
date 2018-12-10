import React, { Component } from 'react';

class CustomerForm extends Component{
  constructor(props){
    super(props);

    this.state={
      name: "",
      phone: "",
      email:""
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handlePhoneChange = this.handlePhoneChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleNameChange(event){
  //   this.setState({name: event.target.value});
  // };
  //
  // handlePhoneChange(event){
  //   this.setState({phone: event.target.value});
  // };
  //
  // handleEmailChange(event){
  //   this.setState({email: event.target.value});
  // };

  handleSubmit(event){
    event.preventDefault();
    const customer = {
      "name": event.target.name.value,
      "phone": event.target.phone.value,
      "email": event.target.email.value
    }
    console.log(customer);
    this.props.handleCustomerPost(customer);
    };

  render(){
      return (
        <>
          <h2>Create a New Customer</h2>

          <form
          id = "new-customer"
          onSubmit={this.handleSubmit}>

            <input
              className="new-customer"
              name= "name"
              placeholder="Enter Name"
              type = "text" />

            <input
              className="new-customer"
              name= "phone"
              placeholder="Enter Phone"
              type = "Text" />

            <input
              className="new-customer"
              name= "email"
              placeholder="Enter Email"
              type = "Text" />

            <input
              id="button"
              type="submit"
              value="Create Customer"/>

          </form>
        </>
      );
    }
}

export default CustomerForm;
