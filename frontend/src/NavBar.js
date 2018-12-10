import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
 return (
   <header>


     <ul>
       <li className="navLink">
         <Link to="/customers">Customers</Link>
       </li>
       <li className="navLink">
         <Link to="/bookings">Bookings</Link>
       </li>
       <li className="navLink">
         <Link to="/booths">Tables</Link>
       </li>
       <li className="navLink">
         <Link to="/receipts" >Order</Link>
       </li>
     </ul>
   </header>
 )
}

export default NavBar;
