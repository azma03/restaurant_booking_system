import React from 'react';


const Booking = ({name, discount, time, table, partySize}) => {

    return(
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{time}</td>
          <td>{table}</td>
          <td>{partySize}</td>
        </tr>
      </tbody>
    );
  };

export default Booking;
