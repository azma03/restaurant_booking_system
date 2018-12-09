import React from 'react';
import TableList from '../components/Tables/TableList';

class TableContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{
        id:1,
        restaurant_id:1,
        bookings:[],
        capacity:4,
        available:false
      },
      {
        id:2,
        restaurant_id:1,
        bookings:[],
        capacity:2,
        available:true
      }]
    };
  };
  render(){
    return(
      <>
      <TableList data={this.state.data}/>
      </>
    );
  };
};

export default TableContainer;
