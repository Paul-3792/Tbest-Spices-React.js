import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Header from "./components/Header";
import About from "./components/About";
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Spices from './components/Products';
import Products from './components/Products';



function App() {
  return (
    <div className="container-fluid">
      <Header />
      <About />
      <Products />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
