import React from 'react';

const UpdateBookingForm = (props) => {
  if(!props.booking) return null;


  const customerOptions = props.customerData.map((customer)=>{
 return <option key={customer.id} value={customer._links.self.href}>{customer.name}</option>
})
 const tableOptions = props.tableData.map((table)=>{
return <option key={table.id} value={table._links.self.href}>{table.id}</option>
 })

function handleSubmit(event){
  event.preventDefault()
  const booking = {
    "id":props.booking.id,
    "date":event.target.date.value,
    "booth":event.target.table.value,
    "customer":event.target.name.value,
    "partySize":event.target.partySize.value,
    "timeSlot":event.target.time.value
  }
  props.handleUpdate(booking)

}

  return (
        <form onSubmit={handleSubmit}>
        <> 

        <input
          id="createbookingbutton"
          type="submit"
          value="Update Booking"/>

          <select
            id = "choose-customer"
            defaultValue={props.booking.customer.name}
            name="name"
            type = "Customer">

            {customerOptions}
          </select>

          <label>Party size: </label>
          <input
          id = "party-size"
          defaultValue={props.booking.partySize}
          type = "number"
          name="partySize"
          />

          <label>Date: </label>
          <input
            id = "date"
            defaultValue={props.booking.date}
            name="date"
            placeholder="Enter Date"
            type = "date"
            />

          <label>Time: </label>
          <input
          id = "time"
          defaultValue={props.booking.timeSlotValue}
          name="time"
          type = "text"
          />

          <label>Table number: </label>
          <select
          id = "table"
          name="table"
          type = "Table">
          defaultValue={props.booking.booth.id}
          {tableOptions}
          </select>

        </>
      </form>
      )

}

export default UpdateBookingForm;
