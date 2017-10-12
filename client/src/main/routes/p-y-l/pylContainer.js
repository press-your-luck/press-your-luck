import React, { Component } from 'react';
import PylComponent from "./pylComponent"

class PylContainer extends Component {
  render() {
    return (
      <div className="container">
        <PylComponent />
        <div className="centerConsole">
         <img onClick={()=>{alert("working")}} className="logo" src={require("../../../images/board.jpg")} alt=""/>
         </div>
      </div>
    );
  }
}

export default PylContainer;