import React, {Component} from 'react';
import ReceiptList from '../components/Receipts/ReceiptList';
import Request from '../helpers/request';

class ReceiptContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {
          id:1,
          name: "Chateaubriand" ,
          price: 30
        },{
          name: "Pizza",
          price: 9
        },{
          id:3,
          name: "Baked Alaska",
          price: 8
        },{
          id:4,
          name: "Coke",
          price: 3
        },{
          id:5,
          name: "Sparkling Water",
          price: 2
        },
      ]}
};

componentDidMount(){
   let request = new Request()
   request.get('/api/receipts').then((data) => {
     this.setState({data:data._embedded.receipts});
   })
 }

  render(){
    return(
      <>
      <ReceiptList data={this.state.data}/>
      </>
    );
  };
};

export default ReceiptContainer;
