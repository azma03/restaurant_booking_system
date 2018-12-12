import React, {Component} from 'react';
import SingleCustomer from '../components/Customers/SingleCustomer';
import Request from '../helpers/request';

class SingleCustomerContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      customer: null,
      totalSpend: "",
      visitCount: "",
      discountLevel: ""
    }

    this.handlesDelete = this.handlesDelete.bind(this);
    this.totalSpendings = this.totalSpendings.bind(this);
    this.totalVisits = this.totalVisits.bind(this);
    this.discountLevel = this.discountLevel.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/customers/' + this.props.id + '?projection=embedToCustomer'
    request.get(url).then(data => {
      this.setState({customer: data})
    })
    this.totalSpendings();
    this.totalVisits();
    this.discountLevel();
  }

  handlesDelete(id){
    const url = '/api/customers/' + id;
      let request = new Request()
      request.delete(url).then(()=>{
        window.location = '/customers'
      })
  }

  totalSpendings(){
     let request1 = new Request()
     request1.get('/api/customers/1/totalSpendings').then((data) => {
       this.setState({totalSpend: data})
     })
   }

   totalVisits(){
      let request2 = new Request()
      request2.get('/api/customers/1/visitCount').then((data) => {
        this.setState({visitCount: data})
      })
    }

   discountLevel(){
      let visits = this.state.visitCount;
      if(visits>10){
        this.setState({discountLevel: "gold"})
      }else if(visits>5){
        this.setState({discountLevel: "silver"})
      }else{
       this.setState({discountLevel: "bronze"})
      }
     }

  render(){
    return(
    <SingleCustomer customer={this.state.customer}
    discountLevel={this.state.discountLevel}
    totalVisits={this.state.totalVisits}
    totalSpendings={this.state.totalSpendings}
    handleDelete={this.handlesDelete}/>
    )
  }
}

export default SingleCustomerContainer;
