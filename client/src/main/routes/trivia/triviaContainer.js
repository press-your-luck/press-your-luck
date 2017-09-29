import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import { loadQuestion } from "../../redux/actions/action.js";
import { connect } from "react-redux";

class TriviaContainer extends Component {
  componentWillMount(){
    this.props.loadQuestion()
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <TriviaComponent question={this.props.currentQuestion} />
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps, { loadQuestion })(TriviaContainer);