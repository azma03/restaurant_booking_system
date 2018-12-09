import React from 'react';


const Customer = ({name, phone, email, discount, visits, spend}) => {

    return(
      <tbody>
        <tr>
          <td>{name}</td>
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
