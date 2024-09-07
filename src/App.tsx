import React from 'react';
import Navbar from './components/ui/Navbar';
import Home from './components/ui/Home';
import AboutUs from './components/ui/About';
import Structures from './components/ui/structure/Structure-new';
import { Blog } from './components/ui/Blog';
import Contact from './components/ui/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <AboutUs />
      <Structures />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
