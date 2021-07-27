import React from "react";
import helpers from "./helpers";
class Timer extends React.Component {
  render() {
    //const elapsedString = helpers.renderElapasedString(this.props.elapsed);
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="center aligned description">
            {/*elapsedString*/}elapsed string
          </div>
          <div className="extra content">
            <span className="right floated edit icon">
              <i className="edit icon"></i>
            </span>
            <span className="right floated edit icon">
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <div className="ui buttom attached blue basic button">Start</div>
      </div>
    );
  }
}
export default Timer;
