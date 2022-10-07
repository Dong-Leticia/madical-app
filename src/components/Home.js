import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import tish  from '../nurses/tish.jpg';
import {FaWhatsapp} from  'react-icons/fa'
import {FaPhone} from   'react-icons/fa'

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
          <h1>Online Medical Consultancy Services</h1>
        </div>
        <div className="ban">
          <div className="banner-1">
            <h2>
              CONNECT FACE TO FACE USING YOUR PHONE, TABLET OR <br />
              COMPUTER, 24/7.
            </h2>
            <p>
              Just like an in-person visit, the doctor takes your history and
              <br /> symptoms, performs an exam and may recommend treatment -{' '}
              <br />
              including prescriptions and lab work​
            </p>

            <div className="action">
              <p>Schedule online. It's easy, fast and secure.</p>
              <button className="btn-contain-2" onClick={() => '/'}>
               <a href="/bookappointment">Book an appointment</a> 
               
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
