import React from 'react'
import sahada from '../nurses/sahada.jpg'
import yaa from '../nurses/yaa.jpg'
import ivy from '../nurses/ivy.jpg'
import eva from '../nurses/eva.jpg'

function bookNutritionist() {

  return (
    

<div className="container">
        <div className="card">
          <p>Sahada</p>
          <img src={sahada} alt="not found" />
          <div className="textGroup">
            <h1>
                excellent service{" "}
            
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
          
          </div>
        </div>


        <div className="card">
          <p>Sadika</p>
          <img src={yaa} alt="not found" />
          <div className="textGroup">
            <h1>
              she is a nutritionist who have keep up with food and nutrition research for the past years
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
        
          </div>
        </div>


        <div className="card">
          <p>Adina</p>
          <img src={ivy} alt="not found" />
          <div className="textGroup">
            <h1>
              she is a nutritionist who has good listing skills
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
          
          </div>
        </div>


        <div className="card">
          <p>Leticia</p>
          <img src={eva} alt="no" />
          <div className="textGroup">
            <h1>
              she is a nutritionist who keep interest in the impact of diet on health
              {" "}
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              {" "}
              <a href="mailto:donleticia868@gmail.com">
                {" "}
                 send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
           
          </div>
        </div>

        </div>
 
  )
}

export default bookNutritionist