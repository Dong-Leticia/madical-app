import React from 'react'
import leti from '../nurses/leti.jpg'
import diva from '../nurses/diva.jpg'
import joe from '../nurses/joe.jpg'
import mama from '../nurses/mama.jpg'
import orisin from '../nurses/orisin.jpg'

function bookDoctor() {

  return (
 
    

<div className="container">
\
        <div className="card">
            <p>Dr.Alfred</p>
          <img src={diva} alt="no" />
          <div className="textGroup">
            <h1>
                he is eyes specialish and has been working over 6yrs{" "}
            
            </h1>
            <a href="tel:045337373525">Contact: 0551682482</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
                
              send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
           
          </div>
        </div>

    
        <div className="card">
          <p>Dr.evans</p>
          <img src={leti} alt="no" />
          <div className="textGroup">
            <h1>
              he is a specialist in surgery and he is been working for the past 4yrs
              
            </h1>
            <a href="tel:045337373525">Contact: 0243804831</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
                
                 send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            
          </div>
        </div>

    
        <div className="card">
          <p>Dr.Benjamin</p>
          <img src={joe} alt="no" />
          <div className="textGroup">
            <h1>
             he is a professional doctor and has more experice on how to take care of patients
              
            </h1>
            <a href="tel:045337373525">Contact: 0242091952</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
                
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            
          </div>
        </div>

    
        <div className="card">
          <p>Dr.William</p>
          <img src={mama} alt="no" />
          <div className="textGroup">
            <h1>
             he is good communicator 
              
            </h1>
            <a href="tel:045337373525">Contact: 0554828875</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
                
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            
          </div>
        </div>

    
        <div className="card">
          <p>Dr.Betren</p>
          <img src={orisin} alt="no" />
          <div className="textGroup">
            <h1>
              Are you looking for the best doctor? you are in the right
              place{" "}
            </h1>
            <a href="tel:045337373525">Contact: 0555871090</a>
            <h4>
              
              <a href="mailto:donleticia868@gmail.com">
                
                send mail
                 
              </a>
              <a href="Location:Danko"> Location: Danko</a>
              
            </h4>
            
          </div>
        </div>

    </div>
  
    
            
  )
}

export default bookDoctor