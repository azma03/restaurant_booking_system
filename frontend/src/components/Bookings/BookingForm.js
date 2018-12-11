import React, {Component} from 'react';

const BookingForm = (props)=> {


  const customerOptions = props.customerData.map((customer)=>{
 return <option key={customer.id} value={customer._links.self.href}>{customer.name}</option>
})
 const tableOptions = props.tableData.map((table)=>{
return <option key={table.id} value={table._links.self.href}>{table.id}</option>
 })




    // this.state={
    //   name:"",
    //   date:"",
    //   time:"",
    //   table:"",
    //   partySize:""
    // }





  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "date":event.target.date.value,
      "booth":event.target.table.value,
      "customer":event.target.name.value,
      "partySize":event.target.partySize.value,
      "timeSlot":event.target.time.value
    }


    props.onFormSubmit(booking);


  }

  function handlePartySizeChange(){
    console.log("party size change");
    
  }


    return(
      <>
        <h2>Create a booking</h2>
        <form
        id = "make-booking"
        onSubmit={handleSubmit}>

          <select

            className="make-booking"
            name="name"
            placeholder="Choose Customer Name"
            type = "Customer">
            <option selected disabled>Choose customer</option>
            {customerOptions}
            </select>

            <input
              className="make-booking"
              name="date"
              placeholder="Enter Date"
              type = "text"
              />

          <input
            className="make-booking"
            placeholder="Enter Time"
            name="time"
            type = "text"
            />

            <select

              className="make-booking"
              placeholder="Enter Table"
              name="table"
              type = "Table">
              <option selected disabled>Choose table number</option>
              {tableOptions}
              </select>

            <input
              className="make-booking"
              placeholder="Enter Party size"
              type = "number"
              name="partySize"
              onChange={handlePartySizeChange}
              />

            <input
              id="button"
              type="submit"
              value="Create Booking"/>

          </form>

      </>
    )
  }


export default BookingForm;
