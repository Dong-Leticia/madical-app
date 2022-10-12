
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ema from '../drugs/ema.jpg'
import fred from '../drugs/fred.jpg'
import saver from '../drugs/saver.webp'
import ulcer from '../drugs/ulcer.jpg'

function DrugDelivery() {
  return (

    <section>
      <NavBar/>
    <div>
        <div className='banner-2'>
          
          
        
</div>
        
    <div className='banner'>
          <h1>Deliver Medicine At Your Doorstep</h1>
          </div>
<div className='van'>
        <div className='van-1'>
                      <h2>WE DELIVER MEDICINE AT YOUR DOORSTEP</h2>
                      <hr/>
    </div>
              
           <div className='van-wrap'>
                  
        <img src="pics/van.jpg" alt="images"/>
                      <p>You can now order your prescription drugs from anywhere and it will be delivered to your your location after<br/>
                    booking with us below.</p>
          </div>


          <div className="container">
        <div className="card">
          <img src={ema} alt="no" />
          <div className="textGroup">
            <h1>
                {" "}
            
            </h1>
            <a href="tel:045337373525">Contact: 0248381953</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
             
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          <img src={fred} alt="no" />
          <div className="textGroup">
            <h1>
               
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
              
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          <img src={saver} alt="no" />
          <div className="textGroup">
            <h1>
              
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0508223390</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
              
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          <img src={ulcer} alt="no" />
          <div className="textGroup">
            <h1>
              
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0240729999 </a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
    
              
            </p>
          </div>
        </div>

        </div>

       <div className="vann">
<p>Schedule online. It's easy, fast and secure.</p>   
<button className='btn-contain' onClick={() => ("/")}>Book A Drug Delivery appointment</button>     
        </div>
    <hr/>
    
    </div>
    
    </div> 
  <Footer/>
   </section>
    
  )
}

export default DrugDelivery