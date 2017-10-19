import React, { Component } from 'react';

class PylComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
          let soFocused = this.refs.focused.focus();
  }
  render() {
    console.log(this.props.selector)
    return (
      <div onKeyPress={this.props.handleBoardStop} className="row">
        <div className="row topRow">
          <button name="0" className="col-xs-2" ref={this.props.selector[0] ? "focused" : null} ></button>
          <button name="1" className="col-xs-2" ref={this.props.selector[1] ? "focused" : null} ></button>
          <button name="2" className="col-xs-2" ref={this.props.selector[2] ? "focused" : null} ></button>
          <button name="3" className="col-xs-2" ref={this.props.selector[3] ? "focused" : null} ></button>
          <button name="4" className="col-xs-2" ref={this.props.selector[4] ? "focused" : null} ></button>
          <button className="col-xs-2" ref={!this.props.boardOn ? "focused" : null}></button>
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