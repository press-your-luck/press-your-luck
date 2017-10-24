import React, { Component } from 'react';

class MuteComponent extends Component {
  render() {
    return (
      !this.props.muteBoolean ? 
        <img onClick={this.props.handleMute} src={require("../images/iconmonstr-audio-1-240.png")} className="volumeIcon" alt="Volume On"/>
        :
        <img onClick={this.props.handleMute} src={require("../images/iconmonstr-audio-11-240.png")} className="volumeIcon" alt="Volume Off"/>
    );
  }
}

export default MuteComponent;