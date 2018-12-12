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
        <div id = "create-customer">


          <form
          onSubmit={this.handleSubmit}>

          <input
            id="submitbutton"
            type="submit"
            value="Create Customer"/>

            <input
              className="new-customer"
              id = "name"
              name= "name"
              placeholder="Enter Name"
              type = "text" />

            <input
              className="new-customer"
              id = "phone"
              name= "phone"
              placeholder="Enter Phone"
              type = "Text" />

            <input
              className="new-customer"
              name= "email"
              id = "email"
              placeholder="Enter Email"
              type = "Text" />

          </form>
        </div>
      );
    }
}

export default CustomerForm;
