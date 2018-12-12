import React, {Component} from 'react';
import Request from '../helpers/request';
import SingleBooking from '../components/Bookings/SingleBooking';

class SingleBookingContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      booking: null
    }

    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/bookings/' + this.props.id + '?projection=embedToBooking'
    request.get(url).then(data => {

      this.setState({booking: data})
    })

  }
  handleDelete(id){
    const url = '/api/bookings/' + id;
      let request = new Request()
      request.delete(url).then(()=>{
        window.location = '/bookings'
      })
  }

  render(){
    return(
      <>
        <SingleBooking booking ={this.state.booking} handlesDelete={this.handleDelete}/>
      </>
    )
  }
}

export default SingleBookingContainer;
