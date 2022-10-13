import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import tish  from '../nurses/tish.jpg';
import {FaWhatsapp} from  'react-icons/fa';
import {FaPhone} from   'react-icons/fa';
import {Link} from "react-router-dom";

function Home() {
  return (
    <section>
      <NavBar />
      <div>
        <div className="banner-2">
          <a href="tel:0551682482">
            <FaWhatsapp/>
          </a>
         
          
        </div>
 <div className="banner-2">

 <a href="tel:0551682482">
          <FaPhone/>
          </a>
 </div>
        <div className="banner">
          <h1>ONLINE MEDICAL CONSULTANCY SERVICES</h1>
        </div>
        <div className="ban">
          <div className="banner-1">
            <h4>
              CONNECT FACE TO FACE USING    <br />YOUR PHONE, TABLET OR <br />
              COMPUTER, 24/7.
            </h4>
            <p>
              Just like an in-person visit, the doctor takes your history and
              <br /> symptoms, performs an exam and may recommend treatment -{' '}
              <br />
              including prescriptions and lab work​
            </p>

            <div className="action">
              <p>Schedule  an online, It's easy and secure.</p>
              <button className="btn-contain-2" onClick={() => '/'}>
               <Link to="/bookappointment">Book an appointment</Link> 
               
              </button>
            </div>
          </div>

          <div className="actions-wrap">
            <img className='image' src= {tish} alt="no" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Home
