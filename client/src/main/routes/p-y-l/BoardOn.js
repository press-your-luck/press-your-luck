import React from "react";
import Sound from "react-sound";

class BoardOn extends React.Component {
  constructor() {
    let board
  }
  render() {
    return <Sound url={"http://www.qwizx.com/gssfx/usa/pylbord2.wav"} playStatus={Sound.status.PLAYING} />
  }
}

export default BoardOn