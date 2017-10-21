import React from "react";
import Sound from "react-sound";

class BoardOn extends React.Component {
  render() {
    return <Sound url={"http://www.qwizx.com/gssfx/usa/pylbord2.wav"} playStatus={Sound.status.PLAYING} />
  }
}

export default BoardOn