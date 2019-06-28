import React from 'react';

export default class LyricForm extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    console.log(this.props)
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <label>Artist:
          <input
              type="text"
              name="artist"
              value={this.props.songInfo.artist}
              onChange={this.props.handleChange}></input>
          </label>

          <label>Song:
          <input
              type="text"
              name="song"
              value={this.props.songInfo.song}
              onChange={this.props.handleChange}>
            </input>
          </label>
          <input type="submit" value="submit"></input>

        </form>

      </div>
    )
  }
}
