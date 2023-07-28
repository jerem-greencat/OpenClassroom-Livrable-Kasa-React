import React from 'react';
import './App.css';
import Header from './Components/header';

function App() {
  return (
    <div>
      <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="#header-link-1"
        link2Text="A Propos"
        link2Url="#header-link-2"
      />
    </div>
  );
}

export default App;
