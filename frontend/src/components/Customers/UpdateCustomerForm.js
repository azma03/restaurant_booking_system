import React from 'react';

const UpdateCustomerForm = (props) => {
  if(!props.customer) return null;

function handleSubmit(event){
  event.preventDefault()
  const customer = {
    "id":props.customer.id,
    "name":event.target.name.value,
    "email":event.target.email.value,
    "phone":event.target.phone.value
  }
  props.handleUpdate(customer)

}

  return (
        <form onSubmit={handleSubmit}>

          <button id = "updatecustomerbutton2"
          type="submit">Update Customer</button>

          <input id="name" type="text" placeholder="Name" name="name" defaultValue={props.customer.name}/>

          <input id="email" type="text" placeholder="Email" name="email" defaultValue={props.customer.email}/>

          <input id="phone" type="text" placeholder="Phone Number" name="phone" defaultValue={props.customer.phone}/>

      </form>
      )

}

export default UpdateCustomerForm;
