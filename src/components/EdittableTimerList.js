import React from "react";
import EdittableTimer from "./EdittableTimer";
class EdittableTimerList extends React.Component {
  render() {
    return (
      <div id="timers">
        <EdittableTimer
          title="Learn React "
          project="web domination"
          elapsed="2848497"
          runningSince={null}
          editFormOpen={false}
        />
        <EdittableTimer
          title="Learn React "
          project="web domination"
          elapsed="2848497"
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}
export default EdittableTimerList;
