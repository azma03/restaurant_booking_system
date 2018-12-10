import React, {Component} from 'react';
import TableList from '../components/Tables/TableList';
import TableForm from '../components/Tables/TableForm';


class TableContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: "",
      time: "",
      partySize: "",
      data:[{
        id:1,
        restaurant_id:1,
        bookings:[],
        capacity:4,
        available:true
      },
      {
        id:2,
        restaurant_id:1,
        bookings:[],
        capacity:2,
        available:false
      }]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleFormSubmit(partySize, date, time){
  this.setState({partySize: partySize, date: date, time:time});

};

  render(){
    return(
      <>
      <TableForm onFormSubmit = {this.handleFormSubmit}/>
        <p> {this.state.date}{this.state.time}{this.state.partySize}</p>
      <TableList data={this.state.data}/>
      </>
    );
  };
};

export default TableContainer;
