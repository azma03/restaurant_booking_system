import React from 'react';
import { Link } from 'react-router-dom'


const Customer = ({name, phone, email, discount, visits, spend, id}) => {

    return(
      <tbody>
        <tr>
          <td>
          <Link to={'/customers/' + id}
      className="name">{name}
      </Link></td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{discount}</td>
          <td>{visits}</td>
          <td>{spend}</td>
        </tr>
      </tbody>
    );
  };




export default Customer;
