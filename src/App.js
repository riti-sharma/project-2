import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Lyrics from './components/Lyrics'
import PicSection from './components/PicSection'
import LyricForm from './components/LyricForm'
import Home from './components/Home'
import Nav from './components/Nav'
import { Link, Route } from 'react-router-dom'


class App extends React.Component {
  render() {

    return (
      <div className="App" >
        <Nav />
        <Header />
        <main>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/lyrics" render={() => <LyricForm />} />
        </main>
      </div>
    );
  }
}

export default App;