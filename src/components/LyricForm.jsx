import React from 'react';
import Footer from './Footer';

import { fetchlyrics } from '../services/api-helper';

export default class LyricForm extends React.Component {
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
      lyrics: lyrics
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {

    let lyrics = [];

    if (this.state.lyrics.length > 0) {
      lyrics = this.state.lyrics.split(/\r?\n/)
    }

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>Artist:
     <input
              type="text"
              name="artist"
              onChange={this.handleChange}></input>
          </label>

          <label>Song:
     <input
              type="text"
              name="song"
              onChange={this.handleChange}>
            </input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <div className="results">
          <h3>{this.state.lyrics.length > 0 ? this.state.song : ""}</h3>
          <h3>{this.state.lyrics.length > 0 ? this.state.artist : ""}</h3>
          <div className="lyricfooter">
            {
              lyrics.map((line, index) => (
                <p key={index}>{line}</p>
              ))
            }

          </div>
        </div>
      </div>
    )
  }
}