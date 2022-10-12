import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import {GrFacebook} from 'react-icons/gr'


function Contact() {
    return (
      <section>
      <NavBar />
      <div>

        <div className="banner-2">
          <div>
         
          <a href="https://wa.me/0551682482" target="_blank" rel="noreferrer">WhatsApp Us  <FaWhatsappSquare/></a>
          </div>
          <div>
          <FiPhoneCall/> 
          <a href="tel:02002020202">Mobile. +233 (0) 246-189-123</a>
          
          </div>
          <div>
            <SiGmail/>
          <a href="mailto:naeemsamsideen618@gmail.com">send us a mail</a>
          </div>
<div>
  <GrFacebook/>
  <a href="">follow us on facebook</a>
</div>

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
                Book an appointment
              </button>
            </div>
          </div>

          <div className="actions-wrap">
            <img src="pics/1.png" alt="images" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact