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
      available:"",
      data:[]
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
  let requests = [];
  for(let i = 1; i < 7; i++){
    let request = new Request();
    requests.push(request.get(`/api/booths/${i}/bookings`))
  }
  Promise.all(requests).then(responses => {


    for(let i = 0; i < responses.length; i++){
      let tableMatch;

       if(responses[i]._embedded.bookings.length>0){
        for (var booking of responses[i]._embedded.bookings){
          if(booking.booth.capacity < this.state.partySize){
          tableMatch.push(1)
          this.setState({available: true})
        }

        if((booking.date === this.state.date) & (booking.timeSlot === this.state.time)){
            tableMatch.push(1)
          }
        }
      }

      if(tableMatch.length > 0){
        // http://localhost:8080/toggle_booth_availability/4
        this.setState({available: false});
      }else{
      this.setState({available: true});
    }

    };
  });
};

  render(){
    return(
      <>
      <TableForm onFormSubmit = {this.handleFormSubmit}/>

      <TableList data={this.state.data} available={this.state.available}/>
      </>
    );
  };
};


export default TableContainer;
