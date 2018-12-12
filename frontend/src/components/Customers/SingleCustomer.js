import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helpers/request.js';

class SingleCustomer extends Component {
  constructor(props){
    super(props);

    this.state ={
      totalSpend: "",
      visitCount: "",
      discountLevel: ""
    }

    this.onDelete = this.onDelete.bind(this);
    // this.totalSpendings = this.totalSpendings.bind(this);
    // this.totalVisits = this.totalVisits.bind(this);
    // this.discountLevel = this.discountLevel.bind(this);

  }

  // componentDidMount(){
  //   this.totalSpendings();
  //   this.totalVisits();
  //   this.discountLevel();
  // }

 onDelete(){
   this.props.handleDelete(this.props.customer.id)
 }

 // totalSpendings(){
 //    let request1 = new Request()
 //    request1.get('api/customers/1/totalSpendings').then((data) => {
 //      this.setState({totalSpend: data})
 //    })
 //  }
 //
 //  totalVisits(){
 //     let request2 = new Request()
 //     request2.get('api/customers/1/visitCount').then((data) => {
 //       this.setState({visitCount: data})
 //     })
 //   }
 //
 //  discountLevel(){
 //     let visits = this.state.visitCount;
 //     if(visits>10){
 //       this.setState({discountLevel: "gold"})
 //     }else if(visits>5){
 //       this.setState({discountLevel: "silver"})
 //     }else{
 //      this.setState({discountLevel: "bronze"})
 //     }
 //    }

 getTotalSpendings(){
   let total = 0;
   for (let booking of this.props.customer.bookings){
     total += booking.receiptTotal;
       // debugger;
   }

   return total;
 }

render(){

  if(!this.props.customer){
    return null;
  }


  const bookings = this.props.customer.bookings.map((booking, index) => {
    return <li key={index}>{booking.date}</li>
  })

  return (
    <div className="component">
      <p>Name: {this.props.customer.name}</p>
      <p>Phone: {this.props.customer.phone}</p>
      <p>Email: {this.props.customer.email}</p>
      <p>Discount: {this.props.customer.discount}</p>
      <p>Total Visit: {this.props.customer.bookings.length}</p>
      <p>Total Spend: {this.getTotalSpendings()}</p>
      Bookings:
      <ul>
      {bookings}
      </ul>
      <button onClick={this.onDelete}>Delete Customer</button>

      <Link to={'/customers/update/' + this.props.customer.id}>
      <button>Update Customer</button></Link>
    </div>
  )
}

}

export default SingleCustomer;
