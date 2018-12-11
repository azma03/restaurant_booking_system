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
          <input type="text" placeholder="Name" name="name" defaultValue={props.customer.name}/>
          <input type="text" placeholder="Email" name="email" defaultValue={props.customer.email}/>
          <input type="text" placeholder="Phone Number" name="phone" defaultValue={props.customer.phone}/>
          <button type="submit">Save</button>
      </form>
      )

}

export default UpdateCustomerForm;
