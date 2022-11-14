import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer1 from './components/footer1/Footer1'
import Footer2 from './components/footer2/Footer2'
import MetaBnb from './components/metaBnb/MetaBnb'
import Inspire from './components/inspire/Inspire';
import './index.css';



function App() {
  return (
    <div>
     <Header />
      <Home />
      <Footer1 />
      <Inspire />
      <MetaBnb />
      <Footer2 />
    </div>
  );
}

export default App;
