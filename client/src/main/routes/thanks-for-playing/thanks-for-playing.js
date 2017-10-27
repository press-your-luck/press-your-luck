import React, { Component } from 'react';
import Sound from "react-sound";
import {connect} from "react-redux";


class ThanksForPlaying extends Component {
    componentWillMount() {
        document.getElementById("board").id = "body";
    }

    render() {
        return (
            <div>
                <div className="goodnight-sweet-prince" ><h1 className="goodbye">THANKS FOR PLAYING!!!</h1></div>
                <img className="peter-tomarken-goodbye" src={require("../../../images/peter-tomarken.png")} alt="" />
                <Sound url={require("../../../Theme/Game Show Music - Press Your Luck Opening Theme (1983-1986).mp3")} playStatus={this.props.gameSounds.muted ? Sound.status.PAUSED : Sound.status.PLAYING} />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, {})(ThanksForPlaying);