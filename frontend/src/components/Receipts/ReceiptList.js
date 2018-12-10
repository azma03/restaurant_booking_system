import React from 'react';
import Receipt from '../Receipts/Receipt';

class ReceiptList extends React.Component {
  render(){

  const receiptDetails = this.props.data.map((receipt) =>{
      return (
        <Receipt key={receipt.id}
        id={receipt.id}
        item={receipt.name}
        price={receipt.price}>

        </Receipt>
      );
    });

      return(
        <>
        <h2>Receipt</h2>
        <table>
          <tbody>
          <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          </tr>
          </tbody>
          {receiptDetails}
        </table>
        </>
      )
    };
  };

  export default ReceiptList;
