import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div className='app'>
      <HeaderContainer />
      <div className="card-container">
        <a href="https://reactjs.org" target="_blank"><CardContainer /></a>
      </div>
    </div>
  );
};

export default App;
