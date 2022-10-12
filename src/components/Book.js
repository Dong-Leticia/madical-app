import React from 'react';
// import {Link} from 'react-router-dom';
import BookDentist from '../components/Bookdentist';
import BookDoctor from '../components/Bookdoctor';
import BookNurse from '../components/Booknurse';
import BookNutritionist from '../components/Booknutritionist';
import NavBar from './NavBar';
function Book() {
  return (
    <div>
      <NavBar/>
<h2>make an appointment with our trusted professionals</h2>
<BookDentist/>
<BookDoctor/>
<BookNurse/>
<BookNutritionist/>



{/* <ul>
    <li> <Link to="./Bookdoctor">doctors</Link> </li>
    <li> <Link>nurses</Link> </li>
    <li> <Link>dentist</Link> </li>
    <li> <Link>nutritionist</Link> </li>

</ul> */}
    </div>
  )
}

export default Book