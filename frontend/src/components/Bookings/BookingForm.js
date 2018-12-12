import React, {Component} from 'react';
import TableList from '../Tables/TableList';

class BookingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePartySizeInput = this.handlePartySizeInput.bind(this);
    this.handleBookingTimeInput = this.handleBookingTimeInput.bind(this);
    this.handleBookingDateInput = this.handleBookingDateInput.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const booking = {
      "date":event.target.date.value,
      "booth":event.target.table.value,
      "customer":event.target.name.value,
      "partySize":event.target.partySize.value,
      "timeSlot":event.target.time.value
    }



    this.props.onFormSubmit(booking);


  }

  handlePartySizeInput(event){
    console.log("party size input");
    console.log(event.target.value);
    this.props.onPartySizeInput(event.target.value);

  }

  handleBookingTimeInput(event){
    console.log("Booking time input");
    console.log(event.target.value);
    this.props.onBookingTimeInput(this.state.date, event.target.value);

  }

  handleBookingDateInput(event){
    console.log("Booking date input");
    console.log(event.target.value);
    // this.props.onBookingDateInput(event.target.value);
    this.setState({date: event.target.value})
  }

  render(){
    const customerOptions = this.props.customerData.map((customer)=>{
   return <option key={customer.id} value={customer._links.self.href}>{customer.name}</option>
  })
   const tableOptions = this.props.tableData.map((table)=>{
  return <option key={table.id} value={table._links.self.href}>{table.id}</option>
   })
    return(
      <div>
        <form
        id = "make-booking"
        onSubmit={this.handleSubmit}>

        <input
          id="createbookingbutton"
          type="submit"
          value="Create Booking"/>

        <select
          id = "choose-customer"
          className="make-booking"
          name="name"
          placeholder="Choose Customer Name"
          type = "Customer">
          <option selected disabled>Choose customer</option>
          {customerOptions}
          </select>


        <input
          id = "party-size"
          className="make-booking"
          placeholder="Enter Party size"
          type = "number"
          name="partySize"
          onChange={this.handlePartySizeInput}
          />

        <input
          id = "date"
          className="make-booking"
          name="date"
          placeholder="Enter Date"
          type = "date"
          onChange={this.handleBookingDateInput}
          />

        <input
          id = "time"
          className="make-booking"
          placeholder="Enter Time"
          name="time"
          type = "text"
          onChange={this.handleBookingTimeInput}
          />

        <select
          id = "table"
          className="make-booking"
          placeholder="Enter Table"
          name="table"
          type = "Table">
          <option selected disabled>Choose table number</option>
          {tableOptions}
          </select>



        </form>
          <TableList id = "table-display" data={this.props.tableData} />
      </div>
    )

  }

  }

export default BookingForm;
