import React from "react";
import EdittableTimerList from "./EdittableTimerList";
import TogglableTimerList from "./TogglableList";
class TimerDashboard extends React.Component {
  render() {
    return (
      <div className="ui three column centerd">
        <h1>Timer</h1>
        <hr />
        <div className="column">
          <EdittableTimerList />
          <TogglableTimerList isOpen="true" />
        </div>
      </div>
    );
  }
}
export default TimerDashboard;
