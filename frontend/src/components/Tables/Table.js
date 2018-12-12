import React, {Component} from 'react';

class Table extends Component {

  constructor(props){
    super(props);
    this.state = {
      available: true
    };
    // this.getAllBookings = this.getAllBookings.bind(this);
}

// getAllBookings(){
//   if(this.props.bookings>0){
//         for (var booking of this.props.bookings){
//           if(booking.booth.capacity < 4){
//           // tableMatch.push(1)
//           this.setState({available: false})
//         }
//       }

        // if((booking.date === "2018-12-11") & (booking.timeSlot === 5)){
        //     tableMatch.push(1)
        //   }
      //   }
      // }

      // if(tableMatch.length > 0){
      //   // http://localhost:8080/toggle_booth_availability/4
      //   this.setState({available: false});
      // }else{
      // this.setState({available: true});
    // }


render(){
  // this.getAllBookings()
    if(this.state.available===true){

    return(
      <button
        id = "table-button-green"
        className = "table-button"
        type = "submit">
        TABLE {this.props.id} (Seats {this.props.capacity})
      </button>
    )}else{;

    return(
      <button
        id = "table-button-red"
        className = "table-button"
        type = "button" disabled>
        TABLE {this.props.id} (Seats {this.props.capacity})
      </button>
    );
    };
  };
};

export default Table;
