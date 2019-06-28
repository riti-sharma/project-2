import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Lyrics from './components/Lyrics'
import LyricForm from './components/LyricForm'
import { fetchlyrics } from './services/api-helper';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios'
import { async } from 'q';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: [],
      artist: '',
      song: ''
    }
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    const lyrics = await fetchlyrics(this.state.artist, this.state.song);
    this.setState({
      lyrics: [lyrics]
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Lyrics />
        <LyricForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          songInfo={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
