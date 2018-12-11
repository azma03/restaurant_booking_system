import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

class SingleCustomer extends Component {
  constructor(props){
    super(props);

    this.state ={
      totalSpend: "",
      visitCount: "",
      discountLevel: ""
    }

    this.onDelete = this.onDelete.bind(this);
    this.totalSpendings = this.totalSpendings.bind(this);
    this.totalVisits = this.totalVisits.bind(this);
    this.discountLevel = this.discountLevel.bind(this);

  }

  componentDidMount(){

  }

 onDelete(){
   this.props.handleDelete(this.props.customer.id)
 }

 totalSpendings(){
   // let totalSpend;
    let request1 = new Request()
    request1.get('api/customers/'+ this.props.customer.id + '/totalSpendings').then((data) => {
      this.setState({totalSpend: data})
      // return totalSpend;
    })
  }

  totalVisits(){
    // let visitCount;
     let request2 = new Request()
     request2.get('api/customers/'+ this.props.customer.id + '/visitCount').then((data) => {
       this.setState({visitCount: data})
       // return visitCount;
     })
   }

  discountLevel(){
     // let visits = totalVisits();
     let visits = this.state.visitCount;
     if(visits>10){
       this.setState({discountLevel: "gold"})
       // discountLevel = "gold"
     }else if(visits>5){
       this.setState({discountLevel: "silver"})
     }else{
      this.setState({discountLevel: "bronze"})
     }
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
      <p>Discount: {this.state.discountLevel}</p>
      <p>Total Visit: {this.state.totalVisits}</p>
      <p>Total Spend: {this.state.totalSpendings}</p>
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
