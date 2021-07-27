import React from "react";
class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? "update" : "create";
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={this.props.title}></input>
            </div>
            <div className="field">
              <label>Projects</label>
              <input type="text" defaultValue={this.props.project}></input>
            </div>
            <div className="ui two bottom attched button">
              <button className="ui basic blue button">{submitText}</button>
              <button className="ui basic red button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerForm;
