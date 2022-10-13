import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Bookform() {
  return (
    <>
<NavBar/>
    <form>

<div className='book'>
    <label htmlFor="name">Name
    <input type="text" />
    </label>
    <label htmlFor="location">Location
    <input type="text" />
    </label>
    <label htmlFor="contact">contact
    <input type="text" />
    </label>
    <label htmlFor="services">Type of service needed
    <input type="text" />
    </label>
</div>

<button><Link> click to send booking</Link> </button>
    </form>
    </>
  )
}

export default Bookform