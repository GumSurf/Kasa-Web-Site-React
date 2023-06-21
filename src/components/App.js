import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import About from './About';
import NotFound from './NotFound';
import ApartmentDetails from './ApartmentDetails';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/details_appartement/:id" element={<ApartmentDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;