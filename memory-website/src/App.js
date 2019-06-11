import React from 'react';
import Header from './Components/Header/Header';
import ContentWrapper from './Components/Content/ContentWrapper';
import SocialMedia from './Components/Icons/SocialMedia';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContentWrapper></ContentWrapper>
      <SocialMedia></SocialMedia>
      <Footer />
    </div>
  );
}

export default App;