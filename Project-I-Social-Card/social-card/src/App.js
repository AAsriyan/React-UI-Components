import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className='app'>
      <HeaderContainer />
      <div className="card-container">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><CardContainer /></a>
      </div>
      <Footer />
    </div>
  );
};

export default App;
