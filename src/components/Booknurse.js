import React from 'react'
import tish from '../nurses/tish.jpg'
import peter from '../nurses/peter.jpg'
import leti from '../nurses/leti.jpg'
import frank from '../nurses/frank.jpg'
function bookNurse() {

  return (
    
<>
<div className="container">
        <div className="card">
          <p>Eva</p>
          <img src={tish} alt="no" />
          <div className="textGroup">
            <h1>
                she is a nurse who has been working in the hospital for so more years now{" "}
            
            </h1>
            <a href="tel:045337373525">Contact: 0247016149</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
              we have good communication skills
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          <p>Jecob</p>
          <img src={peter} alt="no" />
          <div className="textGroup">
            <h1>
              he is very welcoming and has much experience so far as health is concerned
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0249592887</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
             
            </h4>
            <p>
              we pay attention to details
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          
          <img src={leti} alt="no" />
          <div className="textGroup">
            <h1>
             he has been in the field for over three years now
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0594366715</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                Email:donleticia868@gmail.com
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            <p>
              we have nurses who have high level of respect,caring,kindness and emotional stability
              
            </p>
          </div>
        </div>

    </div>
<div className="container">
        <div className="card">
          <p>Ramila</p>
          <img src={frank} alt="no" />
          <div className="textGroup">
            <h1>
              she is always ready to give out her best anytime duty calls
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
              we have nurrses who have patience,empathy,compassion.
              
            </p>
          </div>
        </div>

        </div>
    </>
  )
}

export default bookNurse