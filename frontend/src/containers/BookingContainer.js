import React from 'react';
import BookingList from '../components/Bookings/BookingList';
import BookingDateSelector from '../components/Bookings/BookingDateSelector';
import Request from '../helpers/request.js';
import BookingForm from '../components/Bookings/BookingForm';

class BookingContainer extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     currentDate: null,
     data:[],
     customerData:[],
     tableData:[],
     updatedTableData:[]
   };
   this.handleDateSelected = this.handleDateSelected.bind(this);
   this.handleFormSubmit = this.handleFormSubmit.bind(this);
   this.updateTableDataByCapacity = this.updateTableDataByCapacity.bind(this);
   this.updateTableDataByTime = this.updateTableDataByTime.bind(this);
   this.updateTableDataByDate = this.updateTableDataByDate.bind(this);
 };

handleDateSelected(selectedDate){
 this.setState({currentDate: selectedDate})
};

componentDidMount(){
  let request2 = new Request()
  request2.get('/api/bookings').then((bookingData) => {
    this.setState({data:bookingData._embedded.bookings});
  })
  let request = new Request()
  request.get('/api/customers').then((data1) => {
    this.setState({customerData:data1._embedded.customers});
  })
  let request3 = new Request()
  request3.get('/api/booths').then((data2) => {
    this.setState({tableData:data2._embedded.booths});
  })
}



handleFormSubmit(booking){
  debugger;
  const request = new Request();
 request.post('/api/bookings', booking).then(()=>{
   window.location = '/api/bookings'
 })

}

checkTableAvailability(){


}

updateTableDataByCapacity(partySize){
  console.log("from updateTableDataByCapacity");
  // debugger;
  let tables = this.state.tableData;
  for (let i= tables.length-1; i>=0; i--){
    console.log("current table" + tables[i])
    if(tables[i].capacity < partySize){
      console.log(tables[i])
      //remove table from tables array
      tables.splice(i, 1);
    }
    console.log("tables after loop iteration" + tables)
  }
  this.setState({updatedTableData: tables});
}

updateTableDataByTime(bookingTime){
  console.log("from updateTableDataByTime");
  // debugger;
  let tables = this.state.updatedTableData;
  for (let i= tables.length-1; i>=0; i--){
    console.log("current table" + tables[i])
      debugger;
    for (let j = tables[i].bookings.length-1; j>=0; j--){
      if(tables[i].bookings[j].timeSlotValue == bookingTime){
        console.log(tables[i])
        //remove table from tables array
        tables.splice(i, 1);
      }
      console.log("tables after loop iteration" + tables)
    }
  }
  this.setState({updatedTableData: tables});
}

updateTableDataByDate(bookingDate){
  console.log("from updateTableDataByDate");
  // debugger;
  let tables = this.state.updatedTableData;
  for (let i= tables.length-1; i>=0; i--){
    console.log("current table" + tables[i])
      debugger;
    for (let j = tables[i].bookings.length-1; j>=0; j--){
      if(tables[i].bookings[j].dateValue == bookingDate){
        console.log(tables[i])
        //remove table from tables array
        tables.splice(i, 1);
      }
      console.log("tables after loop iteration" + tables)
    }
  }
  this.setState({updatedTableData: tables});
}

 render(){
   return(
     <>
     <BookingDateSelector bookings={this.state.data} onDateSelected={this.handleDateSelected}/>
     <BookingList data={this.state.data} filterDate={this.state.currentDate}/>
     <BookingForm onFormSubmit={this.handleFormSubmit} customerData = {this.state.customerData}
     tableData={this.state.updatedTableData} onPartySizeInput={this.updateTableDataByCapacity}
     onBookingTimeInput={this.updateTableDataByTime} onBookingDateInput={this.updateTableDataByDate}/>
     </>
   );
 };
};

export default BookingContainer;
