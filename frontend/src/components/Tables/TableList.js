import React from 'react';
import Table from '../Tables/Table';


const TableList = (props) => {

    const tableDetails = props.data.map((table) =>{
        return (
          <Table key={table.id}
            id={table.id}
            restaurant_id={table.restaurant_id}
            bookings={table.bookings}
            capacity={table.capacity}
            available={table.available}>
          </Table>
        );
      });

    return(
      <>
        {tableDetails}
      </>
    );
  };

export default TableList;
