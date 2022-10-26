import React, {useContext, useState} from "react";
import { StateContext } from "../../Context/context";
import { DELET_TASK } from "../../Reduser/type";
import "./Task.css"

function Task({vazifaNomi, vazifaVaqti, id, done}) {
  const [finish,setFinish]=useState(false)
  done=finish
  const { dispatch}=useContext(StateContext)
  
  const deletBtn=()=>{
    dispatch({type:DELET_TASK,payload:id})
    
  }
  return (
  
    <div className="task">
      <h2 style={{textDecoration:finish && "line-through #000 5px"}}>
        {vazifaNomi}-{vazifaVaqti}
      </h2>
      <input type="checkbox" checked={finish} onChange={e=>setFinish(!finish) }/>
      <button onClick={deletBtn}>delet</button>
    </div>
  );
}

export default Task;
