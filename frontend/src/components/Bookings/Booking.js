import React from 'react';
import { Link } from 'react-router-dom'

const Booking = ({name, discount, time, table, partySize, id}) => {

    return(
      <tbody>
        <tr>
          <td><Link to={'/bookings/' + id}
      className="name">{name}
      </Link></td>
          <td>{time}</td>
          <td>{table}</td>
          <td>{partySize}</td>
        </tr>
      </tbody>
    );
  };

export default Booking;
