import { Link } from 'react-router-dom'
import React  from 'react'
import {FaSignOutAlt} from 'react-icons/fa'



function NavBar() {

  
 
  return (
    <nav>
      <div className='sec'>
        <div className='nav-11'>
        <Link className='nav-0' to="/Login"></Link>
      </div>
        <div className='nav-11'>
          <Link to="/login">Login</Link>
      </div>
      
    </div>
      <h2>Logo</h2>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <div class="dropdown">
    <li><Link to="/about">About Us </Link>  
     
    </li>
    <div class="dropdown-content">
            <Link to="/about">Our Partners</Link>
            <Link to="/medicalteam">Our Medical Team</Link>
            <Link to="/contact">Contact</Link>
    </div>
  </div>   
       
        <div class="dropdown">
    <li><Link> Online Services</Link>  
     
    </li>
          <div class="dropdown-content">
            <Link to="/medicalconsult">Online Medical Consultation</Link>
            <Link to="/DrugDelivery">Drug Delivery Services</Link>
            <Link to="/LabServices">Lab Services</Link>
      
    </div>
  </div> 
        <li><Link to="/DoctorLogin">Doctor's Login</Link></li>
      
      
  
      <i class="fa fa-caret-down"></i>
 
         <ul>
           <li> <Link to="/contact">Contact</Link></li>
            </ul>
  
 <div> <Link to="/"><FaSignOutAlt/></Link>    </div>
      </ul>
      
    </nav>
  )
 
}


export default NavBar
