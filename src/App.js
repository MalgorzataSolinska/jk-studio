import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import About from './screens/About';
import Offer from './screens/Offer';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Contact from './screens/Contact';
import Blog from './screens/Blog';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {
  return (
    <Router basename='/jk-studio'>
      <div>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/article/:id' element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
