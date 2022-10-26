import React, { useContext } from "react";
import { StateContext } from "../../Context/context";
import Task from "../../components/task/Task";
function TaskVazifa() {
  const { state } = useContext(StateContext);
  console.log(state.tasks);
  return (
    <div>
      <h1>Jami vazifa</h1>
      {state.tasks.length > 0 ? (
        state.tasks.map((item,index) => <Task key={index} {...item} />)
      ) : (
        <h3>Hali vazifa kiritilmadi</h3>
      )}
    </div>
  );
}

export default TaskVazifa;
