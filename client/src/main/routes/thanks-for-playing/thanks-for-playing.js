import React, { Component } from 'react';
import GameRoomContainer from "../gameroom/gameRoomContainer";
import Sound from "react-sound";
import {connect} from "react-redux";
import { resetJoinGameBoolean } from "../../redux/actions/action";
import { Redirect, Link } from "react-router-dom";
import { playAgain } from "../../redux/actions/action"


class ThanksForPlaying extends Component {
    componentWillMount() {
        document.body.id = "body";
    }
    handleEndGame = (id) => {
        this.props.resetJoinGameBoolean();
        this.props.playAgain(id);
        console.log("TEST")
    }
    render() {
        return (
            <div>
                <div className="goodnight-sweet-prince" >
                    <h1 className="goodbye">THANKS FOR PLAYING!!!</h1>
                </div>
                <h3 className="finalStats">You Won: ${this.props.player.money}!</h3>
                <img className="peter-tomarken-goodbye" src={require("../../../images/peter-tomarken.png")} alt="" />
                <div onClick={()=>{this.handleEndGame(this.props.gameId)}} className="playAgain"><Link to="/gameroom">Play Again?</Link></div>
                <Sound url={require("../../../Theme/Game Show Music - Press Your Luck Opening Theme (1983-1986).mp3")} playStatus={this.props.gameSounds.muted ? Sound.status.PAUSED : Sound.status.PLAYING} />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { playAgain, resetJoinGameBoolean })(ThanksForPlaying);