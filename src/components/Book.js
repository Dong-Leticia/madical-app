// import React from 'react';
// // import {Link} from 'react-router-dom';
 import BookDentist from '../components/Bookdentist';
import BookDoctor from '../components/Bookdoctor';
import BookNurse from '../components/Booknurse';
 import BookNutritionist from '../components/Booknutritionist';
// import NavBar from './NavBar';
// function Book() {
//   return (-
//     <div>
//       <NavBar/>

// <BookDentist/>
// <BookDoctor/>
// <BookNurse/>
// <BookNutritionist/>




//     </div>
//   )
// }

// export default Book


import React from 'react'

function Book() {
  return (
    <div>

      <BookDentist/>
      <BookDoctor/>
      <BookNutritionist/>
      <BookNurse/>
    </div>
  )
}

export default Book