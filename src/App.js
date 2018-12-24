import React, { Component } from 'react';

// background tile
import tile from './assets/carbon.png';

// elems
import Header from './components/header';
import LetterReference from './components/letterReference';
import WordInput from './components/wordInput';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${tile})`}}>
        <Header/>
        <LetterReference/>
        <WordInput/>
        <Counter/>
      </div>
    );
  }
}

export default App;
