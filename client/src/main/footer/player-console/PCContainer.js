import React, { Component } from 'react';
import PCComponent from "./PCComponent";
import { connect } from "react-redux";

class PCContainer extends Component {
  // genPlayers = () => {
  //   return this.props.users.map((player)=>{
  //     <PCComponent player={player} key={player._id} />
  //   })
  // }
  render() {
    return (
      <PCComponent user={this.props.user} spins={this.props.player.spins} money={this.props.player.money}/>
      );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(PCContainer);