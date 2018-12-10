import React, {Component} from 'react';
import TableList from '../components/Tables/TableList';
import TableForm from '../components/Tables/TableForm';
import Request from '../helpers/request';


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

componentDidMount(){
   let request = new Request()
   request.get('/api/booths').then((data) => {
     this.setState({data: data._embedded.booths});
   })
 }

getAllBookings(){
  let allBookings = [];
  for (var i = 1; i< 7; i++) {
  let request = new Request()
  request.get(`/api/booths/${i}/bookings`).then((data) => {
    allBookings.push(data._embedded.bookings);
    for (var booking of allBookings){
      if(booking.booth.capacity > this.state.partySize){
        if((booking.date !== this.state.date) & (booking.timeSlot !== this.state.time)){
          // SET TABLE BOOLEAN TO TRUE
        }
      }
      // SET TABLE BOOLEAN TO FALSE
    }
      allBookings=[];
  })
}

console.log(allBookings)
return allBookings;
}

  handleTableAvailabilityUpdate(table){
   const url = '/api/booths/' + booth.id;
   let request = new Request();
   request.put(url, table).then(data => {
     window.location = '/booths'
   })
 }

  render(){
    this.getAllBookings();
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
