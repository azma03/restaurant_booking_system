import React from 'react';


class Customer extends React.Component{
  render(){

    const tableData = this.props.data.map((customer) =>{
      return(
        <tbody key = {customer.id}>
        <tr>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>{customer.email}</td>
        <td>{customer.discount}</td>
        <td>{customer.visits}</td>
        <td>{customer.spend}</td>
        </tr>
        </tbody>
      );
    });

    return (
      <>
      {tableData}
      </>
    );
  };
};
export default Customer;
