import React from 'react';
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
      lyrics: [<br />, this.state.song, <br />, this.state.artist, <br />, <br />, lyrics]
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {

    let lyrics;
    if (this.state.lyrics.length > 0) {
      lyrics = this.state.lyrics[1].split(/\r?\n/g)
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
          <p>{this.state.lyrics}</p>
        </div>
      </div>
    )
  }
}