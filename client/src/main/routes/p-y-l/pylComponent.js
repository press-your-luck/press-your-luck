import React, { Component } from 'react';

class PylComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="row topRow">
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
        </div>
        <div className="row secondRow">
          <div className="col-xs-2"></div>
          <div className="col-xs-2 col-xs-offset-8"></div>
        </div>
        <div className="row middleRow">
          <div className="col-xs-2"></div>
          <div className="col-xs-2 col-xs-offset-8"></div>
        </div>
        <div className="row fourthRow">
          <div className="col-xs-2"></div>
          <div className="col-xs-2 col-xs-offset-8"></div>
        </div>
        <div className="row bottomRow">
        <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-2"></div>
        </div>
      </div>
    );
  }
}

export default PylComponent;