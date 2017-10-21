import React, { Component } from 'react';
import Sound from "react-sound";

class BuzzIn extends Component {
    render() {
        return (
            <div>
             <Sound url={"http://www.qwizx.com/gssfx/usa/pyl-buzz-in.wav"} playStatus={Sound.status.PLAYING} />
            </div>
        );
    }
}

export default BuzzIn;