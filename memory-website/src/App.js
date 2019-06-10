import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import GameWrapper from './Components/PictureGame/GameWrapper';
import WordGameWrapper from './Components/WordGame/WordGameWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
  <Route path="/" component={Header} />
  <Route path="/picture_game" component={GameWrapper} />
  <Route path="/word_game" component={WordGameWrapper} />
    </div>
  );
}

export default App;