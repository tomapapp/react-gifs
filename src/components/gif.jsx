import React, { Component } from 'react';

class Gif extends Component {
  selectImg = () => {
    this.props.selectGif(this.props.id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e473c26262a85ed1d402b7a512f70c05befe37595fb&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.selectImg} />
    );
  }
}

export default Gif;
