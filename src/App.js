import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './screen/Login';
import Register from './screen/Register';


import About from './components/Partners';
import MedicalTeam from './components/MedicalTeam';
import MedicalConsult from './components/MedicalConsult';
import DrugDelivery from './components/DrugDelivery';
import LabServices from './components/LabServices';
import DoctorLogin from './components/DoctorLogin';
import TeamsUse from './components/TeamsUse';
import PrivacyPractice from './components/PrivacyPractice';
import Contact from './components/Contact';
import Bookdoctor from './components/Bookdoctor';
import Booknurse from './components/Booknurse';
import Bookdentist from './components/Bookdentist';
import Booknutritionist from './components/Booknutritionist';
import Book from './components/Book';
import Bookform from './components/Bookform';

function App() {
  return (
  <>
 
      <div className="app">
        
        <Routes>
        
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medicalteam" element={<MedicalTeam />} />
          <Route path="/medicalconsult" element={<MedicalConsult />} />
          <Route path="/drugDelivery" element={<DrugDelivery />} />
          <Route path="/labServices" element={<LabServices />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
          <Route path="/teamsuse" element={<TeamsUse />} />
          <Route path="/privacypractice" element={<PrivacyPractice />} />
          <Route path="/bookdoctor" element={<Bookdoctor/>} />
          <Route path="/booknurse" element={<Booknurse />} />
          <Route path="/bookdentist" element={<Bookdentist />} />
          <Route path="/booknutritionist" element={<Booknutritionist />} />
          <Route path="/bookappointment" element={<Book />} />
          <Route path="/bookform" element={<Bookform />} />
        
        </Routes>
      </div>
      </>
    
  )
}

export default App
