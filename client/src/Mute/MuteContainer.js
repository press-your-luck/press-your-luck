import React, { Component } from 'react';
import MuteComponent from "./MuteComponent";
import { connect } from "react-redux";
import { muteControl } from "../main/redux/actions/action";

class MuteContainer extends Component {
  handleMute = () => {
    this.props.muteControl()
        }
  render() {
    console.log(this.props.gameSounds)
    return (
      <div>
        <MuteComponent handleMute={this.handleMute} muteBoolean={this.props.gameSounds.muted}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { muteControl })(MuteContainer);