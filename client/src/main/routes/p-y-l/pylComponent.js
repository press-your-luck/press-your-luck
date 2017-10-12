import React, { Component } from 'react';

class PylComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="row topRow">
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
        </div>
        <div className="row secondRow">
          <button className="col-xs-2"></button>
          <button className="col-xs-2 col-xs-offset-8"></button>
        </div>
        <div className="row middleRow">
          <button className="col-xs-2"></button>
          <button className="col-xs-2 col-xs-offset-8"></button>
        </div>
        <div className="row fourthRow">
          <button className="col-xs-2"></button>
          <button className="col-xs-2 col-xs-offset-8"></button>
        </div>
        <div className="row bottomRow">
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
          <button className="col-xs-2"></button>
        </div>
      </div>
    );
  }
}

export default PylComponent;