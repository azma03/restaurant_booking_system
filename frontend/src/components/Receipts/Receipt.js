import React from 'react';

class Receipt extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quantity:0
    };

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  };

  handleQuantityChange(event){
      this.setState({quantity: event.target.value});
    };

  render(){
      return(
      <>
        <tbody>
          <tr>
            <td>{this.props.item}</td>
            <td>{this.props.price}</td>
            <td><input
              type="number"
              value={this.state.quantity}
              onChange={(this.handleQuantityChange)}/>
            </td>
          </tr>
        </tbody>
      </>
    )
  };
};

export default Receipt;
