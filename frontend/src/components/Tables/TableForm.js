import React, { Component } from 'react';

class TableForm extends Component{
  constructor(props){
    super(props);
    this.state={
      partySize: "",
      date: "",
      time:""
    };

this.handleDateChange = this.handleDateChange.bind(this);
this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
this.handleTimeChange = this.handleTimeChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
};

handlePartySizeChange(event){
  this.setState({partySize: event.target.value});
};

handleDateChange(event){
  this.setState({date: event.target.value});
};

handleTimeChange(event){
  this.setState({time: event.target.value});
};

handleSubmit(event){
  event.preventDefault();
  const partySize = this.state.partySize;
  const date= this.state.date;
  const time = this.state.time;

    if(!partySize || !date || !time) return;

    this.props.onFormSubmit(partySize, date, time);

    this.setState({partySize:'',date:'', time:''});
  };

render(){
    return (
      <>
        <h2>Available Tables</h2>

        <form
        id = "table-availability"
        onSubmit={this.handleSubmit}>

          <input
            id="button"
            type="submit"
            value="Show tables"/>

          <input
            className="table-availability"
            placeholder="Enter party size"
            type = "number"
            value = {this.state.partySize}
            onChange={(this.handlePartySizeChange)}/>

          <input
            className="table-availability"
            type = "Date"
            value = {this.state.date}
            onChange={(this.handleDateChange)}/>

          <input
            className="table-availability"
            placeholder="Enter booking time"
            type = "number"
            value = {this.state.time}
            onChange={(this.handleTimeChange)}/>

        </form>
      </>
    );
  };
};
export default TableForm;
