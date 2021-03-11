import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Contacts />} />
          <Route path='/addcontact' element={<AddContact />} />
          <Route path='/editcontact/:id' element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteConfig;
