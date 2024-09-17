import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <div>
      <main>
        <Routes>
          <Route path='/jk-studio/' element={<Home />} />
          <Route path='/jk-studio/about' element={<About />} />
          <Route path='/jk-studio/offer' element={<Offer />} />
          <Route path='/jk-studio/blog' element={<Blog />} />
          <Route path='/jk-studio/gallery' element={<Gallery />} />
          <Route path='/jk-studio/contact' element={<Contact />} />
          <Route path='/jk-studio/article/:id' element={<Article />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
