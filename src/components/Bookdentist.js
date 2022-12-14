import React from 'react'
import adina from '../nurses/adina.jpg'
import hanah from '../nurses/hanah.jpg'
import milly from '../nurses/milly.jpg'
import sadika from '../nurses/sadika.jpg'
import { Link } from 'react-router-dom'

function bookDentist() {

  return (
    <>

    <h2>our dentist team</h2>
<div className='container'>

        <div className="card">
          <p>Dr.Bill</p>
          <img src={adina} alt="no" />
          <div className="textGroup">
            <h1>
                an expert in diverse dentistry issues
            
            </h1>
            <a href="tel:0551682482">Call Dr</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
               
              send mail
                 
              </a>
              <a href="Location:Danko"> Location: Accra</a>
              <a href="/bookform">book</a>
            </h4>
            
          </div>
        </div>

  

        <div className="card">
          <p>Dr.Milad</p>
          <img src={hanah} alt="no" />
          <div className="textGroup">
            <h1>
             he is passionate abaut providing care to those in need  
            
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
           
              <a href="mailto:donleticia868@gmail.com">
            
                sand mail
                 
              </a>
              <a href="Location:Danko"> Location: Tema</a>
              <a href="/bookform">book</a>
            </h4>
            
          </div>
        </div>

  

        <div className="card">
          <p>Dr.Michael</p>
          <img src={milly} alt="no" />
          <div className="textGroup">
            <h1>
              patience information are always confidential so far she is concerned
            
            </h1>
            <a href="tel:045337373525">Contact: 0508223390</a>
            <h4>
            
              <a href="mailto:donleticia868@gmail.com">
              
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Techiman</a>
              <a href="/bookform">book</a>
            </h4>
            
          </div>
        </div>


        <div className="card">
          <p>Dr.Kevin</p>
          <img src={sadika} alt="no" />
          <div className="textGroup">
            <h1>
              Are you looking for the best a dentist? you are in the right
              place{" "}
            </h1>
            <a href="tel:045337373525">Contact: 0240729999 </a>
            <h4>
            
              <a href="mailto:donleticia868@gmail.com">
              
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Tumu</a>
              <a href="/bookform">book</a>
            </h4>
            
          </div>
        </div>

        </div>
      
        <button> <Link to="/bookform"> book</Link> </button>
        </>
  )
}

export default bookDentist